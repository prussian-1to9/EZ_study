import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

//createRoot(document.getElementById("root")).render(<Main />);
ReactDOM.render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById("root")
);
