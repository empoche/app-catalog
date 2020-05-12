/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Klondike',
    windowClasses: ['sol'],
    windowNames: [
      {matches: 'klondike'},
    ],
  },
  {
    title: 'Black Mesa',
    windowClasses: ['bms_linux'],
  },
  {
    title: 'Half Life 2 <3',
    windowClasses: ['hl2_linux'],
  },
  {
    title: '0 A.D.',
    windowClasses: ['pyrogenesis'],
  },
  {
    title: 'Steam',
    windowClasses: ['steam.exe', 'steam'],
  },
  {
    title: 'Age of Empires 2 - Definitive Edition',
    windowClasses: ['aoe2de.exe'],
  },
  {
    title: 'Frostpunk',
    windowNames: [
      {matches: 'frostpunk'},
    ],
  },
  {
    title: 'Spaceland',
    windowClasses: ['spaceland'],
  },
  {
    title: 'Celeste',
    windowClasses: ['celeste.bin.x86_64'],
  },
  {
    title: 'XBox',
    windowClasses: ['xbox.exe'],
  },
  {
    title: 'Albion Online',
    windowClasses: ['albion-online'],
  },
  {
    title: 'Counter-Strike Go',
    os: ['linux', 'macos', 'windows'],
    url: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive',
    windowClasses: ['csgo_linux64'],
  },
  {
    title: 'GameRanger',
    os: ['windows'],
    url: 'https://www.gameranger.com',
    windowClasses: ['gameranger.exe'],
  },
];

module.exports = items;
