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
    windowClasses: ['gnome-software', 'gdebi-gtk', 'org.gnome.software'],
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
  {
    title: 'Plasma Discover',
    description: 'An Application Installer for the 22nd Century',
    os: ['linux',],
    url: 'https://userbase.kde.org/Discover',
    windowClasses: ['plasma-discover'],
  },
  {
    title: 'Logitech Unifying Software',
    os: ['windows', 'macos'],
    url: 'https://support.logi.com/hc/en-us/articles/360025297913',
    windowClasses: ['djcuhost.exe'],
  },
  {
    title: 'Snap Store',
    description: 'The app store for Linux. Publish your app for Linux users.',
    os: ['linux'],
    keywords: ['snap', 'app store', 'apps'],
    url: 'https://snapcraft.io/store',
    windowClasses: ['snap-store'],
  },
  {
    title: 'Podcasts',
    os: ['macos'],
    windowClasses: ['podcasts'],
  },
  {
    title: 'qBittorrent',
    description: 'The qBittorrent project aims to provide an open-source software alternative to µTorrent.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.qbittorrent.org',
    windowClasses: ['qbittorrent'],
  },
  {
    title: 'TV',
    os: ['macos'],
    windowClasses: ['tv'],
  },
  {
    title: 'KTorrent',
    description: 'KTorrent is a BitTorrent client that is part of the KDE Software Compilation.',
    os: ['linux'],
    url: 'https://kde.org/applications/en/internet/org.kde.ktorrent',
    windowClasses: ['ktorrent'],
  },
  {
    title: 'μTorrent',
    description: 'DescriptionμTorrent, or uTorrent is a proprietary adware BitTorrent client owned and developed by BitTorrent, Inc.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.utorrent.com/desktop',
    windowClasses: ['utorrent.exe', 'utorrent web'],
  },
  {
    title: 'Razer Synapse',
    windowClasses: ['razer synapse 3.exe'],
  },
  {
    title: 'BitTorrent',
    windowClasses: ['bittorrent.exe', 'bittorrent'],
  },
  {
    title: 'Grover Podcast',
    windowNames: [
      {matches: 'grover podcast'},
    ],
  },
  {
    title: 'Software-Properties',
    windowClasses: ['software-properties-gtk'],
  },
  {
    title: 'Movies & TV',
    windowNames: [
      {endsWith: 'movies & tv'}
    ],
  },
  {
    title: 'Cloudmusic',
    windowClasses: ['cloudmusic.exe'],
  },
  {
    title: 'Razer Central',
    windowClasses: ['razer central.exe'],
  },
  {
    title: 'MEGAsync',
    windowClasses: ['megasync.exe'],
  },
  {
    title: 'KuGou',
    windowClasses: ['kugou.exe'],
  },
  {
    title: 'Wine',
    windowClasses: ['q4wine', 'winecfg.exe'],
  },
  {
    title: 'Apple Music',
    windowClasses: ['music'],
  },
];

module.exports = items;
