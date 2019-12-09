// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 600000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./e2e/**/*.e2e-spec.ts'],
  multiCapabilities: [
    { 'browserName': 'chrome'},
    { 'browserName': 'firefox' },
    { 'browserName': 'internet explorer'},
    { 'browserName': 'MicrosoftEdge'}
  ],
  // directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 600000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};;
