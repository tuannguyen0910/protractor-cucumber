var {Given, Then, When} = require('cucumber');

Given(/^I go to "([^"]*)"$/, function (site) {

    return browser.get(site);
});
