const homePage = require('../support/pages/home-page/homePage')

describe("Signup", () => {
    beforeEach(() => {
        // pre step
        
        
    })

    it("with unregistered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', 'putri123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', 'putri123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with registered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('random', 'putri123')
        homePage.verifySignUpSuccessMessageAppears()
    })
})
