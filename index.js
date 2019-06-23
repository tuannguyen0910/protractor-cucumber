
var options = {
    theme: 'bootstrap',
    jsonFile: './cukereport.json',
    output: './cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metaData:{
        "App Version":"0.3.2",
        "Test Environment":"Production",
        "Browser":"Chrome",
        "Platform":"Windows 10",
        "Parallel":"Scenarios",
        "Executed":"Remote"
    }
};
reporter.generate(options);