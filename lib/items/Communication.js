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
];

module.exports = items;
