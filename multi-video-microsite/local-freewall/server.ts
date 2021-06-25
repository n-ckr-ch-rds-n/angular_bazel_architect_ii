import {defaultDemoArticlePath, initialiseLocalS3} from "@rezonence/core/test-utils/test.utils";
import {DemoServer} from "@rezonence/core/freewall-tester/demo.server";
import {DefaultUtils} from "@rezonence/core/utils/default.utils";
import {FreeWallEventParser} from "@rezonence/core/freewall-events/event.parser";
import {InMemoryEventRecorder} from "@rezonence/core/freewall-events/in.memory.event.recorder";
import {InMemoryEventTracker} from "@rezonence/core/freewall-events/in.memory.event.tracker";
import {LocalActivationResponder} from "@rezonence/core/freewall-events/local.activation.responder";
import {LocalEventsServerDao} from "@rezonence/core/freewall-events/local.events.server.dao";
import {NodeVariableExtractor} from "@rezonence/core/utils/node.variable.extractor";
import {DefaultConfigExtractor} from "@rezonence/core/config-extractor/default.config.extractor";
import {TemplateService} from "@rezonence/core/freewall-compiler/template.service";
import {DefaultVideoService} from "@rezonence/core/video-service/default.video.service";
import {FileService} from "@djabry/fs-s3";
import {CSSService} from "@rezonence/core/freewall-compiler/css.service";
import {HTMLUtils} from "@rezonence/core/source-extractor/html.utils";
import {DefaultSourceExtractor} from "@rezonence/core/source-extractor/default.source.extractor";
import {MicrositeService} from "@rezonence/core/microsite/microsite.service";
import {DefaultFreeWallCompiler} from "@rezonence/core/freewall-compiler/default.freewall.compiler";
import {LinkReplacer} from "@rezonence/core/freewall-tester/link.replacer";
import {
  LocalPublisherConfigCompiler
} from "@rezonence/core/publisher-config-compiler/local.publisher.config.compiler";
import {DefaultDemoCompiler} from "@rezonence/core/demo-compiler/default.demo.compiler";
import {DefaultTagService} from "@rezonence/core/tag/default.tag.service";
import {LaunchConfig} from "@rezonence/core/freewall-tester/launch.config";
import {dummyArticleConfig} from "@rezonence/core/test-utils/dummy.article.config";
import {TagType} from "@rezonence/core/tag/tag.type";
import {environment} from "../src/environments/environment";
import {resolve as resolvePath} from "path";
import {tmpdir} from "os";
import {environment as awsEnv} from "@rezonence/core/aws/environment";
import {LocalS3Server} from "@rezonence/core/test-utils/local.s3.server";
import proxyConfig from "../proxy.conf.json";
import * as S3 from "aws-sdk/clients/s3";
import {SchemaValidator} from "@rezonence/schema-generator";
import {CssConfigCompiler} from "@rezonence/core";

const localS3Target = new URL(`${proxyConfig["/demo"].target}`);
const localS3Port = parseInt(localS3Target.port, 10);
const port = 4200;

let localS3Server: LocalS3Server;
let demoServer: DemoServer;
const demoPageKey = "index.html";
const adId = "ad";
const configId = "foo";

async function createDemoServer() {
  const utils = new DefaultUtils();
  localS3Server = await initialiseLocalS3({port: localS3Port});
  const eventParser = new FreeWallEventParser();
  const memoryEventRecorder = new InMemoryEventRecorder();
  const tracker = new InMemoryEventTracker(eventParser, memoryEventRecorder);
  const activator = new LocalActivationResponder();
  const eventServer = new LocalEventsServerDao(tracker, activator);
  const client = await localS3Server.start();
  const localFileService = new FileService(client as any as S3);
  const variableExtractor = new NodeVariableExtractor();
  const localConfigExtractor = new DefaultConfigExtractor(utils, localFileService, variableExtractor);
  const videoService = new DefaultVideoService(localFileService, utils);
  const templateService = new TemplateService(localFileService, utils);
  const cssConfigCompiler = new CssConfigCompiler();
  const cssService = new CSSService(templateService, localFileService, cssConfigCompiler);
  const htmlUtils = new HTMLUtils();
  const sourceExtractor = new DefaultSourceExtractor(utils, htmlUtils);
  const micrositeService = new MicrositeService(utils, templateService, localFileService, htmlUtils);
  const localFreeWallCompiler = new DefaultFreeWallCompiler(localConfigExtractor, localFileService, utils,
    videoService, cssService, templateService, micrositeService, sourceExtractor);
  const linkReplacer = new LinkReplacer(utils, localFileService, eventServer.start());
  const validator = new SchemaValidator();
  const publisherConfigCompiler = new LocalPublisherConfigCompiler(localFileService, localFreeWallCompiler,
    validator);
  const tagService = new DefaultTagService(localFileService, localConfigExtractor);
  const demoCompiler = new DefaultDemoCompiler(sourceExtractor, localFileService, tagService, htmlUtils);
  const tempDir = resolvePath(tmpdir(), utils.guid());
  const launchConfig: LaunchConfig = {
    freeWallResourceFolders: [tempDir],
    demoSourcePath: defaultDemoArticlePath,
    publisherConfig: dummyArticleConfig,
    tagType: TagType.Demo,
    freeWallConfig: environment.freeWallData.config,
    publisherResourceFolders: []
  } as LaunchConfig;
  const server = new DemoServer(utils, eventServer, linkReplacer, localFileService,
    localConfigExtractor, localFreeWallCompiler, publisherConfigCompiler,
    demoCompiler, launchConfig);
  server.adId = adId;
  server.demoPageKey = demoPageKey;
  server.configId = configId;
  return server;
}

async function cleanup() {
  console.log("Cleaning up");
  if (demoServer) {
    await demoServer.stop();
  }
  if (localS3Server) {
    await localS3Server.stop();
  }

}

const processEvents = [`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`];

async function start() {

  process.stdin.resume();
  for (const eventType of processEvents) {
    process.on(eventType as any, async () => {
      await cleanup();
      process.exit(0);
    });
  }

  try {
    demoServer = await createDemoServer();
    await demoServer.start();
    console.log(
        `http://localhost:${port}/demo/${awsEnv.DEMOS_BUCKET}/${demoServer.demoPageKey}?aid=${demoServer.adId}`
    );
  } catch (err) {
    console.error(err);
    await cleanup();
    process.exit(1);
  }

}

start();
