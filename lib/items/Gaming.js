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
    windowNames: [
      {endsWith: 'half-life 2'},
    ],
  },
  {
    title: '0 A.D.',
    windowClasses: ['pyrogenesis'],
  },
  {
    title: 'Steam',
    windowClasses: ['steam.exe', 'steam', 'steamwebhelper.exe', 'vrmonitor.exe', 'vrwebhelper.exe'],
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
    windowNames: [
      {endsWith: 'xbox'},
    ],
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
  {
    title: 'Epic Games Launcher',
    os: ['windows'],
    url: 'https://www.epicgames.com',
    windowClasses: ['epicgameslauncher.exe'],
  },
  {
    title: 'BZFlag',
    description: 'Free multi-player 3D tank battle game for Windows, Linux, and macOS',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.bzflag.org',
    windowClasses: ['bzflag'],
  },
  {
    title: 'GTA 5',
    windowClasses: ['gta5.exe'],
  },
  {
    title: 'Rockstar Games Launcher',
    windowClasses: ['socialclubhelper.exe'],
  },
  {
    title: 'Cities: Skylines',
    windowClasses: ['cities.exe', 'paradox launcher.exe'],
  },
  {
    title: 'Blizzard Battle.net',
    windowClasses: ['battle.net.exe', 'battle.net'],
  },
  {
    title: 'World of Warcraft',
    windowClasses: ['wow.exe', 'wow'],
  },
  {
    title: 'Civilization VI',
    windowClasses: ['civ6sub'],
  },
  {
    title: 'WeGame',
    url: 'https://www.wegame.com.cn',
    windowNames: [
      {matches: 'wegame'},
    ],
  },
  {
    title: 'AION',
    url: 'https://www.aiononline.com',
    windowNames: [
      {matches: 'aion'},
    ],
  },
  {
    title: 'Overwatch',
    windowClasses: ['overwatch.exe', 'overwatch'],
  },
  {
    title: 'League of Legends',
    windowNames: [
      {matches: 'league of legends'},
      {startsWith: 'league of legends'}
    ],
  },
  {
    title: 'Escape from Tarkov',
    windowClasses: ['bsglauncher.exe'],
  },
  {
    title: 'Anno 2070',
    windowClasses: ['anno5.exe'],
  },
  {
    title: 'Twinkstar',
    windowNames: [
      {endsWith: 'twinkstar'},
    ],
    windowClasses: ['twinkstar.exe'],
  },
  {
    title: 'UPlay',
    windowNames: [
      {endsWith: 'uplay'},
    ],
    windowClasses: ['upc.exe'],
  },
  {
    title: 'Warcraft III',
    windowClasses: ['warcraft iii.exe'],
  },
  {
    title: 'Dota 2',
    windowClasses: ['dota2.exe'],
  },
  {
    title: 'Empyrion',
    windowClasses: ['empyrion.exe'],
  },
  {
    title: 'Destiny 2',
    windowClasses: ['destiny2.exe'],
  },
  {
    title: 'v2rayN',
    windowNames: [
      {startsWith: 'v2rayn'},
    ],
  },
  {
    title: 'Rainbow Six',
    windowNames: [
      {endsWith: 'rainbow six', },
    ],
    windowClasses: ['rainbowsix_vulkan.exe', 'rainbowsix_be.exe', 'rainbowsix.exe']
  },
  {
    title: 'Origin',
    windowClasses: ['origin.exe'],
  },
  {
    title: 'The Division 2',
    windowClasses: ['thedivision2.exe'],
  },
  {
    title: 'Satisfactory',
    windowClasses: ['factorygame-win64-shipping.exe'],
  },
  {
    title: 'Monster Train',
    windowClasses: ['monstertrain.exe'],
  },
  {
    title: 'Gnome Mahjongg',
    windowClasses: ['gnome-mahjongg'],
  },
  {
    title: 'RimWorld',
    windowNames: [
      {startsWith: 'rimworld', },
    ],
    windowClasses: ['rimworldwin64.exe'],
  },
  {
    title: 'Space Engineers',
    windowClasses: ['spaceengineers.exe'],
  },
  {
    title: 'BlueStacks',
    windowClasses: ['bluestackskey.exe', 'bluestacks.exe'],
  },
  {
    title: 'Lutris',
    windowClasses: ['lutris'],
  },
  {
    title: 'Fallout',
    windowClasses: ['falloutw.exe'],
  },
  {
    title: 'gzdoom',
    windowClasses: ['gzdoom'],
  },
  {
    title: 'PlayOnLinux',
    windowNames: [
      {startsWith: 'playonlinux', },
    ],
  },
  {
    title: 'Wolfenstein II The new Colossus',
    windowClasses: ['newcolossus_x64vk.exe'],
  },
  {
    title: 'FIFA',
    windowClasses: ['fifa18.exe'],
  },
  {
    title: 'Monster Prom',
    windowClasses: ['monsterprom.x86'],
  },
  {
    title: 'NVIDIA GeForce Experience',
    windowClasses: ['nvidia geforce experience.exe'],
  },
  {
    title: 'Nox',
    windowClasses: ['nox.exe'],
  },
  {
    title: 'Sekiro',
    windowClasses: ['sekiro.exe'],
  },
  {
    title: 'Nvidia GForce NOW',
    windowClasses: ['nvidia geforce now'],
  },
];

module.exports = items;
