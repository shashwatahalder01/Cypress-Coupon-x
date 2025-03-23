const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
import 'dotenv/config';

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true, 
    html: true,     
    inline: true, 
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        writeTestStatus(status) {
          const filePath = path.resolve(__dirname, 'test-status.json');
          fs.writeFileSync(filePath, JSON.stringify({ status }, null, 2), 'utf8');
          return null;
        },
      });
      config.env = {
        WP_ADMIN_USER: process.env.WP_ADMIN_USER,
        WP_ADMIN_PASSWORD: process.env.WP_ADMIN_PASSWORD,
      };
      return config;
    },
    experimentalStudio: true,
    baseUrl: 'http://widget.test',
  },
});
