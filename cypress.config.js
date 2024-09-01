const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "Authenticate",
  reporter: 'cypress-mochawesome-reporter',
  videosFolder: "target/e2e_reports/videos",
  screenshotsFolder: "target/e2e_reports/screenshots",
  screenshotOnRunFailure: true,
  video: true,
  videoOnFailOnly: true,
  reporterOptions: {
    charts: true,
    reportFilename: "automationRegression",
    reportPageTitle: "UI Regression",
    reportDir: "target/e2e_reports",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    clearOldScreenshots: true,
    saveJson: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        writeFile({ fileName, content }) {
          const filePath = path.join(__dirname, 'cypress', 'fixtures', fileName);
          fs.writeFileSync(filePath, content);
          return null;
        }
      });
      // File system tasks
      on("task", {
        readFileIfExists(filename) {
          return fs.existsSync(filename) ? fs.readFileSync(filename, "utf8") : null;
        },
        getFileFromDirIfExists({ dirname, ext }) {
          return fs.existsSync(dirname) ? fs.readdirSync(dirname, "utf8").filter(fn => fn.endsWith(ext)) : null;
        },
        getAbsolutePathToCypressDir() {
          return path.resolve(__dirname, "cypress");
        },
      });
    },
    "baseUrl": "https://www.amazon.com",
    specPattern: "cypress/integration/**/*.js",
    viewportHeight: 1300,
    viewportWidth: 1900,
  },
  "db": {
    "userName": "",
    "password": "",
    "server": "",
    "options": {
      "database": "",
      "encrypt": true,
      "rowCollectionOnRequestCompletion": true
    }
  },
  retries: {
    runMode: 2,
    openMode: 0
  },

});
