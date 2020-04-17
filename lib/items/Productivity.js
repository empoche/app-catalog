/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

// UTILITY
const items = [
  {
    title: 'Empoche',
    windowClasses: ['empoche', 'empoche.exe'],
  },
  {
    title: 'super productivity',
    windowClasses: ['superproductivity'],
  },
  {
    title: 'Thunar',
    windowClasses: ['thunar'],
  },

  {
    title: 'Explorer',
    windowClasses: ['explorer.exe'],
  },
  {
    title: 'Remote Desktop',
    windowNames: [
      {matches: 'remote desktop'},
    ],
  },
  {
    title: 'Nautilus',
    windowClasses: ['org.gnome.nautilus', 'nautilus'],
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
    title: 'Finder',
    windowClasses: ['finder'],
  },
  {
    title: 'Trello',
    windowClasses: ['trello'],
  },
  {
    title: 'Todoist',
    windowClasses: ['todoist'],
  },
  {
    title: 'Evernote',
    windowClasses: ['evernote'],
  },
  {
    title: '1Password',
    windowClasses: ['1password mini'],
  },
  {
    title: 'Spectacle',
    windowClasses: ['spectacle'],
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
    windowClasses: ['dropbox'],
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
    title: 'Enpass',
    windowClasses: ['enpass.exe', 'enpass'],
  },
  {
    title: 'WinSCP',
    windowClasses: ['winscp.exe',],
  },
  {
    title: 'XAMPP',
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
    title: 'Dolphin',
    description: 'Dolphin is a lightweight file manager. It has been designed with ease of use and simplicity in mind, while still allowing flexibility and customisation.',
    os: ['linux'],
    url: 'https://kde.org/applications/system/org.kde.dolphin',
    windowClasses: ['dolphin'],
  },
  {
    title: 'Nemo',
    description: 'File browser for Cinnamon.',
    os: ['linux'],
    url: 'https://github.com/linuxmint/nemo',
    windowClasses: ['nemo'],
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
];

module.exports = items;
