import BaseApp from "base_app";

// add these if needed
// import Base64 from 'base64';
// import helpers from 'helpers';

var App = {
  defaultState: "loading",

  requests: {
    getMe: {
      url: "/api/v2/users/me.json"
    }
  },

  events: {
    "app.created": "init",
    "app.willDestroy": "logClosedApp"
  },

  async init() {

  },

  renderMain({ user }) {
    this.switchTo("main", user);
  },

  logClosedApp() {
    console.log("About to close the app.");
  },

  showError() {
    this.switchTo("error");
  },

  showErrorNotFound() {
    this.switchTo("error_not_found");
  }
};

export default BaseApp.extend(App);
