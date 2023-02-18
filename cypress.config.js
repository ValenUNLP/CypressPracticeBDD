const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    baseUrl:"https://testpages.herokuapp.com/styled/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
