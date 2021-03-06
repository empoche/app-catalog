/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Malwarebytes Cybersecurity',
    windowClasses: ['mbamtray.exe'],
  },
  {
    title: 'Windows Security',
    windowNames: [
      {matches: 'windows security'},
    ],
  },
  {
    title: 'GnuPG',
    windowClasses: ['pinentry.exe'],
  },
  {
    title: 'MailStore Home',
    windowClasses: ['mailstorehome.exe'],
  },
  {
    title: 'Keychain Access',
    os: ['macos'],
    windowClasses: ['keychain access'],
  },
  {
    title: 'Update Manager',
    os: ['linux'],
    windowClasses: ['update-manager'],
  },
  {
    title: 'KeePassXC',
    os: ['linux', 'macos', 'windows'],
    url: 'https://keepassxc.org',
    windowClasses: ['keepassxc'],
  },
  {
    title: 'Bitwarden',
    description: 'Password Manager for individuals, teams and organizations.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://bitwarden.com',
    windowClasses: ['bitwarden', 'bitwarden.exe'],
  },
  {
    title: 'Telerik Fiddler',
    description: 'Web debugging proxy for any browser, system or platform.',
    os: ['windows'],
    url: 'https://www.telerik.com/fiddler',
    windowClasses: ['fiddler.exe'],
  },
  {
    title: 'Gnome System Monitor',
    description: 'System Monitor shows you what programs are running and how much processor time, memory, and disk space are being used.',
    os: ['linux'],
    url: 'https://help.gnome.org/users/gnome-system-monitor',
    windowClasses: ['gnome-system-monitor'],
  },
  {
    title: 'Enpass',
    description: 'A secure vault to store everything at one place using a single master password.',
    os: ['linux', 'windows', 'macos'],
    url: 'https://www.enpass.io',
    windowClasses: ['enpass.exe', 'enpass'],
  },
  {
    title: '1Password',
    os: ['linux', 'windows', 'macos'],
    url: 'https://1password.com',
    windowClasses: ['1password mini', '1password 7', '1password.exe'],
  },
  {
    title: 'KDE Wallet Manager',
    os: ['linux'],
    url: 'https://utils.kde.org/projects/kwalletmanager',
    windowClasses: ['kwalletd5', 'kwalletd'],
  },
  {
    title: 'OpenVPN',
    windowClasses: ['ovpntray.exe', 'ovpncli.exe'],
  },
  {
    title: 'Forticlient',
    windowClasses: ['forticlientsslvpn', 'fortitray.exe'],
  },
  {
    title: 'BleachBit',
    description: 'When your computer is getting full, BleachBit quickly frees disk space. When your information is only your business, BleachBit guards your privacy. ',
    os: ['linux'],
    url: 'https://www.bleachbit.org',
    keywords: ['utility', 'disk cleaner'],
    windowClasses: ['bleachbit'],
  },
  {
    title: 'Déjà Dup',
    description: 'Simple backup tool for GNOME.',
    os: ['linux'],
    keywords: ['backup'],
    url: 'https://wiki.gnome.org/Apps/DejaDup',
    windowClasses: ['org.gnome.dejadup'],
  },
  {
    title: 'Kaspersky Internet Security',
    description: 'Kaspersky Internet Security is an internet security suite developed by Kaspersky Lab compatible with Microsoft Windows and Mac OS X.',
    os: ['windows', 'macos'],
    keywords: ['antivirus', 'antimalware'],
    url: 'https://wiki.gnome.org/Apps/DejaDup',
    windowClasses: ['avpui.exe'],
  },
  {
    title: 'WinMd5',
    description: 'WinMD5Free is a tiny and fast utility to compute MD5 hash value for files. It works with Microsoft Windows 98, Me, 2000, XP, 2003, Vista and Windows 7/8/10.',
    os: ['windows'],
    keywords: ['hash', 'md5'],
    url: 'https://www.winmd5.com',
    windowClasses: ['winmd5.exe'],
  },
  {
    title: 'HasMyFiles',
    description: 'HashMyFiles is small utility that allows you to calculate the MD5 and SHA1 hashes of one or more files in your system.',
    os: ['windows'],
    keywords: ['hash', 'md5'],
    url: 'https://www.nirsoft.net/utils/hash_my_files.html',
    windowClasses: ['hashmyfiles.exe'],
  },
  {
    title: 'Tweaking.com - Windows Repair All in One',
    os: ['windows'],
    windowNames: [
      {endsWith: 'wr tray icon'},
    ],
  },
  {
    title: 'Disk Cleanup',
    windowClasses: ['cleanmgr.exe'],
  },
  {
    title: 'Dashlane',
    description: 'Password Manager.',
    os: ['windows', 'macos'],
    keywords: ['password', 'password-manager'],
    url: 'https://www.dashlane.com',
    windowClasses: ['dashlane'],
  },
  {
    title: 'GlassWire',
    url: 'https://www.glasswire.com',
    windowClasses: ['glasswire.exe'],
  },
  {
    title: 'Tencent Lemon Cleaner',
    url: 'https://lemon.qq.com',
    windowClasses: ['tencent lemon lite', 'qq.exe'],
  },
  {
    title: 'Clash for Windows',
    url: 'https://github.com/Dreamacro/clash',
    windowClasses: ['clash for windows.exe'],
  },
  {
    title: 'Little Snitch Network Monitor',
    os: ['macos'],
    url: 'https://www.obdev.at/products/littlesnitch/index.html',
    windowClasses: ['little snitch network monitor', 'little snitch agent'],
  },
  {
    title: 'Antidote',
    os: ['macos'],
    url: 'https://www.antidote.info',
    windowClasses: ['antidote 9'],
  },
  {
    title: 'Avast Security',
    os: ['macos', 'windows'],
    url: 'https://www.avast.com',
    windowClasses: ['avast security', 'avastui.exe'],
  },
  {
    title: 'Sophos',
    os: ['macos', 'windows'],
    url: 'https://www.sophos.com',
    windowClasses: ['sophosuiserver'],
  },
  {
    title: 'Windows Security Alert',
    os: ['windows'],
    windowNames: [
      {endsWith: 'windows security alert'},
    ],
  },
  {
    title: 'Cisco AnyConnect',
    os: ['macos', 'windows'],
    windowClasses: ['vpnui.exe'],
  },
  {
    title: 'Astrill VPN',
    os: ['macos', 'windows', 'linux'],
    url: 'https://www.astrill.com',
    windowClasses: ['astrill'],
  },
  {
    title: 'Pulse Secure',
    os: ['macos', 'windows', 'linux'],
    url: 'https://www.pulsesecure.net',
    windowClasses: ['pulse secure'],
  },
  {
    title: 'Seahorse',
    os: ['linux'],
    url: 'https://wiki.gnome.org/Apps/Seahorse',
    windowClasses: ['seahorse'],
  },
  {
    title: 'Avira',
    os: ['windows'],
    windowNames: [
      {endsWith: 'luke filewalker'},
    ],
    windowClasses: ['avira.spotlight.ui.application.exe'],

  },
  {
    title: 'EaseUS Data Recovery',
    os: ['windows'],
    url: 'https://www.easeus.com/datarecoverywizard/free-data-recovery-software.htm',
    windowNames: [
      {startsWith: 'easeus data'},
    ],
  },
  {
    title: 'AntiVirus Free',
    os: ['windows'],
    windowClasses: ['avgui.exe'],
  },
  {
    title: 'KeePassX',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.keepassx.org',
    windowClasses: ['keepassx'],
  },
  {
    title: 'Bitmask VPN',
    os: ['linux'],
    windowClasses: ['bitmask-vpn'],
  },
  {
    title: 'Pulse Connect Secure',
    os: ['linux'],
    windowClasses: ['pulseui'],
  },
  {
    title: 'ExpressVPN',
    os: ['macos'],
    windowClasses: ['expressvpn', 'expressvpn.exe'],
  },
  {
    title: 'KeeWeb',
    os: ['linux', 'macos', 'windows'],
    url: 'https://keeweb.info',
    windowClasses: ['keeweb'],
  },
];

module.exports = items;
