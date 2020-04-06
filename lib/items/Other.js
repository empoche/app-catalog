/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

// Things that don't match any category
const items = [
  {
    title: 'Task Manager',
    windowNames: [
      {endsWith: 'task manager'},
    ],
    windowClasses: ['taskmgr.exe']
  },
  {
    title: 'OneDrive',
    windowNames: [
      {startsWith: 'microsoft onedrive'},
    ],
    windowClasses: ['onedrive.exe'],
  },
  {
    title: 'Windows Search',
    windowClasses: ['searchui.exe'],
  },
  {
    title: 'Windows Lockscreen',
    windowClasses:  ['lockapp.exe'],
  },
  {
    title: 'MacOS Dialog',
    windowClasses:  ['coreservicesuiagent', 'securityagent', 'usernotificationcenter'],
  },
  {
    title: 'Home',
    windowClasses:  ['home'],
  },
  {
    title: 'System Preferences',
    windowClasses:  ['system preferences'],
  },
  {
    title: 'Activity Monitor',
    windowClasses:  ['activity monitor'],
  },
  {
    title: 'Dock',
    windowNames: [
      {matches: 'dock'},
    ],
  },
  {
    title: 'Gnome Control Center',
    windowClasses:  ['gnome-control-center', 'gnome-session-properties'],
  },
  {
    title: 'Unity Control Center',
    windowClasses:  ['unity-control-center'],
  },
  {
    title: 'Nextcloud',
    windowClasses: ['nextcloud.exe', 'nextcloud', 'nextcloud-client'],
  },
  {
    title: 'Desktop',
    windowClasses: ['desktop_window'],
    windowNames: [
      {matches: 'desktop'},
    ],
  },
  {
    title: 'Dialog',
    windowClasses:  ['dialog', 'gnome-flashback'],
  },
  {
    title: 'Charmap',
    windowClasses:  ['charmap.exe'],
  },
  {
    title: 'OpenVPN',
    windowClasses:  ['ovpntray.exe', 'ovpncli.exe'],
  },
  {
    title: 'Settings',
    windowNames: [
      {endsWith: 'settings'}
    ],
  },
  {
    title: 'Software Installer',
    windowClasses:  ['msiexec.exe'],
  },
  {
    title: 'File Picker',
    windowClasses:  ['pickerhost.exe'],
  },
  {
    title: 'NVIDIA Settings',
    windowClasses:  ['nvidia-settings'],
  },
  {
    title: 'Apport Crash Reporter',
    windowClasses:  ['apport-gtk'],
  },
  {
    title: 'Lautstärkeregelung',
    windowNames: [
      {endswith: 'lautstärkeregelung'}
    ],
  },
  {
    title: 'Datums- und Uhrzeitinformationen',
    windowNames: [
      {endsWith: 'datums- und uhrzeitinformationen'}
    ],
  },
  {
    title: 'Netzwerkverbindungen',
    windowNames: [
      {endsWith: 'netzwerkverbindungen'}
    ],
  },
  {
    title: 'Whisker Menu',
    windowNames: [
      {endswith: 'whisker menu'}
    ],
  },
];

module.exports = items;
