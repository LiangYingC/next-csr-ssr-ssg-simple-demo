import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h3 {
    margin: 0;
  }

  h4 {
    margin: 10px 0;
  }

  a {
    font-size: 14px;
    text-decoration: none;
  }

  ul {
    padding: 15px 30px;
    color: #fff;
    background-color: #111;
    border-radius: 4px;
  }

  li {
      margin: 5px 0;
      letter-spacing: 1px;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
