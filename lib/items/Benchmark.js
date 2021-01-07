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
      {startsWith: 'hwinfo64'},
      {endsWith: 'hwinfo64'},
    ],
  },
  {
    title: 'CPUID HWMonitor',
    os: ['windows'],
    description: 'HWMonitor is a hardware monitoring program that reads PC systems main health sensors : voltages, temperatures, fans speed.',
    url: 'https://www.cpuid.com/softwares/hwmonitor.html',
    windowNames: [
      {matches: 'cpuid hwmonitor'},
    ],
  },
  {
    title: 'CrystalDiskInfo',
    os: ['windows'],
    description: 'A HDD/SSD utility software which supports a part of USB, Intel/AMD RAID and NVMe.',
    url: 'https://crystalmark.info/en/software/crystaldiskinfo',
    windowNames: [
      {startsWith: 'crystaldiskinfo'},
    ],
  },
  {
    title: 'Caliper',
    windowClasses: ['caliper'],
  },
  {
    title: 'DaisyDisk',
    windowClasses: ['daisydisk'],
  },
];

module.exports = items;
