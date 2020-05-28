/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Looking Glass',
    windowClasses: ['looking-glass-client'],
  },
  {
    title: 'Virtual Machine Manager',
    windowNames: [
      {endsWith: 'virtual machine manager'},
    ],
    windowClasses: ['virt-manager'],
  },
  {
    title: 'VirtualBox',
    windowNames: [
      {endsWith: 'virtualbox manager'},
    ],
    windowClasses: [
      'virtualbox manager',
      'virtualbox machine',
      'virtualbox',
      'virtualboxvm',
      'virtualboxvm.exe',
      'virtualbox vm'
    ],
  },
  {
    title: 'Hyper-V Manager',
    windowNames: [
      {matches: 'hyper-v manager'},
    ],
  },
  {
    title: 'Hyper-V',
    windowNames: [
      {matches: 'virtual machine connection'},
    ],
  },
  {
    title: 'Virtual Machine Viewer',
    windowClasses: ['virt-viewer', 'remote-viewer'],
  },
  {
    title: 'Docker',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.docker.com',
    windowClasses: ['docker'],
  },
  {
    title: 'Amazon WorkSpaces',
    windowClasses: ['amazon workspaces'],
  },
  {
    title: 'VMWare Fusion',
    windowClasses: ['vmware fusion'],
  },
  {
    title: 'VMWare Workstation',
    windowClasses: ['vmware workstation', 'vmware'],
    windowNames: [
      {endsWith: 'vmware workstation'},
    ],
  },
];

module.exports = items;
