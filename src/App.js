import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory, } from "react-router-dom";
import Views from "views";
import 'antd/dist/antd.min.css';
import "./App.css";
import "../src/assets/css/style.css";

function App() {

  let history = useHistory();

  return (
    <Suspense fallback={""}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Views} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
