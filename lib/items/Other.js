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
    windowClasses: ['lockapp.exe'],
  },
  {
    title: 'MacOS Dialog',
    windowClasses: ['coreservicesuiagent', 'securityagent', 'usernotificationcenter'],
  },
  {
    title: 'Home',
    windowClasses: ['home'],
  },
  {
    title: 'System Preferences',
    windowClasses: ['system preferences'],
  },
  {
    title: 'Activity Monitor',
    windowClasses: ['activity monitor'],
  },
  {
    title: 'Dock',
    windowNames: [
      {matches: 'dock'},
    ],
  },
  {
    title: 'Gnome Control Center',
    windowClasses: ['gnome-control-center', 'gnome-session-properties',],
  },
  {
    title: 'Unity Control Center',
    windowClasses: ['unity-control-center', 'unity-settings-daemon'],
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
    windowClasses: ['dialog', 'gnome-flashback'],
  },
  {
    title: 'Charmap',
    windowClasses: ['charmap.exe'],
  },
  {
    title: 'Settings',
    windowNames: [
      {endsWith: 'settings'}
    ],
  },
  {
    title: 'Software Installer',
    windowClasses: ['msiexec.exe'],
  },
  {
    title: 'File Picker',
    windowClasses: ['pickerhost.exe'],
  },
  {
    title: 'NVIDIA Settings',
    windowClasses: ['nvidia-settings'],
  },
  {
    title: 'Apport Crash Reporter',
    windowClasses: ['apport-gtk', 'apport-kde'],
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
  {
    title: 'Krunner',
    description: 'Start menu of the plasma desktop.',
    url: 'https://userbase.kde.org/Plasma/Krunner',
    os: ['linux'],
    windowClasses: ['krunner'],
  },
  {
    title: 'Plasmashell',
    os: ['linux'],
    windowClasses: ['plasmashell'],
  },
  {
    title: 'Authentication Agent',
    os: ['linux'],
    windowClasses: [
      'polkit-kde-authentication-agent-1',
      'polkit-gnome-authentication-agent-1',
      'kiod5',
    ],
  },
  {
    title: 'KDialog',
    os: ['linux'],
    windowClasses: ['kdialog'],
  },
  {
    title: 'KDE KSMServer',
    os: ['linux',],
    windowClasses: ['ksmserver'],
  },
  {
    title: 'Gnome Shell Portal Helper',
    os: ['linux',],
    windowClasses: ['gnome-shell-portal-helper'],
  },
  {
    title: 'KDE Settings',
    os: ['linux',],
    windowClasses: ['kcmshell5'],
  },
  {
    title: 'Gnome Tweaks',
    windowClasses: ['gnome-tweaks'],
  },
  {
    title: 'QApt Package Installer',
    windowClasses: ['qapt-deb-installer'],
  },
  {
    title: 'PlankSetting',
    os: ['linux'],
    url: 'https://github.com/karim88/PlankSetting',
    windowClasses: ['planksetting.py'],
  },
  {
    title: 'DrKonqi',
    description: 'The KDE Crash Handler',
    os: ['linux'],
    url: 'https://github.com/KDE/drkonqi',
    windowClasses: ['drkonqi'],
  },
  {
    title: 'Open With',
    windowClasses: ['openwith.exe'],
  },
  {
    title: 'Zenity',
    windowClasses: ['zenity'],
  },
];

module.exports = items;
