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
];

module.exports = items;
