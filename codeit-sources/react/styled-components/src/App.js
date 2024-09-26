//import Container from "./components/Container";
//import Input from "./components/Input";
import Button from "./components/Button";
import TermOfService from "./components/TermOfService";
import styled from "styled-components";

const StyledTermOfService = styled(TermOfService)`
  background-color: #ededed;
  border-radius: 8px;
  padding: 16px;
  margin: 40px auto;
  width: 400px;
`;
const SubmitButton = styled(Button)`
  background-color: #de117d;
  display: block;
  margin: 0 auto;
  width: 200px;

  &:hover {
    background-color: #f5070f;
  }
`;

function App() {
  return (
    <div style={{ padding: "5px" }}>
      <StyledTermOfService />
      <SubmitButton>Submit</SubmitButton>
      {/*<>
        <Container>
          <h1>Sign in</h1>
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" placeholder="styled@codeit.kr" />
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" placeholder="password" />
  
          <h1>Size</h1>
          <Input size="small" />
          <Input size="medium" />
          <Input size="large" />
  
          <h1>Round</h1>
          <Input round />
  
          <h1>Error</h1>
          <Input error />
        </Container>
        <Container>
          <h1>Normal Buttons</h1>
          <Button size="small">small</Button>
          <Button size="medium">medium</Button>
          <Button size="large">large</Button>
  
          <h1>Round Buttons</h1>
          <Button size="small" round>
            small
          </Button>
          <Button size="medium" round>
            medium
          </Button>
          <Button size="large" round>
            large
          </Button>
        </Container>
      </>*/}
    </div>
  );
}

export default App;
