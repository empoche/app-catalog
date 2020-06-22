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
    windowClasses: ['itunes', 'itunes.exe'],
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
  {
    title: 'Media Player Classic Home Cinema',
    windowClasses: ['mpc-hc.exe'],
  },
  {
    title: 'Strawberry',
    windowClasses: ['strawberry'],
  },
  {
    title: 'AIMP',
    os: ['windows'],
    keywords: ['mp3', 'music', 'audio'],
    url: 'https://www.aimp.ru',
    windowClasses: ['aimp.exe'],
  },
  {
    title: 'YouTubeToMP3.exe',
    windowClasses: ['youtubetomp3.exe'],
  },
  {
    title: 'MPC-HC',
    description: 'MPC-HC is an extremely light-weight, open source media player for Windows®. It supports all common video and audio file formats available for playback.',
    windowClasses: ['mpc-hc64.exe'],
    os: ['windows'],
    keywords: ['video', 'media', 'player'],
    url: 'https://mpc-hc.org',
  },
  {
    title: 'Reaper',
    os: ['windows', 'linux'],
    keywords: ['music', 'audio'],
    url: 'https://www.reaper.fm',
    windowClasses: ['reaper.exe'],
  },
  {
    title: 'Soda Player',
    os: ['windows', 'macos'],
    keywords: ['video', 'media', 'player'],
    url: 'https://www.sodaplayer.com',
    windowClasses: ['soda player'],
  },
  {
    title: 'Rapture',
    windowClasses: ['rapture.exe'],
  },
  {
    title: 'XSplit Broadcaster',
    url: 'https://www.xsplit.com/broadcaster',
    os: ['windows'],
    windowNames: [
      {endsWith: 'xsplit broadcaster'}
    ],
  },
  {
    title: 'foobar2000',
    url: 'https://www.foobar2000.org',
    os: ['windows'],
    windowClasses: ['foobar2000.exe'],
  },
  {
    title: 'POTPlayer',
    url: 'https://potplayer.daum.net',
    os: ['windows'],
    windowClasses: ['postplayermini64.exe'],
  },
  {
    title: 'VEGAS PRO',
    url: 'https://www.vegascreativesoftware.com',
    os: ['windows'],
    windowClasses: ['vegas170.exe'],
  },
  {
    title: 'SOUND FORGE PRO',
    url: 'https://www.magix.com/us/music/sound-forge/sound-forge-pro',
    os: ['windows'],
    windowClasses: ['forge130.exe'],
  },
];

module.exports = items;
