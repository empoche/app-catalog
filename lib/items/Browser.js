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
    url: 'https://www.google.com/chrome',
    windowClasses: [
      'chrome.exe',
      'google chrome',
      'google-chrome',
      'google-chrome-stable',
      'chrome',
      'google-chrome-unstable',
    ],
  },
  {
    title: 'Firefox',
    url: 'https://www.mozilla.org/en-US/firefox/developer',
    windowClasses: ['navigator', 'firefox.exe', 'firefox',
      'firefoxdeveloperedition', 'firefox developer edition'],
  },
  {
    title: 'Vivaldi',
    url: 'https://vivaldi.com',
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
    url: 'https://www.opera.com',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['opera', 'opera.exe'],
  },
  {
    title: 'Brave Browser',
    description: 'Brave is a free and open-source web browser developed by Brave Software, Inc. based on the Chromium web browser.',
    url: 'https://brave.com',
    os: ['linux', 'macos', 'windows'],
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
