/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

// Junk items (E.g. dialogs, popups, screensaver..)
const items = [
  {
    title: 'Java Dialog Window',
    windowClasses: ['sun-awt-x11-xdialogpeer', 'sun-awt-x11-xframepeer'],
  },
  {
    title: 'Start-Menu',
    windowClasses: ['startmenuexperiencehost.exe'],
  },
  {
    title: 'GTK Dialog Window',
    windowClasses: ['pinentry-gtk-2'],
  },
  {
    title: 'Password Prompt',
    windowClasses: ['gcr-prompter'],
  },
  {
    title: 'Screen Saver',
    windowClasses:  ['screensaverengine'],
  },
  {
    title: 'Login Window',
    windowClasses:  ['loginwindow'],
  },
  {
    title: 'Web Companion',
    windowClasses:  ['webcompanion.exe'],
  },
];

module.exports = items;
