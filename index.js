// Our toolbelt is based on `lodash`. Mixin methods from `lodash` into this
// module.
var lodash = require('./vendor/lodash.custom');

Object.keys(lodash).forEach(function(key) {
    exports[key] = lodash[key];
});

// Extend our toolbelt with methods from node's `util`. Exclude
// methods that have been marked as deprecated.
var util = require('util');

Object.keys(util).forEach(function(key) {
    if (! /deprecated/.test(util[key].toString()))
        exports[key] = util[key];
});

// Extend toolbelt with custom utility methods.
//
lodash.extend(exports, require('./lib/tools'));
lodash.extend(exports, require('./lib/crypto'));
