const { defineConfig } = require("cypress");
const fs = require('fs');
module.exports = defineConfig({
  fixturesFolder: "test/cypress/fixtures",
  screenshotsFolder: "test/cypress/screenshots",
  videosFolder: "test/cypress/videos",
  video: true,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./test/cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://localhost:8080/",
    specPattern: "test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "test/cypress/support/index.js",
  },

  component: {
    supportFile: "test/cypress/support/component.js",
    specPattern: "test/cypress/components/**/*.cy.{js,jsx,ts,tsx}",
    indexHtmlFile: "test/cypress/support/component-index.html",
    devServer: {
      framework: "vue",
      bundler: "webpack",
      webpackConfig: require('./webpack.config.js'),
      http2: true, // https://webpack.js.org/configuration/dev-server/
//      https: false,
      https: {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.crt'),
        //cacert: fs.readFileSync('/path/to/ca.pem'),
      },
      port: 8080,
      open: true // opens browser window automatically
    },
  },
});
