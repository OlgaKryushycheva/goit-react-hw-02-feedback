import 'modern-normalize';
import { css } from '@emotion/react';
import { theme } from 'styles/Theme';

export const GlobalStyle = css`
  body {
    margin: 0;
    background-color: ${theme.colors.backgroundGray};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.17;
    letter-spacing: 0.03em;
    color: ${theme.colors.black};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
