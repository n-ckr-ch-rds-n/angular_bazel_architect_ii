import {ButtonConfig} from "./button.config";
import {Placement} from "./placement";

export interface CtaButtonConfig extends ButtonConfig {
  /**
   * @title Call-to-action button placement
   */
  placement: Placement;
}
