/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'OBS',
    windowNames: [
      {startsWith: 'obs'},
    ],
    windowClasses: ['obs'],
  },
  {
    title: 'Darktable',
    windowNames: [
      {startsWith: 'darktable'},
    ],
    windowClasses: ['darktable'],
  },
  {
    title: 'Adobe Lightroom',
    windowClasses: ['adobe lightroom', 'lightroom.exe'],
  },
  {
    title: 'Adobe Photoshop',
    windowClasses: ['photoshop cc', 'photoshop.exe', 'photoshop'],
  },
  {
    title: 'Adobe XD',
    windowNames: [
      {matches: 'adobe xd'},
    ],
    windowClasses: ['xd'],
  },
  {
    title: 'Creative Cloud',
    windowClasses: ['creative cloud.exe', 'creative cloud'],
  },
  {
    title: 'Affinity Designer',
    windowClasses: ['affinity designer'],
  },
  {
    title: 'Photos',
    windowClasses: ['photos'],
  },
  {
    title: 'Fotos',
    windowNames: [
      {endsWith: 'fotos'},
    ],
  },
  {
    title: 'Pinta',
    windowClasses: ['pinta'],
  },
  {
    title: 'Gimp',
    windowClasses: ['gimp', 'gimp-2.10', 'file-jpg', 'gimp-2.10.exe', 'gimp.exe'],
  },
  {
    title: 'Feh',
    windowClasses: ['feh'],
  },
  {
    title: 'icofx',
    windowClasses: ['icofx.exe'],
  },
  {
    title: 'IrfanView',
    windowNames: [
      {endsWith: 'irfanview'},
    ],
    windowClasses: ['i_view64.exe',]
  },
  {
    title: 'Bildschirmausschnitte',
    windowNames: [
      {endsWith: 'bildschirmausschnitte'},
    ],
  },
  {
    title: 'Gvenview',
    description: 'Gwenview is a fast and easy to use image viewer by KDE, ideal for browsing and displaying a collection of images.',
    os: ['linux'],
    url: 'https://kde.org/applications/graphics/org.kde.gwenview',
    windowClasses: ['gwenview'],
  },
  {
    title: 'Font Viewer',
    description: 'KFontview is an application to view and install different types of fonts.',
    os: ['linux'],
    url: 'https://docs.kde.org/trunk5/en/kde-workspace/kfontview/index.html',
    windowClasses: ['kfontview', 'kfontinst'],
  },
  {
    title: 'Inkscape',
    description: 'Inkscape is a professional vector graphics editor for Linux, Windows and macOS. It is free and open source.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://inkscape.org',
    windowClasses: ['inkscape'],
  },
  {
    title: 'PhotoFiltre Studio',
    description: 'PhotoFiltre Studio is a complete image retouching program.',
    os: ['windows'],
    url: 'http://www.photofiltre-studio.com',
    windowClasses: ['pfstudiox.exe'],
  },
  {
    title: 'Microsoft Paint',
    os: ['windows'],
    windowClasses: ['mspaint.exe'],
  },
];

module.exports = items;
