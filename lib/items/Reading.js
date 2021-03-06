/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
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
    windowClasses: ['acrord32.exe', 'acrobat reader', 'acroread', 'acrotray.exe'],
  },
  {
    title: 'Calibre',
    description: 'Calibre is a cross-platform open-source suite of e-book software.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://calibre-ebook.com',
    windowClasses: ['calibre', 'e-book-viewer', 'calibre-gui', 'calibre.exe', 'calibre-parallel.exe', 'calibre-file-dialog.exe'],
  },
  {
    title: 'Atril',
    windowClasses: ['atril'],
  },
  {
    title: 'Okular',
    description: 'Okular is a universal document viewer developed by KDE. Okular works on multiple platforms, including but not limited to Linux, Windows, macOS, *BSD, etc.',
    keywords: ['pdfreader', 'reader', 'pdf'],
    os: ['linux', 'macos', 'windows'],
    url: 'https://okular.kde.org',
    windowClasses: ['okular'],
  },
  {
    title: 'Adobe Acrobat',
    description: 'Adobe Acrobat is an PDF Software.',
    keywords: ['pdfreader', 'reader', 'pdf'],
    os: ['macos', 'windows'],
    url: 'https://get.adobe.com/reader',
    windowClasses: ['acrobat.exe'],
  },
  {
    title: 'KDE Help',
    os: ['linux',],
    windowClasses: ['khelpcenter'],
  },
  {
    title: 'FoxitReader',
    description: 'PDF reader & viewer used by over 525 million users. Foxit PDF reader for Windows, Mac, and more.',
    keywords: ['pdfreader', 'reader', 'pdf'],
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.foxitsoftware.com/pdf-reader',
    windowClasses: ['foxitreader', 'foxitreader.exe', 'foxitphantompdf.exe'],
  },
  {
    title: 'qpdfview',
    description: 'qpdfview is a tabbed document viewer using Poppler, libspectre, DjVuLibre, CUPS and Qt.',
    os: ['linux',],
    keywords: ['pdfreader', 'reader', 'pdf'],
    url: 'https://github.com/bendikro/qpdfview',
    windowClasses: ['qpdfview'],
  },
  {
    title: 'Reeder',
    os: ['macos',],
    url: 'https://reederapp.com',
    windowClasses: ['reeder'],
  },
  {
    title: 'Sumatra PDF',
    os: ['windows',],
    url: 'https://www.sumatrapdfreader.org/free-pdf-reader.html',
    windowClasses: ['sumatrapdf.exe'],
  },
  {
    title: 'Polar',
    os: ['windows', 'macos', 'linux'],
    url: 'https://getpolarized.io',
    windowClasses: ['polar-bookshelf'],
  },
  {
    title: 'xreader',
    os: ['linux'],
    url: 'https://github.com/linuxmint/xreader',
    windowClasses: ['xreader'],
  },
];

module.exports = items;
