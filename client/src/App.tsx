import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style/App.scss";
import Homepage from "./components/Homepage.component";


function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
    </Router>
  );
}

export default App;
