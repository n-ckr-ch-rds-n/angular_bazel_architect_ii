import {MenuConfig} from "./menu.config";
import {VideoConfig} from "./video.config";
import {Theme} from "./theme";

export interface MicrositeConfig {

  /**
   * @title Menu configuration
   * The menu configuration
   */
  menu: MenuConfig;

  /**
   * @title Videos
   * @minItems 1
   * @maxItems 6
   */
  videos: VideoConfig[];

  /**
   * The style applied to the buttons and text
   *
   * @title Theme
   */
  theme?: Theme;
}
