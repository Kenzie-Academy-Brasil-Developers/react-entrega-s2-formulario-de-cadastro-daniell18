import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";
import { Route, Switch } from "react-router";

function App() {
  const [formData, setFormData] = useState();
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Form setFormData={setFormData} />
          </Route>
          <Route exact path="/login">
            <Login formData={formData} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
