import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import StartCoding from "./components/StartCoding/StartCoding";
import { CodeState } from "./components/Context/Context";

function App() {
  return (
    <CodeState>
      <Router>
        <div className="App">
          <Route exact path="/" component={Hero} />
          {/* <Route path="/startcoding">
          <StartCoding />
        </Route> */}
          <Route path="/question/:number" component={StartCoding} />
        </div>
      </Router>
    </CodeState>
  );
}

export default App;
