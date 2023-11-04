import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  //Reset
  input {
    outline: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  // Typography
  :root {
    --main-bg-color: ${(props) => props.theme.bgColor};
    --text-color: ${(props) => props.theme.textColor};
    --accent-color: ${(props) => props.theme.accentColor};
    --box-shadow-color: ${(props) => props.theme.boxShadowColor};
    --box-hover-color: ${(props) => props.theme.boxHoverColor};

    --border-radius: 0.5rem;
    

    --transition-duration: 0.2s;
    --input-border-color: ${(props) => props.theme.inputBorderColor};
    --input-border-focus-color: ${(props) => props.theme.inputBorderFocusColor};
    --input-border-error-color: rgba(232, 65, 24, 0.5);
  }

  html {
    font-size: 62.5%;
  }

  body {

    background-color: var(--main-bg-color);
    color: var(--text-color);
    transition: background-color var(--transition-duration) ease-in, color var(--transition-duration) ease-in;
  }

  #root {
    display: flex;
    width: 100vw;
  }
`;
