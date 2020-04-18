/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Calculator',
    windowClasses: ['calculator'],
  },
  {
    title: 'Pages',
    windowClasses: ['pages'],
  },
  {
    title: 'Numbers',
    windowClasses: ['numbers'],
  },
  {
    title: 'Keynote',
    windowClasses: ['keynote'],
  },
  {
    title: 'Word',
    windowNames: [
      {endsWith: 'microsoft word'},
    ],
    windowClasses: ['winword.exe'],
  },
  {
    title: 'Excel',
    windowClasses: ['excel.exe'],
  },
  {
    title: 'PowerPoint',
    windowClasses: ['powerpnt.exe'],
  },
  {
    title: 'Access',
    url: 'https://products.office.com/en-us/access',
    windowClasses: ['msaccess.exe',],
  },
  {
    title: 'Libre Office',
    windowClasses: ['libreoffice', 'soffice'],
  },
  {
    title: 'WPS Office',
    windowClasses: ['et'],
  },
  {
    title: 'Calculator',
    windowNames: [
      {endsWith: 'calculator'},
    ],
  },
  {
    title: 'Rechner',
    windowNames: [
      {endsWith: 'rechner'},
    ],
  },
  {
    title: 'Qalculate!',
    description: 'Qalculate! is a multi-purpose cross-platform desktop calculator.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://qalculate.github.io',
    windowClasses: ['qalculate-gtk'],
  },
  {
    title: 'StarOffice',
    url: 'http://www.staroffice.org/',
    windowClasses: ['soffice.bin'],
  },
];

module.exports = items;
