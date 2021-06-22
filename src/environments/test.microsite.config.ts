import {MicrositeConfig} from "../app/config/microsite.config";
import {Placement} from "../app/config/placement";
import {defaultTheme} from "../app/config/default.theme";

const vastUrl = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&" +
    "ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&" +
    "cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=";

export const testMicrositeConfig: MicrositeConfig = {
  menu: {
    placement: Placement.Bottom
  },
  theme: defaultTheme,
  videos: [
    {
      title: "London",
      vastUrl,
      addCtaButton: true,
      ctaButton: {
        placement: Placement.Bottom,
        link: "https://www.lner.co.uk/our-destinations/trains-to-london/",
        text: "Book now"
      }
    },
    {
      title: "Edinburgh",
      vastUrl,
      addCtaButton: true,
      ctaButton: {
        placement: Placement.Bottom,
        link: "https://www.lner.co.uk/our-destinations/trains-to-edinburgh/",
        text: "Book now"
      }
    },
    {
      title: "Leeds",
      vastUrl,
      addCtaButton: true,
      ctaButton: {
        placement: Placement.Bottom,
        link: "https://www.lner.co.uk/our-destinations/trains-to-leeds/",
        text: "Book now"
      }
    },
    {
      title: "Newcastle",
      vastUrl,
      addCtaButton: true,
      ctaButton: {
        placement: Placement.Bottom,
        link: "https://www.lner.co.uk/our-destinations/trains-to-newcastle/",
        text: "Book now"
      }
    }
  ]
};
