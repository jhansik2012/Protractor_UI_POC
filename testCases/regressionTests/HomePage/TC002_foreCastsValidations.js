let homePage = requirePage('WeatherHomePage'),
  forecastPage = requirePage('ForecastPage')

var testName = 'TC002',
  url = csvProcessor.filterData(testName, 'Url')

describe('Home Page validations', function () {
  appLogger.Log("************************ Execution Started ***************************");
  appLogger.Log("************************ " + __filename + "***************************");
  beforeEach(function () {
    global.current_TestCase = "TC002-ForeCasts_foreCastsValidations";
  });

  it('Navigate Weather url', function () {
    homePage.navigateToUrl(url);
  });

  it('Click on Hamberger Icon', function () {
    homePage.clickOnHambergerIcondisplayed();
  });

  it("Click on Today's Forecast", function () {
    forecastPage.clickOnHamburgerItemToday();
  });

  it("Verify Today's Forecast screen", function () {
    forecastPage.verifyTodayActiveScreen();
  });

  it('Click on Hamberger Icon', function () {
    homePage.clickOnHambergerIcondisplayed();
  });

  it("Click on Hourly Forecast", function () {
    forecastPage.clickOnHamburgerItemHourly();
  });

  it("Verify Hourly Forecast screen", function () {
    forecastPage.verifyHourlyActiveScreen();
  });

  it('Click on Hamberger Icon', function () {
    homePage.clickOnHambergerIcondisplayed();
  });

  it("Click on 10-day Forecast", function () {
    forecastPage.clickOnHamburgerItem10Day();
  });

  it("Verify 10-day Forecast screen", function () {
    forecastPage.verify10DayActiveScreen();
  });

  it('Click on Hamberger Icon', function () {
    homePage.clickOnHambergerIcondisplayed();
  });

  it("Click on Weekend Forecast", function () {
    forecastPage.clickOnHamburgerItemWeekend();
  });

  it("Verify Weekend Forecast screen", function () {
    forecastPage.verifyWeekendActiveScreen();
  });

  it('Click on Hamberger Icon', function () {
    homePage.clickOnHambergerIcondisplayed();
  });

  it("Click on Monthly Forecast", function () {
    forecastPage.clickOnHamburgerItemMonthly();
  });

  it("Verify Monthly Forecast screen", function () {
    forecastPage.verifyMonthlyActiveScreen();
  });

});