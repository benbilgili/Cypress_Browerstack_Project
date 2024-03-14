const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/edgewords_site.cy.js',
    headed: true
    // baseUrl: "http://localhost:3000",
  },

  browser: 'chrome',
});
