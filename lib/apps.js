/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const Benchmark = require('./items/Benchmark');
const Browser = require('./items/Browser');
const Business = require('./items/Business');
const Communication = require('./items/Communication');
const Design = require('./items/Design');
const Development = require('./items/Development');
const Editor = require('./items/Editor');
const Entertainment = require('./items/Entertainment');
const Gaming = require('./items/Gaming');
const Junk = require('./items/Junk');
const Learning = require('./items/Learning');
const Multimedia = require('./items/Multimedia');
const Other = require('./items/Other');
const Productivity = require('./items/Productivity');
const Reading = require('./items/Reading');
const Security = require('./items/Security');
const Simulation = require('./items/Simulation');
const Terminal = require('./items/Terminal');
const Virtualization = require('./items/Virtualization');

const apps = [
  {category: 'benchmark', items: Benchmark, productivity: 50},
  {category: 'browser', items: Browser, productivity: 50},
  {category: 'business', items: Business, productivity: 100},
  {category: 'communication', items: Communication, productivity: 100},
  {category: 'design', items: Design, productivity: 100},
  {category: 'development', items: Development, productivity: 100},
  {category: 'editor', items: Editor, productivity: 100},
  {category: 'entertainment', items: Entertainment, productivity: 0},
  {category: 'gaming', items: Gaming, productivity: 0},
  {category: 'learning', items: Learning, productivity: 100},
  {category: 'multimedia', items: Multimedia, productivity: 0},
  {category: 'other', items: Other, productivity: 50},
  {category: 'productivity', items: Productivity, productivity: 100},
  {category: 'reading', items: Reading, productivity: 30},
  {category: 'security', items: Security, productivity: 50},
  {category: 'simulation', items: Simulation, productivity: 100},
  {category: 'terminal', items: Terminal, productivity: 100},
  {category: 'virtualization', items: Virtualization, productivity: 100},

  // Applications which are not really standalone, like dialogs etc.
  {category: 'junk', items: Junk, productivity: 0},

  // Placeholder for unknown items
  {category: 'uncategorized', items: [], productivity: 50},
];

module.exports = apps;
