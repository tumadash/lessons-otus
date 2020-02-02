const path = require('path');

exports.config = {
    runner: 'local',
    // Set the port to connect to appium server
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
    }],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
}
