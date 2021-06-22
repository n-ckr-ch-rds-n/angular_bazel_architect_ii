import {CtaButtonConfig} from "./cta.button.config";

export interface VideoConfig {

  /**
   * @title Video title
   * @minLength 2
   * @maxLength 30
   */
  title: string;

  /**
   * @title VAST tag URL
   * @format uri
   * @minLength 20
   * @maxLength 2048
   */
  vastUrl: string;

  /**
   * @title Add call-to-action button
   */
  addCtaButton?: boolean;

  /**
   * @title Call-to-action button
   */
  ctaButton?: CtaButtonConfig;
}
