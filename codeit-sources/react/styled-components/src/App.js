import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";

/* components */
import Container from "./components/Container";
import Header from "./components/Header";
import Label from "./components/Label";
import Input from "./components/Input";
import Button from "./components/Button";
import Link from "./components/Link";
import KakaoButton from "./components/KakaoButton";
import Spinner from "./components/Spinner";

/* component images */
import CodeitLogoImg from "./components/icons/codeit.png";

const THEMES = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  dark: {
    backgroundColor: "#03040c",
    color: "#ffffff",
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Pretendard, sans-serif;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ${Input} {
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

const CodeitLogo = styled.img`
  display: block;
  margin: 5px auto;
  width: 60%;
  max-width: 300px;
`;

export default function App() {
  const [theme, setTheme] = useState(THEMES.dark);
  const [loading, setLoading] = useState(false);

  const ButtonClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light);
    }, 800);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <CodeitLogo src={CodeitLogoImg} alt="Codeit" />
          Have you Signed up Yet?
          <Link href="#">Sign up</Link>
        </Header>
        <Label>Email</Label>
        <Input type="email" placeholder="styled@codeit.kr" />
        <Label>Password</Label>
        <Input type="password" placeholder="password" />
        <Button onClick={ButtonClick}>
          {loading ? "" : "Sign in"}
          <Spinner visible={loading} />
        </Button>
        <KakaoButton>Sign in for Kakao</KakaoButton>
      </Container>
    </ThemeProvider>
  );
}
