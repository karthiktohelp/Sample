import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton/index.js";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import Violations from "./Violations.js";
import Card from "material-ui/Card/index.js";
import ReactScrollbar from "react-scrollbar-js";
import Divider from "material-ui/Divider";
import axios from "axios";
import URL from "./URL";
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: "green"
  }
});
const style = {
  labelstyle: {
    fontSize: "18px",
    textTransform: ""
  }
};

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Routes related to Home Component */}

        <Route exact path="/" component={Header} />

        <Route exact path="/view" component={Violations} />
      </div>
    );
  }
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_audits: []
    };
    this.change = this.change.bind(this);
  }
  componentDidMount() {
    axios
      .get(URL.ROOT_URL +"/audits/7f9a33e0-9a21-11e7-bf34-d7d620ece0e7")
      .then(response => {
        let list = response.data;
        this.setState({ list_of_audits: list });
      })
      .catch(e => {
        console.log("Error", e);
      });
  }
  change(value) {
    if (this.state.over == true) {
      this.setState({
        over: false
      });
    } else {
      this.setState({
        over: true
      });
    }
  }
  render() {
    const myScrollbar = {
      width: "auto",
      height: 530
      // right:50
    };
    let dealername = null;
    {
      this.state.list_of_audits.map(
        (row, index) =>
          (dealername = (
            <h2 key={index}>
              {row.dealer_info.dealer_name} of {row.dealer_info.personel.owner}
            </h2>
          ))
      );
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <br /> <br /> <br /> <br />
              {dealername}
            </div>
            <div className="col-sm-3" />
          </div>
        </div>

        <div className="container-fluid   ">
          <div className="row">
            <div className="col-sm-2 " />
            <div className="col-sm-6 ">
              <br /> <br /> <br /> <br />
              <Card>
                <ReactScrollbar style={myScrollbar}>
                  <ListRender
                    audit={this.state.list_of_audits}
                    over={this.state.over}
                  />
                </ReactScrollbar>
              </Card>
            </div>
            <div className="col-sm-3 " />
          </div>
        </div>
      </div>
    );
  }
}

class ListRender extends React.Component {
  render() {
    return (
      <div>
        <br />

        {this.props.audit.map(item => {
          
          var date = new Date(item.audit_info.audit_date).toLocaleDateString();

          return (
            <div key={item.audit_id}>
              <div className="container-fluid " key={item.audit_id}>
                <div>
                  <div className="col-sm-6 ">
                    <h4>
                      {item.audit_id}
                    </h4>
                  </div>
                  <div className="col-sm-4">
                    <h4>
                      {date}
                    </h4>
                  </div>
                  <div className="col-sm-1" />
                  <div className="col-sm-2 ">
                    <NavLink
                      to={{
                        pathname: "/view",
                        state: {
                          audit_id: item.audit_id,
                          audit_date:item.audit_info.audit_date
                        }
                      }}
                    >
                      <RaisedButton
                        label=" View"
                        primary={true}
                        disabled={true}
                        disabledBackgroundColor="#337AB7"
                        disabledLabelColor=" white"
                        style={style}
                        labelStyle={style.labelstyle}
                      />
                    </NavLink>
                  </div>

                  <br />
                  <br />
                  <br />
                  <Divider />         

                  <br />
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
