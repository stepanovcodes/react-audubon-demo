import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     //This allows to access all route features in the App component and and component rendered within App
//     <Router>
//       <App />
//     </Router>
//   );
