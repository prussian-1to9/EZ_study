//import Container from "./components/Container";
import Input from "./components/Input";
import SearchInput from "./components/SearchInput";
//import Button from "./components/Button";
//import styled from "styled-components";

function App() {
  return (
    <div style={{ padding: "5px" }}>
      <h2>Input</h2>
      <Input />
      <h2>Search Input</h2>
      <SearchInput round />
    </div>
  );
}

export default App;
