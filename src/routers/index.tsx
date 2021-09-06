import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Page404 from "containers/Page404/Page404";
import PageHome from "containers/PageHome/PageHome";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },
  { path: "/page404", exact: true, component: Page404 },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
