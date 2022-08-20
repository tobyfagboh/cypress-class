const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl":"https://practicetestautomation.com/practice-test-login",
    "viewportHeight": 800,
    "viewportWidth": 1500,
    watchForFileChanges: false
  },
});
