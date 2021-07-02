import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const NotFound = lazy(() => import("./containers/NotFound"))
const Todo = lazy(() => import("./containers/Todo"))

export default function Routes() {
    return (
      <Suspense fallback={<div>Loading... </div>}>  
        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    );
  }
  