module.exports = {
  'app shows a featured venue by default on start': (browser) => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.venue-list-detail', 3500)

    browser.expect.element('.venue-list-detail').to.be.visible
  },

  'app displays a list of available venues after search is submitted': (browser) => {
    browser
      .setValue('.search-bar__input', ['restaurant', browser.Keys.ENTER])
      .waitForElementVisible('.venues-list__item', 3500)

    browser.expect.element('.venues-list__item').to.be.visible
  },

  'clicking on a venue list item should display information about the venue clicked': (browser) => {
    browser
      .click('.venues-list__item')
      .pause(3500)

    browser.getText('.venue-list-detail__text-title', (result) => {
      browser.assert.containsText('.venues-list__item-name', result.value)
    })

    browser.expect.element('.venue-list-detail__media').to.be.visible
    browser.expect.element('.venue-list-detail__text').to.be.visible
    browser.expect.element('.venue-list-detail__description').to.be.visible
    browser.expect.element('.venue-list-detail__actions').to.be.visible

    browser.end()
  }
}
