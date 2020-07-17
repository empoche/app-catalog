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
    windowClasses: ['sublime_text', 'sublime text'],
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
  {
    title: 'Ulysses',
    description: 'Ulysses is a text editor for Apple Mac OS X, iPad, and iPhone. It is targeted at creative writers who do not want to worry about text layout, formatting..',
    os: ['macos'],
    url: 'https://ulysses.app',
    windowClasses: ['ulysses'],
  },
  {
    title: 'Bear',
    description: 'Bear is a focused, flexible writing app for iPhone, iPad, Mac and Apple Watch.',
    os: ['macos'],
    url: 'https://bear.app',
    windowClasses: ['bear'],
  },
  {
    title: 'BBEdit',
    description: 'BBEdit is a proprietary text editor made by Bare Bones Software for macOS.',
    os: ['macos'],
    url: 'http://www.barebones.com/products/BBEdit',
    windowClasses: ['bbedit'],
  },
  {
    title: 'BowPad',
    description: 'BowPad is a small and fast text editor with a ribbon user interface and syntax highlighting.',
    os: ['windows'],
    url: 'https://tools.stefankueng.com/BowPad.html',
    windowClasses: ['bowpad.exe'],
  },
  {
    title: 'SAKURA Editor',
    description: 'A free Japanese text editor for Windows.',
    os: ['windows'],
    url: 'https://sourceforge.net/projects/sakura-editor',
    windowClasses: ['sakura.exe'],
  },
  {
    title: 'typora',
    description: 'A minimal markdown editor.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://typora.io',
    windowClasses: ['typora', 'typora.exe'],
  },
  {
    title: 'Espresso',
    description: 'Web Editor for Mac.',
    os: ['macos'],
    url: 'https://www.espressoapp.com',
    keywords: ['web', 'ide', 'html'],
    windowClasses: ['espresso'],
  },
  {
    title: 'MacVim',
    description: 'A minimal markdown editor.',
    os: ['macos',],
    url: 'https://github.com/macvim-dev/macvim',
    windowClasses: ['macvim'],
  },
  {
    title: 'GVim',
    windowClasses: ['gvim'],
  },
];

module.exports = items;
