const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      certUrl: "https://qualidade.apprbs.com.br/certificacao",
      siteUrl: "https://qualidade.apprbs.com.br/site"
    },
  },
});
