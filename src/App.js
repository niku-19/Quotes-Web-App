import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import AddNewQuotes from "./Pages/AddNewQuotes";
import QutesDetails from "./Pages/QutesDetails";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/add-new-quotes" exact>
            <AddNewQuotes />
          </Route>
          <Route path="/quotes/:productId">
            <QutesDetails />
          </Route>
          <Route path="*">
            <Redirect to="/quotes" />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
