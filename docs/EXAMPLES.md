# Examples
The idea of this document is to create examples to an extent that eventually they cover most of your needs for E2E testing of UI5-based applications with WDIO + WDI5.
Hopefully this document evolves over time and is kept up-to-date. Feel free to fork and contribute to this repository.

## Cross Browser Testing
Automation test frameworks need capabilities such as navigating to web pages, user input, JavaScript execution, and more.
Those capabilities are provided by a [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html).
Depending on your browser and test framework you need a specific driver service. E.g. for Chrome and WDIO you would need [wdio-chromedriver-service](https://www.npmjs.com/package/wdio-chromedriver-service).
When it comes to cross browser testing for each browser you need a separate driver service.
To avoid managing each driver service for each browser separately, this repository uses the [selenium-standalone](https://www.npmjs.com/package/selenium-standalone) NPM package that automatically sets up all required drivers for you. 

By default, our automation test is only executed in Chrome browser.
However, the necessary code snippets which are needed for cross browser testing are already in place and just needed to get commented in by you.
Check out the [WebDriver Protocol](https://w3c.github.io/webdriver/#capabilities) for more details.

In _**wdio.conf.js**_ the `capabilities` property accepts an array (for each user agent / browser you want to use) and defines the capabilities you want to run in your WebDriver session.
- `browserName` identifies the [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent), e.g. _**chrome**_ or **_firefox_**.
- `maxInstances` defines how many instances get started at a time
``` javascript
{
    browserName: 'firefox',
    maxInstances: 1,
    acceptInsecureCerts: true
}
```

Please also note that in _**package.json**_ file we have defined selenium-standalone as one of the devDependencies:
``` json
"@wdio/selenium-standalone-service": "^7.16.14",
```

And again in _**wdio.conf.js**_ we added selenium-standalone to the list of [test runner services](https://webdriver.io/docs/configurationfile):

``` javascript
services: ['selenium-standalone','ui5'],
]
```

If you now execute the following command your automation test will run in Chrome and Firefox:
``` bash
npm run test
```