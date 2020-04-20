/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

// UTILITY
const items = [
  {
    title: 'Empoche',
    description: 'This application.',
    url: 'https://empoche.com',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['empoche', 'empoche.exe'],
  },
  {
    title: 'super productivity',
    windowClasses: ['superproductivity'],
  },
  {
    title: 'Remote Desktop',
    windowNames: [
      {matches: 'remote desktop'},
    ],
  },
  {
    title: 'Eog',
    windowClasses: ['eog'],
  },
  {
    title: 'Calendar',
    windowClasses: ['calendar'],
  },
  {
    title: 'Trello',
    url: 'https://trello.com',
    windowClasses: ['trello'],
  },
  {
    title: 'Todoist',
    url: 'https://todoist.com',
    windowClasses: ['todoist'],
  },
  {
    title: 'Evernote',
    url: 'https://www.evernote.com',
    windowClasses: ['evernote'],
  },
  {
    title: 'Spectacle',
    description: 'Move and resize windows with ease.',
    os: ['macos'],
    url: 'https://www.spectacleapp.com',
    windowClasses: ['spectacle']
  },
  {
    title: 'Console',
    windowClasses: ['console'],
  },
  {
    title: 'System Information',
    windowClasses: ['system information'],
  },
  {
    title: 'Reminders',
    windowClasses: ['reminders'],
  },
  {
    title: 'Maps',
    windowClasses: ['maps'],
  },
  {
    title: 'Preview',
    windowClasses: ['preview'],
  },
  {
    title: 'Evince Viewer',
    windowClasses: ['evince'],
  },
  {
    title: 'Dropbox',
    url: 'https://www.dropbox.com',
    windowClasses: ['dropbox', 'dropbox.exe'],
  },
  {
    title: 'OneNote',
    windowNames: [
      {matches: 'onenote'},
    ],
  },
  {
    title: 'Alarms & Clock',
    windowNames: [
      {matches: 'alarms & clock'},
    ],
  },
  {
    title: 'Archive Utility',
    windowClasses: ['archive utility'],
  },
  {
    title: 'CopyQ',
    windowClasses: ['copyq'],
  },
  {
    title: 'Windows ServerManager',
    windowClasses: ['servermanager.exe'],
  },
  {
    title: 'Remmina (RDP)',
    windowClasses: ['org.remmina.remmina'],
  },
  {
    title: 'WinSCP',
    windowClasses: ['winscp.exe',],
  },
  {
    title: 'XAMPP',
    description: 'XAMPP is a completely free, easy to install Apache distribution containing MariaDB, PHP, and Perl.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.apachefriends.org',
    windowClasses: ['xampp-control.exe',],
  },
  {
    title: 'FileZilla',
    windowClasses: ['filezilla.exe', 'filezilla'],
  },
  {
    title: 'WinSnap',
    windowNames: [
      {endsWith: 'winsnap'},
    ],
  },
  {
    title: 'Snipping-Tool',
    windowNames: [
      {endsWith: 'ausschneiden und skizzieren'},
    ],
  },
  {
    title: 'Osmo',
    windowClasses: ['osmo',],
  },
  {
    title: 'managetime',
    windowClasses: ['managetime',],
  },
  {
    title: 'GParted',
    windowClasses: ['gpartedbin',],
  },
  {
    title: 'Gnome Screenshot',
    windowClasses: ['gnome-screenshot',],
  },
  {
    title: 'Gnome Calendar',
    windowClasses: ['gnome-calendar',],
  },
  {
    title: 'PavuControl',
    windowClasses: ['pavucontrol'],
  },
  {
    title: '7-Zip',
    windowClasses: ['7zfm.exe', '7zg.exe'],
  },
  {
    title: 'WinSshFS',
    windowClasses: ['winsshfs.exe'],
  },
  {
    title: 'File Roller',
    url: 'http://fileroller.sourceforge.net',
    windowClasses: ['file-roller'],
  },
  {
    title: 'XFreeRDP',
    windowClasses: ['xfreerdp'],
  },
  {
    title: 'GTimeLog',
    windowClasses: ['gtimelog'],
  },
  {
    title: 'Cheese',
    windowClasses: ['cheese'],
  },
  {
    title: 'Gnome Pomodoro',
    description: 'A Pomodoro timer for Gnome',
    os: ['linux'],
    url: 'https://gnomepomodoro.org',
    windowClasses: ['gnome-pomodoro'],
  },
  {
    title: 'Gnome To Do',
    description: 'Personal task manager for GNOME',
    os: ['linux'],
    url: 'https://wiki.gnome.org/Apps/Todo',
    windowClasses: ['gnome-todo'],
  },
  {
    title: 'TeamViewer',
    description: 'TeamViewer is a comprehensive, remote access, remote control and remote support solution.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.teamviewer.com',
    windowClasses: ['teamviewer.exe', 'teamviewer'],
  },
  {
    title: 'qt-todo',
    description: 'A simple, memory efficient GUI program for making TODO lists.',
    os: ['linux'],
    url: 'https://snapcraft.io/qt-todo',
    windowClasses: ['qt-todo'],
  },
  {
    title: 'Flameshot',
    description: 'Powerful yet simple to use screenshot software.',
    os: ['linux'],
    url: 'https://flameshot.js.org',
    windowClasses: ['flameshot'],
  },
  {
    title: 'Ark',
    description: 'Ark is a graphical file compression/decompression utility with support for multiple formats.',
    os: ['linux'],
    url: 'https://kde.org/applications/utilities/org.kde.ark',
    windowClasses: ['ark'],
  },
  {
    title: 'CherryTree',
    description: 'A hierarchical note taking application, featuring rich text and syntax highlighting, storing data in a single XML or SQLite file.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://github.com/giuspen/cherrytree',
    windowClasses: ['cherrytree'],
  },
  {
    title: 'Microsoft Management Console',
    windowClasses: ['mmc.exe'],
  },
  {
    title: 'Shutter',
    description: 'Screenshot tool.',
    os: ['linux'],
    url: 'https://shutter-project.org',
    windowClasses: ['shutter'],
  },
  {
    title: 'Gnote',
    description: 'Gnote is a port of Tomboy to C++.',
    os: ['linux'],
    url: 'https://wiki.gnome.org/Apps/Gnote',
    windowClasses: ['gnote'],
  },
  {
    title: 'balenaEtcher',
    description: 'Flash OS images to SD cards & USB drives, safely and easily.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.balena.io/etcher',
    windowClasses: ['balena-etcher-electron'],
  },
  {
    title: 'Pendulums',
    description: 'Manage and track your time more efficiently using a modern time tracking tool.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://pendulums.io',
    windowClasses: ['pendulums'],
  },
];

module.exports = items;
