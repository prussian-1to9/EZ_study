import styled from "styled-components";
import Container from "./components/Container";
import SignInHeader from "./components/Header";
import Label from "./components/Label";
import Input from "./components/Input";
import Button from "./components/Button";
import Link from "./components/Link";
import KakaoButton from "./components/KakaoButton";
import CodeitLogoImg from "./components/icons/codeit.png";

const CodeitLogo = styled.img`
  display: block;
  margin: 5px auto;
  width: 60%;
  max-width: 300px;
`;

function App() {
  return (
    <Container>
      <SignInHeader>
        <CodeitLogo src={CodeitLogoImg} alt="Codeit" />
        Have you Signed up Yet?
        <Link href="#">Sign up</Link>
      </SignInHeader>
      <Label>Email</Label>
      <Input type="email" placeholder="styled@codeit.kr" />
      <Label>Password</Label>
      <Input type="password" placeholder="password" />
      <Button>Sign in</Button>
      <KakaoButton>Sign in for Kakao</KakaoButton>
    </Container>
  );
}

export default App;
