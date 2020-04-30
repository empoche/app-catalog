/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const items = [
  {
    title: 'Mailspring',
    windowClasses: ['mailspring'],
  },
  {
    title: 'Geary',
    windowClasses: ['geary'],
  },
  {
    title: 'Outlook',
    windowClasses: ['outlook.exe', 'microsoft outlook'],
  },
  {
    title: 'Airmail',
    windowClasses: ['airmail'],
  },
  {
    title: 'Mail',
    windowClasses: ['mail'],
  },
  {
    title: 'Messages',
    windowClasses: ['messages'],
  },
  {
    title: 'Tweetbot',
    windowClasses: ['tweetbot'],
  },
  {
    title: 'Slack',
    windowClasses: ['slack', 'slack.exe'],
  },
  {
    title: 'Contacts',
    windowClasses: ['contacts'],
  },
  {
    title: 'FaceTime',
    windowClasses: ['facetime'],
  },
  {
    title: 'Skype',
    windowNames: [
      {endsWith: 'skype'},
    ],
    windowClasses: ['skype', 'skype.exe'],
  },
  {
    title: 'RingCentral (Glip)',
    windowClasses: ['glip', 'glip.exe', 'ringcentral.exe', 'ringcrentral'],
  },
  {
    title: 'Your Phone',
    windowNames: [
      {matches: 'your phone'},
    ],
  },
  {
    title: 'Mail',
    windowNames: [
      {endsWith: 'mail'},
    ],
  },
  {
    title: 'Zoom',
    windowClasses: ['zoom', 'zoom.exe'],
  },
  {
    title: 'Rambox',
    windowClasses: ['ramboxpro', 'rambox', 'ramboxpro.exe'],
  },
  {
    title: 'Keybase',
    windowClasses: ['keybase.exe', 'keybase'],
  },
  {
    title: 'Microsoft Teams',
    windowClasses: ['teams.exe',],
  },
  {
    title: 'MiCollab',
    windowClasses: ['mcac.exe', 'mcaclient.exe'],
  },
  {
    title: 'Riot',
    os: ['linux', 'macos', 'windows'],
    url: 'https://about.riot.im/',
    windowClasses: ['riot', 'riot-web'],
  },
  {
    title: 'Rocket.chat',
    os: ['linux', 'macos', 'windows'],
    url: 'https://rocket.chat',
    windowClasses: ['rocket.chat'],
  },
  {
    title: 'Citrix Receiver',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.citrix.com',
    windowClasses: ['cdviewer.exe'],
    windowNames: [
      {matches: 'citrix receiver'},
    ],
  },
  {
    title: 'WhatsApp Desktop',
    os: ['linux', 'macos', 'windows'],
    url: 'https://web.whatsapp.com',
    windowClasses: ['whatsapp-desktop'],
  },
  {
    title: 'Gmail Desktop',
    os: ['linux'],
    url: 'https://snapcraft.io/gmail-desktop',
    windowClasses: ['gmail desktop'],
  },
  {
    title: 'WhatsDesk',
    os: ['linux'],
    url: 'https://snapcraft.io/whatsdesk',
    windowClasses: ['whatsdesk'],
  },
  {
    title: 'Franz',
    description: 'Franz is the former Emperor of Austria - but also a messaging app that combines chat & messaging services into one application.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://meetfranz.com',
    windowClasses: ['franz'],
  },
  {
    title: 'Viber',
    description: 'Free and secure calls and messages to anyone, anywhere.',
    os: ['linux', 'macos', 'windows'],
    url: 'https://www.viber.com',
    windowClasses: ['viber', 'viber.exe',],
  },
  {
    title: 'Evolution',
    description: 'GNOME Evolution is the official personal information manager and mail client for GNOME.',
    os: ['linux', 'macos'],
    url: 'https://wiki.gnome.org/Apps/Evolution',
    windowClasses: ['evolution',],
  },
  {
    title: 'Telegram',
    description: 'Telegram is a cloud-based instant messaging and voice over IP service.',
    keywords: ['messaging', 'instant messaging', 'chat'],
    os: ['linux', 'macos', 'windows'],
    url: 'https://desktop.telegram.org',
    windowClasses: ['telegram',],
  },
  {
    title: 'Caprine',
    description: 'Caprine is an unofficial and privacy-focused Facebook Messenger app with many useful features.',
    keywords: ['messaging', 'instant messaging', 'chat', 'facebook'],
    os: ['linux', 'macos', 'windows'],
    url: 'https://github.com/sindresorhus/caprine',
    windowClasses: ['caprine',],
  },
  {
    title: 'Flock',
    description: 'Today, your team’s communication is probably scattered across emails, meetings, video calling apps, and productivity tools.',
    keywords: ['messaging', 'instant messaging', 'chat'],
    os: ['linux', 'macos', 'windows'],
    url: 'https://flock.com',
    windowClasses: ['flock',],
  },
  {
    title: 'Discord',
    description: 'Discord is a proprietary freeware VoIP application and digital distribution platform designed for video gaming communities, that specializes in text, image, video and audio communication between users in a chat channel.',
    keywords: ['messaging', 'instant messaging', 'chat'],
    os: ['linux', 'macos', 'windows'],
    url: 'https://discordapp.com',
    windowClasses: ['discord',],
  },
  {
    title: 'GNOME Contacts',
    description: 'Contacts is GNOME\'s integrated address book.',
    keywords: ['contacts',],
    os: ['linux'],
    url: 'https://wiki.gnome.org/Apps/Contacts',
    windowClasses: ['gnome-contacts',],
  },
];

module.exports = items;
