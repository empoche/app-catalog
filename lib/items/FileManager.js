/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Nemo',
    description: 'File browser for Cinnamon.',
    os: ['linux'],
    url: 'https://github.com/linuxmint/nemo',
    windowClasses: ['nemo'],
  },
  {
    title: 'Thunar',
    os: ['linux'],
    windowClasses: ['thunar'],
  },
  {
    title: 'Explorer',
    os: ['windows'],
    windowClasses: ['explorer.exe'],
  },
  {
    title: 'Nautilus',
    description: 'Simple file manager for GNOME.',
    os: ['linux'],
    url: 'https://wiki.gnome.org/action/show/Apps/Files?action=show&redirect=Apps%2FNautilus',
    windowClasses: ['org.gnome.nautilus', 'nautilus'],
  },
  {
    title: 'Finder',
    windowClasses: ['finder'],
  },
  {
    title: 'Dolphin',
    description: 'Dolphin is a lightweight file manager. It has been designed with ease of use and simplicity in mind, while still allowing flexibility and customisation.',
    os: ['linux'],
    url: 'https://kde.org/applications/system/org.kde.dolphin',
    windowClasses: ['dolphin'],
  },
  {
    title: 'Caja',
    description: 'Caja is the mate file manager.',
    os: ['linux'],
    url: 'https://mate-desktop.org',
    windowClasses: ['caja'],
  },
  {
    title: 'Listary',
    description: 'Listary is a search utility for Windows.',
    os: ['windows'],
    url: 'https://www.listary.com',
    windowClasses: ['listary.exe'],
  },
  {
    title: 'Q-Dir',
    os: ['windows'],
    url: 'http://www.q-dir.com',
    windowClasses: ['q-dir.exe'],
  },
  {
    title: 'QSpace',
    os: ['macos'],
    url: 'https://apps.apple.com/us/app/qspace/id1469774098?mt=12',
    windowClasses: ['qspace'],
  },
  {
    title: 'XYPlorer',
    os: ['windows'],
    url: 'https://www.xyplorer.com',
    windowClasses: ['xyplorer.exe'],
  },
  {
    title: 'Double Commander',
    os: ['linux', 'windows'],
    url: 'https://doublecmd.sourceforge.io',
    windowClasses: ['doublecmd'],
  },
];

module.exports = items;
