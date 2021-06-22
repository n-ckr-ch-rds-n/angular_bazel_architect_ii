export interface ButtonConfig {
  /**
   * @title Button link
   * @format uri
   * @minLength 0
   * @maxLength 2048
   */
  link: string;
  /**
   * @title Button text
   * @minLength 2
   * @maxLength 30
   */
  text: string;
}
