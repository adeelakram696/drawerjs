Drawer JS
===================
[![Build Status](https://travis-ci.org/adeelakram696/drawerjs.svg?branch=master)](https://travis-ci.org/adeelakram696/drawerjs)
[![npm version](https://badge.fury.io/js/drawerjs.svg)](https://badge.fury.io/js/drawerjs)
[![Coverage Status](https://coveralls.io/repos/github/adeelakram696/drawerjs/badge.svg?branch=master)](https://coveralls.io/github/adeelakram696/drawerjs?branch=master)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/adeelakram696/drawerjs/issues)
[![HitCount](http://hits.dwyl.io/adeelakram696/drawerjs.svg)](http://hits.dwyl.io/adeelakram696/drawerjs)
[![downloads][downloads-image]][downloads-url]

[downloads-image]: https://img.shields.io/npm/dt/drawerjs.svg?style=flat
[downloads-url]: https://npmjs.org/package/drawerjs

Drawer is like where you store and pick things.
Drawer Js can store/set any kind of data and pick/get that data at every file of your project.
Assign any thing and get any where in application as a single context/state. just import and you will get every thing you assigned. can also be used as inmemory cache or storing react-router history object to push to new page from any where.

----------
Basic useful feature list:

 * Store any kind of data in memory.
 * Get data at any place/file of application and update.
 * Can get as a clone so you can use it without worry about reference variable update.
 * Can check if key or data exist already or not.
 * Get all or clear all existing data at once.

installation
===================

    npm install drawerjs --save

Class Functions
===================
Functions List:

    set({key: value}) // update/set the value against given key
    get(key) // will return value with same reference address
    getAll()
    getClone() // will return the value with change reference address
    clear(key)
    clearAll()
    isExist(key) // return true if data exist
    isKeyExist(key) // return true if key exist even with null data

Params Types:

| Param     | Type | Required   | Default   |
| ------- | ---- | --- | --- |
| key | unique String | Required |  undefined   |
| data | Any | Required |  undefined  |



Coding Example File A
-------------
```javascript
import drawer from 'drawerjs';
// for Ecma5 it imports like below
// var drawerjs = require("drawerjs").default;

drawer.set({ key1: { temp: "mydata" } });
drawer.set({ key2: { temp: "mydata2" } });
drawer.set({ key3: null });


```
Coding Example File B
-------------
```javascript
import drawer from 'drawerjs';
// for Ecma5 it imports like below
// var drawerjs = require("drawerjs").default;

drawer.get("key1"); // { temp: "mydata" }
drawer.getClone("key1"); // { temp: "mydata" }
drawer.getAll(); // { key1: { temp: "mydata" }, key2: { temp: "mydata2" }, key3: null }
drawer.clear("key1"); // { key2: { temp: "mydata2" }, key3: null }
drawer.isExist("key1"); // false
drawer.isExist("key2"); // true
drawer.isExist("key3"); // false
drawer.isKeyExist("key1"); // false
drawer.isKeyExist("key2"); // true
drawer.isKeyExist("key3"); // true
drawer.clearAll(); // null


```
**Unit Tests**
Unit test provided with 100% Coverage

    npm run test

**License**

    MIT
