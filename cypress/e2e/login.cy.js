const homePage = require('../support/pages/home-page/homePage')

describe("Login", () => {
    beforeEach(() => {
        // pre step
        
        
    })
    it("with unregistered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.Login('', 'putri123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.Login('', 'putri123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with Valid data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.Login('random', 'putri123')
        homePage.verifyLoginSuccessMessageAppears()
    })
})