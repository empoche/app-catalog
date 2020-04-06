/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

// Editors
const items = [
  {
    title: 'Geany',
    windowClasses: ['geany'],
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
];

module.exports = items;
