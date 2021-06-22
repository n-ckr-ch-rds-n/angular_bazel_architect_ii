export interface SplashConfig {
  /**
   * Path to the image used as the introduction screen
   *
   * @title Image source
   * @format image
   * @minLength 0
   * @maxLength 100
   */
  imageSource: string;
  /**
   * Amount of time the introduction screen is shown for in milliseconds
   *
   * @title Transition time (ms)
   * @minimum 0
   * @maximum 60000
   */
  transitionTime: number;
}
