import {MicrositeDescription} from "@rezonence/core";
import {MicrositeConfig} from "./microsite.config";
import {MicrositeForm} from "@rezonence/core/microsite/microsite.form";
import {testMicrositeConfig} from "../../environments/test.microsite.config";

const info: MicrositeDescription<MicrositeConfig> = {
  title: "Multi-video microsite",
  description: "Cycles through multiple videos",
  default: testMicrositeConfig,
  form: [
    {
      key: "menu",
      title: "Menu settings"
    },
    {
      key: "videos",
      items: [
        "videos[].title",
        "videos[].vastUrl",
        "videos[].addCtaButton",
        {
          key: "videos[].ctaButton",
          title: "Call-to-action button",
          condition: "model.videos[arrayIndex].addCtaButton",
          items: [
            "videos[].ctaButton.link",
            "videos[].ctaButton.text"
          ]
        }
      ]
    },
    "theme",
  ] as MicrositeForm<MicrositeConfig>
};

export default info;
