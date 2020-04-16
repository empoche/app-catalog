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
    description: 'Stremio is a modern media center that is a one-stop solution for your video entertainment',
    url: 'https://www.stremio.com/',
    windowClasses: ['stremio'],
  },
];

module.exports = items;
