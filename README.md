## App-Catalog

Collection of process and application information for Linux, MacOS and Windows.

Identify applications and categories based on their executable name.

```javascript
const browser = [
  {
    title: 'Chromium',
    description: 'Open-Source browser from Google.',
    url: 'https://www.chromium.org/',
    os: ['linux', 'macos', 'windows'],
    windowClasses: ['chromium-browser-chromium', 'chromium-browser', 'chromium', 'chromium.exe'],
    windowNames: [
      {endsWith: 'chromium'},
    ],
  },
  // ..
]
```

## Installation

This is a Node.js module available through the npm registry.

With npm:

```bash
npm install appcatalog
```

With yarn:

```bash
yarn add appcatalog
```

#### Usage

```javascript
// Get all categories and items
const apps = require('appcatalog');

// Browser category
const browser = apps.find(c => c.category === 'browser');

// All Items
const items = browser.items;

// Find an browser based on executable name
const chrome = items.find(i => i.windowClasses.includes('chrome.exe'))
```

Item description:

> The windowClasses ([]) property contains the executable names. As they are not always
> unique (e.g. shellexperiencehost.exe is used for a lot of Windows 10 applications)
> for some applications windowNames are needed.

## Contributing

Please include as many information (title is required) about the application as possible and try not to
make the identifier too generic, especially with window names. 
If you are unsure on the category, just choose other.

## License

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
