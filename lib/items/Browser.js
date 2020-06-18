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
      'google-chrome-beta',
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
    windowClasses: ['brave', 'brave-browser', 'brave.exe', 'brave browser'],
  },
  {
    title: 'Microsoft Edge',
    windowNames: [
      {endsWith: 'microsoft edge'},
      {startsWith: 'microsoft edge'},
    ],
    windowClasses: ['msedge.exe', 'microsoft edge'],
  },
  {
    title: 'Internet Download Manager',
    url: 'https://www.internetdownloadmanager.com',
    os: ['windows'],
    windowClasses: ['idman.exe'],
  },
  {
    title: 'Free Download Manager',
    url: 'https://www.freedownloadmanager.org',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['fdm.exe'],
  },
  {
    title: 'Epic Privacy Browser',
    description: 'Epic is a privacy-centric web browser. It was developed by Hidden Reflex from Chromium source code.',
    url: 'https://www.epicbrowser.com',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['epic.exe'],
  },
  {
    title: 'Stack',
    description: 'Stack is a smart browser for internet multitaskers.',
    url: 'https://getstack.app',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['stack'],
  },
  {
    title: 'Slidepad',
    description: 'A Slide Over browser for Mac.',
    url: 'https://slidepad.xyz',
    os: ['macos'],
    windowClasses: ['slidepad'],
  },
  {
    title: 'Station',
    url: 'https://getstation.com',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['station'],
  },
];

module.exports = browser;
