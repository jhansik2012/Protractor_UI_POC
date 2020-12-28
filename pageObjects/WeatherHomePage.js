'use strict';

const { element, browser, by } = require("protractor");

//**************************** Required web data*************************************//
requireLibrary('Locator');

//***************************** Page Objects *************************************//

// Header
var hamburgerIcon = element(by.xpath("//button[@data-testid='hamburgerMenu']")),
  
    languageSelectorStatus = element(by.xpath("//span[@data-testid='languageSelectorStatus']")),
    languageSelectorUnit = element(by.xpath("//span[text()='°C']']")),
    WheatherLogo = element(by.xpath("//a[@aria-label='The Weather Company - Home']")),
    searchBox = element(by.id("LocationSearch_input"))

module.exports = {
    /*Used to save application verification data form dynamic verification*/
    specData: {},

    navigateToUrl : function (url) {
         actions.Get(url,10)
     },

    verifyHambergerIconDisplayed: function () {
        actions.verifyElementDisplayed(hamburgerIcon, true, "humberger Icon")
    },

    verifyLogoDisplayed: function () {
        actions.verifyElementDisplayed(WheatherLogo, true, "Whether logo ")
    },

    verifySearchBoxDisplayed: function () {
        actions.verifyElementDisplayed(searchBox, true, "search Box ")
    },

    verifyLanguageSelectorStatusDisplayed: function () {
        actions.verifyElementDisplayed(languageSelectorStatus, true, "Language Selector Status")
    },

    verifyLanguageSelectorUnitDisplayed: function () {
        actions.verifyElementDisplayed(languageSelectorUnit, true, "Language Selector Unit")
    },

    clickOnHambergerIcondisplayed: function () {
        actions.Click(hamburgerIcon, "humberger Icon")
        Short_Wait()
    }
};