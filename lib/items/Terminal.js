/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'iTerm',
    windowClasses: ['iterm2', 'iterm'],
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
  {
    title: 'cool-retro-term',
    url: 'https://github.com/Swordfish90/cool-retro-term',
    os: ['linux', 'macos'],
    windowClasses: ['cool-retro-term',],
  },
  {
    title: 'QTerminal',
    url: 'https://github.com/lxqt/qterminal',
    os: ['linux', 'macos'],
    windowClasses: ['qterminal',],
  },
  {
    title: 'xfce4-terminal',
    url: 'https://docs.xfce.org/apps/terminal/start',
    os: ['linux'],
    windowClasses: ['xfce4-terminal',],
  },
  {
    title: 'Tilda',
    url: 'https://github.com/lanoxx/tilda',
    os: ['linux'],
    windowClasses: ['tilda',],
  },
  {
    title: 'Putty',
    os: ['windows'],
    url: 'https://www.putty.org',
    keywords: ['ssh', 'ssh-client', 'remote'],
    windowClasses: ['putty.exe'],
  },
  {
    title: 'Kitty',
    os: ['windows'],
    url: 'http://www.9bis.net/kitty',
    keywords: ['ssh', 'ssh-client', 'remote'],
    windowClasses: ['kitty.exe'],
  },
  {
    title: '',
    os: ['windows'],
    url: 'http://www.9bis.net/kitty',
    keywords: ['ssh', 'ssh-client', 'remote'],
    windowClasses: ['solar-putty.exe'],
  },
];

module.exports = items;
