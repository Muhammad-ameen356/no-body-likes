import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateAccount from "../Screens/CreateAccount/CreateAccount";
import FAQ from "../Screens/FAQ/FAQ";
import Home from "../Screens/Home/Home";
import NeedHelp from "../Screens/NeedHelp/NeedHelp";
import Subscription from "../Screens/Subscription/Subscription";

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={NeedHelp} exact />
        <Route path="/subscription" component={Subscription} exact />
        <Route path="/faqs" component={FAQ} exact />
        <Route path="/createaccount" component={CreateAccount} exact />

        {/* <Route component={Error} /> */}
      </Switch>
    </div>
  );
};

export default AppRoutes;
