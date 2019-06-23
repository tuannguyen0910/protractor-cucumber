exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // require feature files
    tags: false,
    format: 'json:cukereport.json',
    specs: [
        'features/*.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        require: [
            'features/stepDefinitions/stepDefinitions.js' // accepts a glob
        ]
    }

};