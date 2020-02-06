/**
 * WebDriver Configuration for Local Testing (Android Emulator)
 */
const path = require('path');
const { config } = require('./wdio.conf');

config.capabilities = [{
  maxInstances: 1,
  platformName: 'Android',
  deviceName: 'Android Emulator', // Needed to connect to emulator
  // Change the path below to find the .apk file
  app: path.resolve(__dirname, '../android/app/build/outputs/apk/debug/app-debug.apk'),
  automationName: 'UiAutomator2',
}];

exports.config = config;
