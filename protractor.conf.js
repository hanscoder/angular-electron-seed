// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');

let prepareForOsWindowsIfNecessary = function (config) {
  if (process.platform === 'win32') {
    config.capabilities.chromeOptions.binary += '.exe';
  }
  return config;
};

exports.config = (function () {
  let protractorConfig = {
    allScriptsTimeout: 11000,
    specs: [
      './e2e/**/*.e2e-spec.ts'
    ],
    capabilities: {
      chromeOptions: {
        binary: './node_modules/electron/dist/electron',
        args: ['--test-type=webdriver']
      },
      'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function () {
      }
    },
    beforeLaunch: function () {
      require('ts-node').register({
        project: 'e2e/tsconfig.e2e.json'
      });
    },
    onPrepare() {
      jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    }
  };
  return prepareForOsWindowsIfNecessary(protractorConfig);
})();
