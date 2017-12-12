describe('Navbar', () => {
  it('exists', (browser) => {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('[data-navbar=""]', 5000)
      .end()
  })

  it('has links to Home, Services and Estimate pages', (browser) => {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .assert.elementPresent('[data-navbar="link--home"]')
      .assert.elementPresent('[data-navbar="link--services"]')
      .assert.elementPresent('[data-navbar="link--estimate"]')
  })
})
