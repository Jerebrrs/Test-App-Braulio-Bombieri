const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://monitor.braulio.io',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
