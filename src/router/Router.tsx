import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Page404 } from "../components/pages/Page404";
import { Top } from "../components/pages/Top";
import { judgeRoutes } from "./JudgeRoutes";
import { resultRoutes } from "./ResultRoutes";
import { selectionRoutes } from "./SelectionRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path='/'>
        <Top />
      </Route>
      <Route path='/selection' render={({ match: { url }}) => (
        <Switch>
          {selectionRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`} >
              {route.children}
            </Route>
          ))}
        </Switch>
      )} />
      <Route path='/judge' render={( { match: { url }}) => (
        <Switch>
          {judgeRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )} />
      <Route path='/result' render={( { match: { url }}) => (
        <Switch>
          {resultRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )} />
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  )
});