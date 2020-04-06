/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Calibre',
    windowClasses: ['calibre', 'e-book-viewer'],
  },
  {
    title: 'FBReader',
    windowNames: [
      {startsWith: 'fbreader'},
    ],
    windowClasses: ['fbreader'],
  },
  {
    title: 'Kindle',
    windowClasses: ['kindle', 'kindle.exe'],
  },
  {
    title: 'Books',
    windowClasses: ['books'],
  },
  {
    title: 'Acrobat Reader',
    windowClasses: ['acrord32.exe'],
  },
  {
    title: 'Calibre',
    windowClasses: ['calibre-gui'],
  },
  {
    title: 'Atril ',
    windowClasses: ['atril'],
  },
];

module.exports = items;
