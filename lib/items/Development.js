/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'PhpStorm',
    description: 'PhpStorm is a commercial, cross-platform IDE for PHP, built by the Czech Republic-based company JetBrains.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.jetbrains.com/phpstorm',
    windowNames: [
      {endsWith: 'phpstorm'},
    ],
    windowClasses: ['phpstorm64.exe', 'jetbrains-phpstorm', 'phpstorm'],
  },
  {
    title: 'Pycharm',
    description: 'PyCharm is an integrated development environment used in computer programming, specifically for the Python language.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.jetbrains.com/pycharm',
    windowNames: [
      {endsWith: 'pycharm'},
    ],
    windowClasses: ['pycharm64.exe', 'pycharm', 'jetbrains-pycharm'],
  },
  {
    title: 'Intellij Idea',
    windowNames: [
      {endsWith: 'intellij idea'},
    ],
    windowClasses: ['idea64.exe', 'intellij idea'],
  },
  {
    title: 'WebStrom',
    description: 'WebStorm is a cross-platform IDE primarily for web, JavaScript and TypeScript development. Many of JetBrains other IDEs include the feature set of WebStorm via plugins.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.jetbrains.com/webstorm',
    windowNames: [
      {endsWith: 'webstormphpstorm'},
    ],
    windowClasses: ['webstorm64.exe', 'jetbrains-webstorm', 'webstorm'],
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
    title: 'Mu Editor',
    windowClasses: ['mu-editor'],
  },
  {
    title: 'Postman',
    description: 'The Collaboration Platform for API Development.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.postman.com',
    windowClasses: ['postman'],
  },
  {
    title: 'Robo 3T',
    os: ['linux', 'windows', 'macos'],
    url: 'https://robomongo.org',
    windowClasses: ['robo3t'],
  },
  {
    title: 'Node.js',
    description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://nodejs.org/en',
    windowClasses: ['node.exe'],
  },
  {
    title: 'MongoDB Compass',
    description: 'The GUI for MongoDB. Visually  explore your data. Run ad hoc queries in seconds. Interact with your data with full CRUD functionality.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.mongodb.com/products/compass',
    windowClasses: ['mongodb compass', 'mongodb-compass'],
  },
  {
    title: 'SQL Manager for PostgreSQL',
    description: 'SQL Manager for PostgreSQL is a high performance tool for PostgreSQL database administration and development.',
    os: ['windows'],
    url: 'https://www.sqlmanager.net/en/products/postgresql/manager',
    windowClasses: ['pgmanager.exe',],
  },
  {
    title: 'Insomnia',
    description: 'Powerful HTTP and GraphQL tool belt. Free and Open Source.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://insomnia.rest',
    windowClasses: ['insomnia',],
  },
  {
    title: 'Navicat',
    description: 'Navicat is a series of graphical database management and development software produced by PremiumSoft CyberTech Ltd. for MySQL, MariaDB, MongoDB, Oracle, SQLite, PostgreSQL and Microsoft SQL Server.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.navicat.com',
    windowClasses: ['navicat.exe',],
  },
  {
    title: 'qmlscene',
    description: 'Qt 5 includes qmlscene, a utility that loads and displays QML documents even before the application is complete.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://doc.qt.io/qt-5/qtquick-qmlscene.html',
    windowClasses: ['qmlscene',],
  },
  {
    title: 'Eclipse',
    description: 'Eclipse is an integrated development environment used in computer programming.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.eclipse.org',
    windowNames: [
      {startsWith: 'eclipse'},
    ],
    windowClasses: ['eclipse', 'eclipse.exe'],
  },
  {
    title: 'STM32CubeIDE',
    description: 'STM32CubeIDE is an all-in-one multi-OS development tool, which is part of the STM32Cube software ecosystem.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.st.com/en/development-tools/stm32cubeide.html',
    keywords: ['ide', 'c++', 'cpp'],
    windowClasses: ['stm32cubeide',],
  },
  {
    title: 'Adobe Dreamweaver',
    description: 'Adobe Dreamweaver is a proprietary web development tool from Adobe Inc.',
    os: ['windows', 'macos'],
    url: 'https://www.adobe.com/products/dreamweaver.html',
    keywords: ['ide', 'html', 'css'],
    windowClasses: ['dreamweaver.exe',],
  },
  {
    title: 'RStudio',
    description: 'RStudio is an integrated development environment for R, a programming language for statistical computing and graphics.',
    os: ['windows', 'macos', 'linux'],
    url: 'https://rstudio.com',
    keywords: ['ide', 'python', 'r-language'],
    windowClasses: ['rstudio', 'rstudio.exe'],
  },
  {
    title: 'GitKraken',
    description: 'Graphical git client for Windows, macOS and Linux.',
    keywords: ['git'],
    url: 'https://www.gitkraken.com',
    os: ['windows', 'macos', 'linux'],
    windowClasses: ['gitkraken.exe', 'gitkraken'],
  },
  {
    title: 'pgAdmin',
    description: 'pgAdmin is the most popular and feature rich Open Source administration and development platform for PostgreSQL.',
    keywords: ['postgre', 'database'],
    url: 'https://www.pgadmin.org',
    os: ['windows', 'macos', 'linux'],
    windowClasses: ['pgadmin', 'pgadmin3'],
  },
  {
    title: 'Qt Designer',
    windowNames: [
      {endsWith: 'qt designer'},
    ],
  },
  {
    title: 'Qt Assistant',
    windowNames: [
      {endsWith: 'qt assistant'},
    ],
  },
  {
    title: 'Qt Linguist',
    windowNames: [
      {endsWith: 'qt linguist'},
    ],
  },
  {
    title: 'MySQL Workbench',
    description: 'MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.',
    os: ['windows', 'macos', 'linux'],
    url: 'https://www.mysql.com/products/workbench',
    keywords: ['mysql', 'sql', 'database'],
    windowClasses: ['mysqlworkbench', 'mysqlworkbench.exe'],
  },
  {
    title: 'DBeaver',
    description: 'Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases.',
    os: ['windows', 'macos', 'linux'],
    url: 'https://dbeaver.io',
    keywords: ['mysql', 'sql', 'database'],
    windowClasses: ['dbeaver', 'dbeaver.exe'],
  },
  {
    title: 'Sequel Pro',
    description: 'Sequel Pro is a fast, easy-to-use Mac database management application for working with MySQL databases.',
    os: ['macos'],
    url: 'https://www.sequelpro.com',
    keywords: ['mysql', 'sql', 'database'],
    windowClasses: ['sequel pro'],
  },
];

module.exports = items;
