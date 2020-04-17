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
    title: 'Atril',
    windowClasses: ['atril'],
  },
  {
    title: 'Okular',
    description: 'Okular is a universal document viewer developed by KDE. Okular works on multiple platforms, including but not limited to Linux, Windows, macOS, *BSD, etc.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://okular.kde.org/',
    windowClasses: ['okular'],
  },
];

module.exports = items;
