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
];

module.exports = items;
