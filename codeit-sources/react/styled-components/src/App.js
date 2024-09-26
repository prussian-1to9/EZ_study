import Container from "./components/Container";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
