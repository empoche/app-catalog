/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

// Editors
const items = [
  {
    title: 'Geany',
    windowClasses: ['geany', 'geany.exe'],
  },
  {
    title: 'Notepad',
    windowClasses: ['notepad.exe'],
  },
  {
    title: 'Notepad++',
    windowClasses: ['notepad++.exe'],
  },
  {
    title: 'TextEdit',
    windowClasses: ['textedit'],
  },
  {
    title: 'Notes',
    windowClasses: ['notes'],
  },
  {
    title: 'TextWrangler',
    windowClasses: ['textwrangler'],
  },
  {
    title: 'Editor',
    windowNames: [
      {endsWith: 'editor'},
    ],
  },
  {
    title: 'GEdit',
    windowClasses: ['gedit', 'org.gnome.gedit'],
  },
  {
    title: 'Sublime Text',
    windowClasses: ['sublime_text'],
  },
  {
    title: 'KWrite',
    description: 'KWrite is a text editor by KDE, based on the Kate\'s editor component.',
    os: ['linux'],
    url: 'https://kde.org/applications/utilities/kwrite',
    windowClasses: ['kwrite'],
  },
  {
    title: 'Xed',
    description: 'X-Apps [Text] Editor (Cross-DE, backward-compatible, GTK3, traditional UI).',
    os: ['linux'],
    url: 'https://github.com/linuxmint/xed',
    windowClasses: ['xed'],
  },
  {
    title: 'Kate',
    description: 'Kate is a multi-document editor part of KDE since release 2.2.',
    os: ['linux'],
    url: 'https://kate-editor.org',
    windowClasses: ['kate'],
  },
  {
    title: 'Mini Diary',
    description: 'Simple and secure journal app.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://minidiary.app',
    windowClasses: ['mini diary'],
  },
  {
    title: 'TexMaker',
    description: 'Free cross-platform LaTeX editor since 2003.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.xm1math.net/texmaker',
    windowClasses: ['texmaker'],
  },
  {
    title: 'Emacs',
    description: 'An extensible, customizable, free/libre text editor — and more.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.gnu.org/software/emacs',
    windowClasses: ['emacs26'],
  },
];

module.exports = items;
