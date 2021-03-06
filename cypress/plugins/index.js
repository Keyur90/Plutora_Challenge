// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
/// <reference types="@shelex/cypress-allure-plugin" />
module.exports = function (on, config) {
  // configure plugins here
};
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// import * as allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};
