import "./App.css";
import Layout from "./Components/Layout.jsx";
import Edit from "./Components/Edit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/Edit" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
