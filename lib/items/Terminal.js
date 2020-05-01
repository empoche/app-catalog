/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'iTerm',
    windowClasses: ['iterm2'],
  },
  {
    title: 'Terminal',
    windowClasses: ['terminal'],
  },
  {
    title: 'Ubuntu (WSL)',
    windowNames: [
      {endsWith: 'ubuntu'},
    ],
    windowClasses: ['ubuntu.exe'],
  },
  {
    title: 'Alacritty',
    windowNames: [
      {endsWith: 'alacritty'},
    ],
    windowClasses: ['alacritty'],
  },
  {
    title: 'Urxvt',
    windowClasses: ['urxvt'],
  },
  {
    title: 'cmd.exe',
    windowClasses: ['cmd.exe',],
  },
  {
    title: 'cmd.exe',
    windowNames: [
      {endsWith: 'eingabeaufforderung'},
    ],
  },
  {
    title: 'Gnome Terminal',
    windowClasses: ['gnome-terminal-server'],
  },
  {
    title: 'Powershell',
    windowClasses: ['powershell.exe',],
  },
  {
    title: 'MinGW',
    windowClasses: ['mintty.exe',],
  },
  {
    title: 'Mate Terminal',
    windowClasses: ['mate-terminal',],
  },
  {
    title: 'st Terminal',
    windowClasses: ['st',],
  },
  {
    title: 'Tilix',
    windowClasses: ['tilix',],
  },
  {
    title: 'Git CMD',
    url: 'https://git-scm.com/',
    windowClasses: ['git-cmd.exe',],
  },
  {
    title: 'Konsole',
    url: 'https://konsole.kde.org',
    os: ['linux'],
    windowClasses: ['konsole',],
  },
  {
    title: 'Deepin Terminal',
    url: 'https://www.deepin.org/en/original/deepin-terminal',
    os: ['linux'],
    windowClasses: ['deepin-terminal', 'deepin-termina'],
  },
  {
    title: 'Yakuake',
    url: 'https://kde.org/applications/system/org.kde.yakuake',
    os: ['linux'],
    windowClasses: ['yakuake',],
  },
  {
    title: 'Terminator',
    url: 'https://gnometerminator.blogspot.com/p/introduction.html',
    os: ['linux'],
    windowClasses: ['terminator',],
  },
  {
    title: 'Kitty',
    url: 'https://sw.kovidgoyal.net/kitty',
    os: ['linux'],
    windowClasses: ['kitty',],
  },
];

module.exports = items;
