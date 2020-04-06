/*!
 * app-catalog
 * Copyright(c) 2019-2020 Yves Hoppe
 * GPLv3 Licensed
 */

const chai = require('chai');
const should = require('chai').should();
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const apps = require('../lib/apps');

let allWindowClasses = [];
let allWindowNames = {
  matches: [],
  startsWith: [],
  endsWith: [],
};
let allTitles = [];
let total = 0;

/**
 * Simple tests to maintain integrity of the database
 */
describe('App Catalog tests', () => {
  before(function () {
    apps.forEach((category) => {
      allTitles = [...allTitles, ...category.items.map(i => i.title)];
      allWindowClasses = [...allWindowClasses, ...category.items.map(i => i.windowClasses || []).flat()];

      // Hacky way to get all matches
      allWindowNames.matches = [...allWindowNames.matches,
        ...category.items.map(i => i.windowNames && i.windowNames.find(w => w.matches))
          .filter(i => i !== undefined).map(i => i.matches)];
      allWindowNames.endsWith = [...allWindowNames.endsWith,
        ...category.items.map(i => i.windowNames && i.windowNames.find(w => w.endsWith))
          .filter(i => i !== undefined).map(i => i.endsWith)];
      allWindowNames.startsWith = [...allWindowNames.startsWith,
        ...category.items.map(i => i.windowNames && i.windowNames.find(w => w.startsWith))
          .filter(i => i !== undefined).map(i => i.startsWith)];

      total += category.items.length;
    });
  });

  it('Check that apps returns an arrays', () => {
    apps.should.be.array();
  });

  it('Check there are no duplicate windowClasses', () => {
    console.log('Total applications', total);

    const duplicates = allWindowClasses.filter((item, index) =>
      allWindowClasses.indexOf(item) !== index);

    duplicates.length.should.equal(0);
  });

  it('Check there are no duplicate windowNames', () => {
    allWindowNames.matches.filter((item, index) =>
      allWindowNames.matches.indexOf(item) !== index).length.should.equal(0);
    allWindowNames.startsWith.filter((item, index) =>
      allWindowNames.startsWith.indexOf(item) !== index).length.should.equal(0);
    allWindowNames.endsWith.filter((item, index) =>
      allWindowNames.endsWith.indexOf(item) !== index).length.should.equal(0);
  });

  it('Check that all windowClasses items are lowercase', () => {
    const notLowerCase = allWindowClasses.filter(item => item !== item.toLowerCase());
    console.log(notLowerCase);

    notLowerCase.length.should.equal(0);
  });

  it('Check that all windowNames are lower case', () => {
    allWindowNames.matches.filter(item => item !== item.toLowerCase()).length.should.equal(0);
    allWindowNames.endsWith.filter(item => item !== item.toLowerCase()).length.should.equal(0);
    allWindowNames.startsWith.filter(item => item !== item.toLowerCase()).length.should.equal(0);
  });

  it('Check that all apps have an title', () => {
    const undefinedFilter = allTitles.filter(i => i === undefined);

    undefinedFilter.length.should.equal(0);
  });

  it('Print duplicate app titles', () => {
    const filteredTitles = allTitles.filter((item, index) =>
      allTitles.indexOf(item) !== index);

    // There are actually some reasons for duplicate app titles (multi-lang)
    console.log('Duplicate titles', filteredTitles);
  });
});
