/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Calculator',
    windowClasses: ['calculator'],
  },
  {
    title: 'Pages',
    windowClasses: ['pages'],
  },
  {
    title: 'Numbers',
    windowClasses: ['numbers'],
  },
  {
    title: 'Keynote',
    windowClasses: ['keynote'],
  },
  {
    title: 'Word',
    windowNames: [
      {endsWith: 'microsoft word'},
    ],
    windowClasses: ['winword.exe', 'microsoft word'],
  },
  {
    title: 'Excel',
    windowClasses: ['excel.exe', 'microsoft excel'],
  },
  {
    title: 'PowerPoint',
    windowClasses: ['powerpnt.exe', 'microsoft powerpoint'],
  },
  {
    title: 'Access',
    url: 'https://products.office.com/en-us/access',
    windowClasses: ['msaccess.exe',],
  },
  {
    title: 'Libre Office',
    windowClasses: ['libreoffice', 'soffice'],
  },
  {
    title: 'WPS Office',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.wps.com',
    windowClasses: ['et', 'wps'],
  },
  {
    title: 'Calculator',
    windowNames: [
      {endsWith: 'calculator'},
    ],
  },
  {
    title: 'Rechner',
    windowNames: [
      {endsWith: 'rechner'},
    ],
  },
  {
    title: 'Qalculate!',
    description: 'Qalculate! is a multi-purpose cross-platform desktop calculator.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://qalculate.github.io',
    windowClasses: ['qalculate-gtk'],
  },
  {
    title: 'StarOffice',
    url: 'http://www.staroffice.org',
    windowClasses: ['soffice.bin'],
  },
  {
    title: 'Gnome Calculator',
    description: 'Calculator is an application that solves mathematical equations and is suitable as a default application in a Desktop environment.',
    os: ['linux'],
    url: 'https://wiki.gnome.org/Apps/Calculator',
    windowClasses: ['gnome-calculator'],
  },
  {
    title: 'gscan2pdf',
    description: 'A GUI to produce PDFs or DjVus from scanned documents',
    os: ['linux'],
    url: 'http://gscan2pdf.sourceforge.net',
    windowClasses: ['gscan2pdf'],
  },
  {
    title: 'XMind',
    description: 'XMind, a full-featured mind mapping and brainstorming tool, designed to generate ideas, inspire creativity, brings productivity in a remote WFH team.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.xmind.net',
    keywords: ['mindmap', 'brainstorm'],
    windowClasses: ['xmind'],
  },
  {
    title: 'skanlite',
    description: 'Image scanner based on the KSane backend',
    os: ['linux'],
    url: 'https://snapcraft.io/skanlite',
    windowClasses: ['skanlite'],
  },
  {
    title: 'Screaming Frog',
    url: 'https://www.screamingfrog.co.uk/seo-spider',
    description: 'The Screaming Frog SEO Spider is a website crawler, that allows you to crawl websites URLs to analyse.',
    os: ['linux', 'macos', 'windows'],
    windowNames: [
      {endsWith: 'screaming frog seo spider 12.6'},
    ],
  },
  {
    title: 'bibisco',
    url: 'https://www.bibisco.com',
    description: 'bibisco is a novel writing software that helps you to write your novel, in a simple way.',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['bibisco', 'bibisco.exe'],
  },
  {
    title: 'PlanMaker',
    url: 'https://www.softmaker.com/en/softmaker-office-planmaker',
    os: ['windows'],
    windowClasses: ['planmaker.exe', 'werfault.exe'],
  },
  {
    title: 'Master PDF Editor',
    description: 'Master PDF Editor is straightforward, easy to use application for working with PDF documents equipped with powerful multi-purpose functionality.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://code-industry.net/masterpdfeditor',
    windowClasses: ['masterpdfeditor5'],
  },
  {
    title: 'Microsoft Office‬',
    windowNames: [
      {endsWith: 'microsoft office‬'},
    ],
  },
  {
    title: 'Fantastical',
    windowClasses: ['fantastical', 'fantastical helper'],
  },
  {
    title: 'PDF Expert',
    windowClasses: ['pdf expert'],
  },
  {
    title: 'Youdao Note',
    url: 'https://note.youdao.com',
    windowClasses: ['youdaonote.exe'],
  },
  {
    title: 'Youdao Dict',
    url: 'https://youdao.com',
    windowClasses: ['youdaodict.exe'],
  },
];

module.exports = items;
