/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Malwarebytes Cybersecurity',
    windowClasses: ['mbamtray.exe'],
  },
  {
    title: 'Windows Security',
    windowNames: [
      {matches: 'windows security'},
    ],
  },
  {
    title: 'GnuPG',
    windowClasses: ['pinentry.exe'],
  },
  {
    title: 'MailStore Home',
    windowClasses: ['mailstorehome.exe'],
  },
  {
    title: 'Keychain Access',
    os: ['macos'],
    windowClasses: ['keychain access'],
  },
  {
    title: 'Update Manager',
    os: ['linux'],
    windowClasses: ['update-manager'],
  },
  {
    title: 'KeePassXC',
    os: ['linux', 'macos', 'windows'],
    url: 'https://keepassxc.org',
    windowClasses: ['keepassxc'],
  },
];

module.exports = items;
