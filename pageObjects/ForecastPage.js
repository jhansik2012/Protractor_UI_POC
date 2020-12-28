'use strict';

const { element, browser, by } = require("protractor");

//**************************** Required web data*************************************//
requireLibrary('Locator');

//***************************** Page Objects *************************************//

// Header
var hamburgerIcon = element(by.xpath("//button[@data-testid='hamburgerMenu']")),
    hamburgerItemToday = element(by.xpath("//a[text()='Today']")),
    hamburgerItemHourly = element(by.xpath("//a[text()='Hourly']")),
    hamburgerItem10Day = element(by.xpath("//a[text()='10-day']")),
    hamburgerItemWeekend = element(by.xpath("//a[text()='Weekend']")),
    hamburgerItemMonthly = element(by.xpath("//a[text()='Monthly']")),

    todaysScreenHeader = element(by.xpath("//h2[contains(text(),\"Today's Forecast\")]")),
    hourlyScreenHeader = element(by.xpath("//strong[text()='Hourly Weather']")),
    tenDayScreenHeader = element(by.xpath("//strong[text()='10-Day Weather']")),
    weekendScreenHeader = element(by.xpath("//strong[text()='Weekend Weather']")),
    monthlyScreenHeader = element(by.xpath("//h1[contains(text(),'Monthly Weather')]"))

module.exports = {
    /*Used to save application verification data form dynamic verification*/
    specData: {},

    verifyHamburgerItemTodayDisplayed: function () {
        actions.verifyElementDisplayed(hamburgerItemToday, true, "Hamburger Item Today")
    },

    verifyHamburgerItemHourlyDisplayed: function () {
        actions.verifyElementDisplayed(hamburgerItemHourly, true, "Hamburger Item Hourly")
    },

    verifyHamburgerItem10DayDisplayed: function () {
        actions.verifyElementDisplayed(hamburgerItem10Day, true, "Hamburger Item 10Day")
    },

    verifyHamburgerItemWeekendDisplayed: function () {
        actions.verifyElementDisplayed(hamburgerItemWeekend, true, "Hamburger Item Weekend")
    },

    verifyHamburgerItemMonthlyDisplayed: function () {
        actions.verifyElementDisplayed(hamburgerItemMonthly, true, "Hamburger Item Monthly")
    },

    clickOnHamburgerItemToday: function () {
        actions.Click(hamburgerItemToday, "Hamburger Item Today")
        Long_Wait()
    },

    // verifyTodayActiveScreen: function () {
    //     hamburgerItemToday.getAttribute('class').then(function (value) {
    //         actions.expectToContain(value, 'active', "Today's Weather Screen")
    //     })
    // },

    verifyTodayActiveScreen: function () {
        actions.verifyElementDisplayed(todaysScreenHeader, true, "Today's Forecast Screen")
    },

    clickOnHamburgerItemHourly: function () {
        actions.Click(hamburgerItemHourly, "Hamburger Item Hourly")
        Long_Wait()
    },

    // verifyHourlyActiveScreen: function () {
    //     hamburgerItemHourly.getAttribute('class').then(function (value) {
    //         actions.expectToContain(value, 'active', "Hourly Weather Screen")
    //     })
    // },

    verifyHourlyActiveScreen: function () {
        actions.verifyElementDisplayed(hourlyScreenHeader, true, "Houly Forecast Screen")
    },

    clickOnHamburgerItem10Day: function () {
        actions.Click(hamburgerItem10Day, "Hamburger Item 10Day")
        Long_Wait()
    },

    // verify10DayActiveScreen: function () {
    //     hamburgerItem10Day.getAttribute('class').then(function (value) {
    //         actions.expectToContain(value, 'active', "10-Day Weather Screen")
    //     })
    // },

    verify10DayActiveScreen: function () {
        actions.verifyElementDisplayed(tenDayScreenHeader, true, "10-day Forecast Screen")
    },

    clickOnHamburgerItemWeekend: function () {
        actions.Click(hamburgerItemWeekend, "Hamburger Item Weekend")
        Long_Wait()
    },

    // verifyWeekendActiveScreen: function () {
    //     hamburgerItemWeekend.getAttribute('class').then(function (value) {
    //         actions.expectToContain(value, 'active', "Weekend Weather Screen")
    //     })
    // },

    verifyWeekendActiveScreen: function () {
        actions.verifyElementDisplayed(weekendScreenHeader, true, "Weekend Forecast Screen")
    },

    clickOnHamburgerItemMonthly: function () {
        actions.Click(hamburgerItemMonthly, "Hamburger Item Monthly")
        Long_Wait()
    },

    // verifyMonthlyActiveScreen: function () {
    //     hamburgerItemMonthly.getAttribute('class').then(function (value) {
    //         actions.expectToContain(value, 'active', "Monthly Weather Screen")
    //     })
    // },

    verifyMonthlyActiveScreen: function () {
        actions.verifyElementDisplayed(monthlyScreenHeader, true, "Monthly Forecast Screen")
    },
};