/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Video Lan Client (VLC)',
    windowClasses: ['vlc', 'vlc.exe'],
  },
  {
    title: 'Totem',
    windowClasses: ['totem'],
  },
  {
    title: 'QuickTime Player',
    windowClasses: ['quicktime player'],
  },
  {
    title: 'iTunes',
    windowClasses: ['itunes'],
  },
  {
    title: 'Spotify',
    os: ['linux', 'windows', 'macos',],
    keywords: ['streaming', 'music'],
    url: 'https://www.spotify.com/',
    windowClasses: ['spotify', 'spotify.exe'],
  },
  {
    title: 'Rhythmbox',
    os: ['linux'],
    url: 'https://wiki.gnome.org/Apps/Rhythmbox',
    windowClasses: ['rhythmbox'],
  },
  {
    title: 'Lollypop',
    description: 'Lollypop is a modern music player for GNOME.',
    os: ['linux'],
    url: 'https://wiki.gnome.org/Apps/Lollypop',
    keywords: ['mp3', 'music', 'audio'],
    windowClasses: ['lollypop'],
  },
];

module.exports = items;
