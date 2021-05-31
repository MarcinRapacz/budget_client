import { Switch, Route } from "react-router-dom";
import FinancialEventPage from "./FinancialEventPage";
import Dashboard from "../components/Dashboard";
import Menu from "../components/Menu";

const Main = () => {
  return (
    <main className="flex flex-col md:flex-row">
      <Menu />

      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/financial-event" exact>
          <FinancialEventPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
