describe('Navbar', () => {
  it('exists', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('[data-navbar=""]', 5000)
      .end()
  })

  it('has two links to Home, one link to Services and one to Estimate pages', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .assert.elementPresent('[data-navbar="link--home-1"]')
      .assert.elementPresent('[data-navbar="link--home-2"]')
      .assert.elementPresent('[data-navbar="link--services"]')
      .assert.elementPresent('[data-navbar="link--estimate"]')
  })

  it('redirects to Services page, when clicked on link', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .click('[data-navbar="link--services"]')
      .assert.urlContains('/en/services')
  })

  it('redirects to Home page, when clicked on link', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .click('[data-navbar="link--services"]')
      .assert.urlContains('/en/services')
      .click('[data-navbar="link--home-1"]')
      .assert.urlContains('/en')
      .click('[data-navbar="link--services"]')
      .click('[data-navbar="link--home-2"]')
      .assert.urlContains('/en')
  })

  it('redirects to Estimate page, when clicked on link', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .click('[data-navbar="link--estimate"]')
      .assert.urlContains('/en/estimate-project')
  })

  it('adds proper class to Navbar when scrolled down more than 70px', (browser) => {
    browser
      .url(browser.globals.devServerURL)
      .execute('scrollTo(0, 75)')
      .assert.cssClassPresent('[data-navbar=""]', 'navbar--hidden')
  })
})
