var Jasmine = require('jasmine');
var jasmine = new Jasmine();

//Load configuration from a file or from an object.
//jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        "**/*[sS]pec.js"
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});

var AllureReporter = require('jasmine-allure-reporter');
jasmine.addReporter(new AllureReporter({
  resultsDir: 'allure-results'
}));

jasmine.execute();
