
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignUpPopUp2 from "./components/SignUpPopUp2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|sign-up-pop-up-2-1)">
          <SignUpPopUp2
            text3="Please enter the 6-digit code we sent to your mobile phone to confirm."
            x2OutlinedcFocusedProps={signUpPopUp2Data.x2OutlinedcFocusedProps}
            x3ContainedATextProps={signUpPopUp2Data.x3ContainedATextProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const x2OutlinedcFocusedData = {
    inputText: "XXX - XXX",
    label2: "Enter Code *",
};

const x3ContainedATextData = {
    children: "Submit",
};

const signUpPopUp2Data = {
    x2OutlinedcFocusedProps: x2OutlinedcFocusedData,
    x3ContainedATextProps: x3ContainedATextData,
};

