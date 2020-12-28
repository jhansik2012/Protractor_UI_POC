let homePage = requirePage('WeatherHomePage')

var testName = 'TC001',
  url = csvProcessor.filterData(testName, 'Url')

describe('Home Page validations', function () {
  appLogger.Log("************************ Execution Started ***************************");
  appLogger.Log("************************ " + __filename + "***************************");
  beforeEach(function () {
    global.current_TestCase = "TC001_HomePage-HomePageObjectValidations";
  });

  it('Navigate Weather url', function () {
    homePage.navigateToUrl(url);
  });

  it('Verify Hambergerr Icon', function () {
    reporter.appendTest('<b>Home Page Validations</b>', '', "PASS");
    homePage.verifyHambergerIconDisplayed();
  });

  it('Verify Logo', function () {
    homePage.verifyLogoDisplayed();
  });

  it('Verify Search Box', function () {
    homePage.verifySearchBoxDisplayed();
  });

  it('Verify Language Selector Status', function () {
    homePage.verifyLanguageSelectorStatusDisplayed();
  });

  // it('Verify Language Selector Unit', function () {
  //   homePage.verifyLanguageSelectorUnitDisplayed();
  // });

});