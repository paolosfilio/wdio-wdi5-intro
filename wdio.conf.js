const path = require('path');

exports.config = {
    runner: 'local',
    specs: [
        './*.spec.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }
    ],
    services: ['selenium-standalone','ui5'],
    wdi5: {
        screenshotPath: path.join('wdio-ui5-service', 'test', 'report', 'screenshots'),
        logLevel: 'verbose', // error | verbose | silent
        platform: 'browser', // electron, browser, android, ios
        url: 'index.html',
        deviceType: 'web',
    },
    framework: 'mocha',
    logLevel: 'info',
    logLevels: {
         webdriver: 'warn',
    },
    bail: 0,
    baseUrl: 'https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
