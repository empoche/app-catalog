/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Microsoft Store',
    windowNames: [
      {matches: 'microsoft store'},
    ],
  },
  {
    title: 'Apple App Store',
    windowClasses: ['storeuid', 'app store'],
  },

  {
    title: 'Gnome Software',
    windowClasses: ['gnome-software', 'gdebi-gtk'],
  },
  {
    title: 'Unsplash Wallpapers',
    windowClasses: ['unsplash wallpapers'],
  },
  {
    title: 'RazerGenie',
    windowClasses: ['razergenie'],
  },
  {
    title: 'Polychromatic',
    windowClasses: ['polychromatic-controller'],
  },
  {
    title: 'Logitech Gaming Software',
    windowClasses: ['lcore.exe'],
  },
  {
    title: 'Instagram',
    windowNames: [
      {matches: 'instagram'},
    ],
  },
  {
    title: 'Netflix',
    windowNames: [
      {matches: 'netflix'},
    ],
  },
  {
    title: 'Transmission',
    windowClasses: ['transmission-gtk', 'transmission'],
  },
  {
    title: 'bauh',
    windowClasses: ['bauh'],
  },
  {
    title: 'Tixati',
    url: 'https://www.tixati.com',
    windowClasses: ['tixati'],
  },
  {
    title: 'Stremio',
    description: 'Stremio is a modern media center that is a one-stop solution for your video entertainment.',
    url: 'https://www.stremio.com/',
    windowClasses: ['stremio'],
  },
  {
    title: 'Pamac',
    os: ['linux'],
    description: 'Pamac is Manjaro\'s Package Manager. It is based on libalpm with AUR and Appstream support.',
    url: 'https://wiki.manjaro.org/index.php/Pamac',
    windowClasses: ['pamac-manager'],
  },
  {
    title: 'MEGA Sync',
    description: 'Easy automated syncing between your computers and your MEGA cloud drive.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://github.com/meganz/MEGAsync',
    windowClasses: ['megasync'],
  },
];

module.exports = items;
