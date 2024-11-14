import ReactDOM from "react-dom";
import Main from "./Main";
import React from "react";

// createRoot(document.getElementById("root")).render(<Main />);
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
