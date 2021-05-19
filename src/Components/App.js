import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PhonebookView = lazy(() =>
    import("../Views/PhonebookView" /* webpackChunkName: "phonebook" */)
);


const App = () => (
    <>
      <Suspense
          fallback={
            <Loader
                type="TailSpin"
                color="teal"
                height={130}
                width={130}
                style={{
                  textAlign: "center",
                }}
            />
          }
      >
        <Switch>
          <Route path="/" exact component={PhonebookView} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
);

export default App;