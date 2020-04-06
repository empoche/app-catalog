/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const browser = [
  {
    title: 'Chromium',
    description: 'Open-Source browser from Google.',
    url: 'https://www.chromium.org/',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['chromium-browser-chromium', 'chromium-browser', 'chromium', 'chromium.exe'],
  },
  {
    title: 'Google Chrome',
    windowClasses: ['chrome.exe', 'google chrome', 'google-chrome', 'google-chrome-stable'],
  },
  {
    title: 'Firefox',
    windowClasses: ['navigator', 'firefox.exe', 'firefox',
      'firefoxdeveloperedition', 'firefox developer edition'],
  },
  {
    title: 'Vivaldi',
    windowNames: [
      {endsWith: 'vivaldi'},
    ],
    windowClasses: ['vivaldi-stable', 'vivaldi.exe'],
  },
  {
    title: 'Microsoft Edge',
    windowNames: [
      {endsWith: '- microsoft edge'},
    ],
  },
  {
    title: 'Internet Explorer',
    windowNames: [
      {endsWith: 'internet explorer'},
    ],
    windowClasses: ['iexplore.exe'],
  },
  {
    title: 'Safari',
    windowClasses: ['safari'],
  },
  {
    title: 'Opera',
    windowClasses: ['opera'],
  },
  {
    title: 'Brave Browser',
    windowClasses: ['brave', 'brave-browser'],
  },
  {
    title: 'Microsoft Edge',
    windowNames: [
      {endsWith: 'microsoft edge'},
      {startsWith: 'microsoft edge'},
    ],
  },
];

module.exports = browser;
