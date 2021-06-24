import {FreeWallData} from "@rezonence/sdk";
import {Placement} from "@rezonence/sdk";
import {testFreewallConfig} from "./test.freewall.config";
import {defaultGaAccountId} from "@rezonence/core/tracking/default.ga.account.id";

export const testFreewallData: FreeWallData = {
  configId: "foo",
  creativeId: "bar",
  sessionId: "baz",
  placement: Placement.Response,
  questionIndex: 0,
  startTime: new Date().getTime(),
  trackerSource: "http://foo.bar.com",
  url: "http://foo.bar.baz.com",
  answerOrder: testFreewallConfig.questions[0].answers.map((answer, index) => index),
  config: testFreewallConfig,
  googleAnalytics: {
    enabled: false,
    accountId: defaultGaAccountId
  }
};
