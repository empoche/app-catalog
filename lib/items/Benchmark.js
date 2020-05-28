/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Blackmagic Disk Speed test',
    windowClasses: ['disk speed test'],
  },
  {
    title: 'Cinebench',
    windowClasses: ['cinebench', 'cinebench.exe'],
  },
  {
    title: 'Hardinfo',
    windowClasses: ['hardinfo'],
    os: ['linux'],
    description: 'System profiler and benchmark tool for Linux systems.',
    url: 'https://github.com/lpereira/hardinfo',
  },
  {
    title: 'HWiNFO64',
    os: ['windows'],
    description: 'HWiNFO64 is a professional hardware information and diagnostic tool supporting latest components, industry technologies, and standards.',
    url: 'https://www.hwinfo.com',
    windowClasses: ['hwinfo64'],
    windowNames: [
      {startsWith: 'hwinfo64'}
    ],
  },
];

module.exports = items;
