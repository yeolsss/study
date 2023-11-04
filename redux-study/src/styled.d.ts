import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    boxShadowColor: string;
    boxHoverColor: string;
    tabBgColor: string;
    errorColor: string;
    inputBorderColor: string;
    inputBorderFocusColor: string;
  }
}
