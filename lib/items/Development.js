/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'PhpStorm',
    windowNames: [
      {endsWith: 'phpstorm'},
    ],
    windowClasses: ['phpstorm64.exe', 'jetbrains-phpstorm', 'phpstorm'],
  },
  {
    title: 'Pycharm',
    windowNames: [
      {endsWith: 'pycharm'},
    ],
    windowClasses: ['pycharm64.exe', 'pycharm'],
  },
  {
    title: 'Intellij Idea',
    windowNames: [
      {endsWith: 'intellij idea'},
    ],
    windowClasses: ['idea64.exe', 'intellij idea'],
  },
  {
    title: 'Microsoft Visual Studio',
    windowNames: [
      {endsWith: 'microsoft visual studio'},
    ],
    windowClasses: ['devenv.exe'],
  },
  {
    title: 'Visual Studio Code',
    windowNames: [
      {endsWith: 'visual studio code'},
    ],
    windowClasses: ['code-oss', 'code.exe', 'code'],
  },
  {
    title: 'Brackets',
    windowClasses: ['brackets.exe', 'brackets',],
  },
  {
    title: 'Fork',
    windowClasses: ['fork.exe'],
  },
  {
    title: 'Python',
    windowClasses: ['python.exe'],
  },
  {
    title: 'MongoDB Compass',
    windowClasses: ['mongodb-compass'],
  },
  {
    title: 'Xcode',
    windowClasses: ['xcode'],
  },
  {
    title: 'MAMP',
    windowClasses: ['mamp', 'mamp pro'],
  },
  {
    title: 'Electron',
    windowClasses: ['electron', 'appauth-electron'],
  },
  {
    title: 'Jadx',
    windowClasses: ['jadx-gui-jadxgui'],
  },
  {
    title: 'GitHub Desktop',
    windowClasses: ['githubdesktop.exe', 'git-credential-manager.exe'],
  },
  {
    title: 'Atom',
    windowClasses: ['atom', 'atom.exe'],
  },
  {
    title: 'Ora',
    windowClasses: ['ora'],
  },
  {
    title: 'Knopflerfish',
    windowClasses: ['org-knopflerfish-framework-bundlethread'],
  },
  {
    title: 'Oracle SQL Developer',
    windowNames: [
      {startsWith: 'oracle sql developer'},
    ],
  },
  {
    title: 'Eclipse',
    windowClasses: ['eclipse'],
  },
  {
    title: 'Mu Editor',
    windowClasses: ['mu-editor'],
  },
  {
    title: 'Postman',
    windowClasses: ['postman'],
  },
  {
    title: 'Robo 3T',
    windowClasses: ['robo3t'],
  },
  {
    title: 'Node.js',
    description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://nodejs.org/en',
    windowClasses: ['node.exe'],
  },
];

module.exports = items;
