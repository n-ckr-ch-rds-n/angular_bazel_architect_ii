import {FreeWallConfig} from "@rezonence/core/config-extractor/freewall/freewall.config";
import {defaultFreewallConfig} from "@rezonence/core/test-utils/default.freewall.config";
import {Answer} from "@rezonence/core/config-extractor/freewall/answer";
import angularConfig from "../../../angular.json";

export const testFreewallConfig: FreeWallConfig = JSON.parse(JSON.stringify(defaultFreewallConfig)) as FreeWallConfig;

const port = angularConfig.projects[angularConfig.defaultProject].architect.serve.options.port;

const question = testFreewallConfig.questions[0];
question.que = "If you could jump on the train right now, where would you go?";

const defaultAnswer: Answer = {
  ans: "",
  aln: "",
  rix: 0,
  kix: -2,
  tof: true,
  trackers: [],
};
testFreewallConfig.iframe = {
  src: `http://localhost:${port}`,
  dyn: true,
  viz: true,
  frn: false,
  hdq: true
};

question.ran = true;

testFreewallConfig.image.img = "assets/banner.jpg";

question.answers = [
  {
    ...defaultAnswer,
    ans: "London"
  },
  {
    ...defaultAnswer,
    ans: "Edinburgh"
  },
  {
    ...defaultAnswer,
    ans: "Leeds"
  },
  {
    ...defaultAnswer,
    ans: "Newcastle"
  }
];
