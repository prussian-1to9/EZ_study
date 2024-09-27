import styled, { createGlobalStyle } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import Label from "./components/Label";
import Input from "./components/Input";
import Button from "./components/Button";
import Link from "./components/Link";
import KakaoButton from "./components/KakaoButton";
import CodeitLogoImg from "./components/icons/codeit.png";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Pretendard, sans-serif;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const CodeitLogo = styled.img`
  display: block;
  margin: 5px auto;
  width: 60%;
  max-width: 300px;
`;

function App() {
  return (
    <>
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
        <Button>Sign in</Button>
        <KakaoButton>Sign in for Kakao</KakaoButton>
      </Container>
    </>
  );
}

export default App;
