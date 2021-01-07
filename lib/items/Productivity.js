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
    title: 'Remote Desktop',
    windowNames: [
      {matches: 'remote desktop'},
    ],
    windowClasses: ['mstsc.exe', 'remote desktop'],
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
    windowClasses: ['trello', 'trello.exe'],
  },
  {
    title: 'Todoist',
    url: 'https://todoist.com',
    windowClasses: ['todoist'],
  },
  {
    title: 'Evernote',
    url: 'https://www.evernote.com',
    windowClasses: ['evernote', 'evernote.exe', 'evernote_6.21.4.2051.exe', 'evernoteclipper.exe'],
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
    windowClasses: ['microsoft onenote', 'onenote.exe', 'onenotem.exe'],
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
    windowClasses: ['snippingtool.exe',],
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
    keywords: ['zip', 'archive', 'compression'],
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
    keywords: ['zip', 'archive', 'compression'],
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
    windowClasses: ['balena-etcher-electron', 'balena-etcher-electron.bin'],
  },
  {
    title: 'Pendulums',
    description: 'Manage and track your time more efficiently using a modern time tracking tool.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://pendulums.io',
    windowClasses: ['pendulums'],
  },
  {
    title: 'Kazam',
    description: 'Kazam is a simple screen recording program that will capture the content of your screen and record a video file that can be played by any video player that supports VP8/WebM video format.',
    os: ['linux',],
    url: 'https://launchpad.net/kazam',
    windowClasses: ['kazam'],
  },
  {
    title: 'Angstrom',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.angstrom.life',
    windowClasses: ['angstrom'],
  },
  {
    title: 'Zenkit To Do',
    os: ['linux', 'windows', 'macos'],
    url: 'https://zenkit.com/en/todo',
    windowClasses: ['zenkit to do', 'zenkit'],
  },
  {
    title: 'Taskade',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.taskade.com',
    windowClasses: ['taskade'],
  },
  {
    title: 'Vysor',
    keywords: ['android', 'remote', 'emulator'],
    description: 'Vysor puts your Android on your desktop. Use apps, play games, control your Android. A desktop or Chrome app, compatible with all operating systems.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.vysor.io',
    windowClasses: ['vysor'],
  },
  {
    title: 'Mate Screenshot',
    os: ['linux'],
    windowClasses: ['mate-screenshot',],
  },
  {
    title: 'Tusk',
    keywords: ['evernote', 'note'],
    description: 'Refined Evernote desktop app',
    os: ['linux', 'windows', 'macos'],
    url: 'https://klaussinani.tech/tusk',
    windowClasses: ['tusk',],
  },
  {
    title: 'WoeUSB',
    keywords: ['usbstick', 'dd', 'diskimage'],
    description: 'A Linux program to create a Windows USB stick installer from a real Windows DVD or image.',
    os: ['linux'],
    url: 'https://github.com/slacka/WoeUSB',
    windowClasses: ['woeusbgui',],
  },
  {
    title: 'MeisterTask',
    keywords: ['task', 'project management', 'todo'],
    description: 'MeisterTask is an online task management tool for teams.',
    os: ['windows', 'macos', 'web'],
    url: 'https://www.meistertask.com',
    windowClasses: ['meistertask.exe',],
  },
  {
    title: 'ScreenCloud',
    keywords: ['screenshot',],
    description: 'ScreenCloud makes screenshot sharing easy.',
    os: ['windows', 'macos', 'web'],
    url: 'https://screencloud.net',
    windowClasses: ['screencloud',],
  },
  {
    title: 'mite.desk',
    keywords: ['time-recording', 'time-tracking'],
    description: 'Windows-Desktop-Client for online time recording mite.',
    os: ['windows', 'macos', 'web'],
    url: 'https://github.com/aspnetde/mite.desk',
    windowClasses: ['mite.desk.exe',],
  },
  {
    title: 'Audio Recorder',
    keywords: ['audio'],
    description: 'This program allows you to record your favourite music and audio to a file. It can record audio from your systems sound card.',
    os: ['linux'],
    url: 'https://launchpad.net/~audio-recorder',
    windowClasses: ['audio-recorder',],
  },
  {
    title: 'TopTracker',
    keywords: ['time', 'tracking'],
    description: 'Time tracking with screenshots and invoice processing with no-fee payments — all in our free web and desktop app.',
    os: ['windows', 'linux', 'macos', 'web'],
    url: 'https://www.toptal.com/tracker',
    windowClasses: ['toptracker.exe', 'toptracker'],
  },
  {
    title: 'Super Productivity',
    description: 'To Do List / Time Tracker with Jira Integration.',
    url: 'https://www.softmaker.com/en/softmaker-office-planmaker',
    os: ['windows', 'linux', 'macos', 'web'],
    windowClasses: ['superproductivity.exe', 'superproductivity'],
  },
  {
    title: 'Elegant Microsoft To-Do',
    description: 'Ao is an unofficial, featureful, open source, community-driven, free Microsoft To-Do app that is used by people in more than 120 countries.',
    url: 'https://snapcraft.io/ao',
    os: ['linux'],
    windowClasses: ['ao'],
  },
  {
    title: 'Notion',
    description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.',
    url: 'https://www.notion.so',
    os: ['windows', 'linux', 'web'],
    windowClasses: ['notion.exe', 'notion'],
  },
  {
    title: 'Greenshot',
    description: 'Greenshot is a free and open-source screenshot program for Microsoft Windows. It is developed by Thomas Braun, Jens Klingen and Robin Krom.',
    url: 'https://getgreenshot.org',
    os: ['windows', 'macos'],
    windowClasses: ['greenshot.exe',],
  },
  {
    title: 'Engrampa',
    description: 'A file archiver for MATE',
    url: 'https://github.com/mate-desktop/engrampa',
    keywords: ['zip', 'archive', 'compression'],
    os: ['linux'],
    windowClasses: ['engrampa',],
  },
  {
    title: 'Disk Utility',
    os: ['macos'],
    windowClasses: ['disk utility'],
  },
  {
    title: 'Gnome Disks',
    os: ['linux'],
    url: 'https://gitlab.gnome.org/GNOME/gnome-disk-utility',
    windowClasses: ['gnome-disks'],
  },
  {
    title: 'remember the milk',
    os: ['windows', 'linux', 'macos', 'web'],
    url: 'https://www.rememberthemilk.com',
    windowClasses: ['remember the milk'],
  },
  {
    title: 'Joplin',
    os: ['windows', 'linux', 'macos', 'web'],
    url: 'https://joplinapp.org',
    windowClasses: ['joplin', 'joplin.exe'],
  },
  {
    title: 'Freedcamp',
    os: ['windows', 'macos', 'web'],
    url: 'https://freedcamp.com',
    windowClasses: ['freedcamp.exe'],
  },
  {
    title: 'Lightshot',
    description: 'Screenshot tool for Linux, macOS and Windows.',
    url: 'https://app.prntscr.com',
    os: ['windows', 'macos', 'linux'],
    windowClasses: ['lightshot.exe', 'lightshot'],
  },
  {
    title: 'ColorSlurp',
    description: 'Color picker for macOS.',
    url: 'https://colorslurp.com/',
    os: ['macos'],
    windowClasses: ['colorslurp'],
  },
  {
    title: 'DeepL',
    description: 'The DeepL Translator is a free machine translation service launched in August 2017.',
    os: ['windows', 'macos', 'web'],
    url: 'https://www.deepl.com',
    windowNames: [
      {startsWith: 'deepl'},
    ],
    windowClasses: ['deepl', 'deepl.exe'],
  },
  {
    title: 'Adobe Premiere Pro',
    windowClasses: ['adobe premiere pro.exe'],
    windowNames: [
      {startsWith: 'adobe premiere'},
    ],
  },
  {
    title: 'ShareX',
    description: 'Screen capture, file sharing and productivity tool.',
    os: ['windows'],
    url: 'https://getsharex.com',
    windowClasses: ['sharex.exe'],
  },
  {
    title: 'Adobe Media Encoder.exe',
    windowClasses: ['adobe media encoder.exe'],
  },
  {
    title: 'RescueTime',
    os: ['windows', 'linux', 'macos'],
    url: 'https://www.rescuetime.com',
    windowClasses: ['rescuetime.exe', 'rescuetime'],
  },
  {
    title: 'ManicTime',
    os: ['windows', 'linux', 'macos'],
    url: 'https://www.manictime.com',
    windowClasses: ['manictime.exe'],
  },
  {
    title: 'Clockify',
    os: ['windows', 'linux', 'macos'],
    url: 'https://clockify.me',
    windowClasses: ['clockify.exe', 'clockify'],
  },
  {
    title: 'Wolfram Mathematica',
    windowClasses: ['mathematica.exe'],
  },
  {
    title: 'Bandizip',
    keywords: ['zip', 'archive', 'compression'],
    url: 'https://en.bandisoft.com',
    windowClasses: ['bandizip.exe'],
  },
  {
    title: 'Toggl',
    os: ['windows', 'linux', 'macos'],
    url: 'https://toggl.com/toggl-desktop',
    windowClasses: ['toggldesktop.exe', 'toggldesktop'],
  },
  {
    title: 'odrive',
    os: ['windows', 'linux', 'macos'],
    url: 'https://www.odrive.com',
    windowClasses: ['odrive'],
  },
  {
    title: 'Be Focused',
    os: ['macos'],
    url: 'https://apps.apple.com/us/app/be-focused-focus-timer/id973134470',
    windowClasses: ['be focused'],
  },
  {
    title: 'Thoughtback',
    os: ['macos'],
    url: 'https://thoughtback.com',
    windowClasses: ['thoughtback'],
  },
  {
    title: 'Turtl',
    os: ['windows', 'linux', 'macos'],
    url: 'https://turtlapp.com',
    windowClasses: ['turtl'],
  },
  {
    title: 'MindMaster',
    os: ['windows', 'linux', 'macos'],
    url: 'https://www.edrawsoft.com/mindmaster',
    windowClasses: ['mindmaster.exe', 'mindmaster'],
  },
  {
    title: 'Nozbe',
    os: ['windows', 'linux', 'macos'],
    url: 'https://nozbe.com',
    windowClasses: ['nozbe.exe'],
  },
  {
    title: 'Alfred',
    os: ['macos'],
    url: 'https://www.alfredapp.com',
    windowClasses: ['alfred'],
  },
  {
    title: 'Dr. Unarchiver',
    os: ['macos'],
    keywords: ['zip', 'archive', 'compression'],
    windowClasses: ['dr. unarchiver'],
  },
  {
    title: 'CatMemoNote',
    os: ['windows'],
    url: 'http://www.cc9.ne.jp/~pappara/catmemonote.html',
    windowClasses: ['catmemonote.exe'],
  },
  {
    title: 'Yoink',
    os: ['macos'],
    url: 'https://eternalstorms.at/yoink/mac',
    windowClasses: ['yoink'],
  },
  {
    title: 'DEVONsphere Express',
    os: ['macos'],
    url: 'https://apps.apple.com/de/app/devonsphere-express/id501020582?mt=12',
    windowClasses: ['devonsphere express'],
  },
  {
    title: 'Lotion',
    os: ['linux'],
    url: 'https://github.com/puneetsl/lotion',
    windowClasses: ['lotion-binary'],
  },
  {
    title: 'NixNote2',
    os: ['linux'],
    url: 'https://github.com/baumgarr/nixnote2',
    windowClasses: ['nixnote2'],
  },
  {
    title: 'Archiver',
    windowClasses: ['archiver'],
  },
  {
    title: 'Adobe After Effects',
    windowNames: [
      {startsWith: 'adobe after effects'},
    ],
  },
  {
    title: 'Olive',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.olivevideoeditor.org',
    windowClasses: ['olive-editor.exe'],
  },
  {
    title: 'AnyDesk',
    windowClasses: ['anydesk', 'anydesk.exe'],
  },
  {
    title: 'HitFilm Express',
    url: 'https://fxhome.com/hitfilm-express',
    windowClasses: ['hitfilm-express.exe', 'hitfilmexpress.exe'],
  },
  {
    title: 'TIM',
    url: 'https://www.softmakers.nl/producten/tim',
    windowClasses: ['tim.exe'],
  },
  {
    title: 'Zipper',
    keywords: ['zip', 'archive', 'compression'],
    windowClasses: ['zipper'],
  },
  {
    title: 'Xarchiver',
    keywords: ['zip', 'archive', 'compression'],
    windowClasses: ['xarchiver'],
  },
  {
    title: 'Loom',
    url: 'https://www.loom.com',
    windowClasses: ['loom', 'loom.exe'],
  },
  {
    title: 'WinRAR',
    keywords: ['rar', 'archive', 'compression'],
    windowClasses: ['winrar.exe'],
  },
  {
    title: 'Pomotroid',
    url: 'https://splode.github.io/pomotroid',
    windowClasses: ['pomotroid'],
  },
  {
    title: 'Clipto',
    url: 'https://clipto.pro',
    windowClasses: ['clipto.exe'],
  },
  {
    title: 'Habitica',
    url: 'https://habitica.com',
    windowClasses: ['habitica'],
  },
  {
    title: 'Dynalist',
    url: 'https://dynalist.io',
    windowClasses: ['dynalist'],
  },
  {
    title: 'WhatPulse',
    url: 'https://whatpulse.org',
    windowClasses: ['whatpulse.exe'],
  },
  {
    title: 'The Unarchiver',
    os: ['macos'],
    keywords: ['zip', 'archive', 'compression'],
    windowClasses: ['the unarchiver'],
  },
  {
    title: 'Anki',
    url: 'https://apps.ankiweb.net',
    windowClasses: ['anki'],
  },
  {
    title: 'XFCE Notes',
    windowClasses: ['xfce4-notes'],
  },
];

module.exports = items;
