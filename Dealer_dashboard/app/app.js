
import React from "react";
import ReactDOM from "react-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import injectTapEventPlugin from "react-tap-event-plugin";

import { HashRouter } from "react-router-dom";

//  ReactDOM.render(<Dropd/>, document.getElementById("root"));



import Home from "./Home.js";

//import Violations from "./Violations.js";



injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: "green"
  }
});

ReactDOM.render(
  <HashRouter>
  <MuiThemeProvider muiTheme={muiTheme}>
    <Home />
  </MuiThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
