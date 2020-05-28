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
  {
    title: 'Mixxx',
    description: 'Free and open source DJ software for Windows, macOS, and Linux.',
    keywords: ['mix', 'dj', 'audio'],
    os: ['linux', 'windows', 'macos',],
    url: 'https://www.mixxx.org',
    windowClasses: ['mixxx'],
  },
  {
    title: 'Ardour',
    description: 'Record, Edit, and Mix on Linux, macOS and Windows.',
    keywords: ['mix', 'dj', 'audio'],
    os: ['linux', 'windows', 'macos',],
    url: 'https://ardour.org',
    windowClasses: ['ardour_ardour', 'ardour-5.12.0'],
  },
  {
    title: 'Audacious',
    description: 'Audacious is an open source audio player. A descendant of XMMS, Audacious plays your music how you want it.',
    keywords: ['mp3', 'music', 'audio'],
    os: ['linux', 'windows'],
    url: 'https://audacious-media-player.org',
    windowClasses: ['audacious'],
  },
  {
    title: 'Camtasia',
    description: 'Screen Recorder and Video Editor.',
    keywords: ['video', 'screenrecorder', 'record'],
    os: ['windows', 'macos',],
    url: 'https://www.techsmith.com/video-editor.html',
    windowClasses: ['camtasiastudio.exe', 'camtasiastudio'],
  },
];

module.exports = items;
