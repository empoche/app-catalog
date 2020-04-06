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
    title: 'Libre Office',
    windowClasses: ['libreoffice', 'soffice'],
  },
  {
    title: 'WPS Office',
    windowClasses: ['et'],
  },
];

module.exports = items;
