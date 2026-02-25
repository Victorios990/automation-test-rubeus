const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      certUrl: "https://qualidade.apprbe.com.br/certificacao",
      siteUrl: "https://qualidade.apprbs.com.br/site"
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false, 
  },
});