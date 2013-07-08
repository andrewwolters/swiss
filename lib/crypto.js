// Provide some cryptographic convenience routines. This code generates
// an exported method for each of the listed crypographic algorithms.
var crypto = require('crypto'),
    methods = [ 'md5', 'sha1', 'sha256', 'sha512', 'ripemd160' ],
    encoding = 'hex';

methods.forEach(function(method) {
    exports[method] = function(data, salt) {
        return typeof salt != 'undefined' ?
            crypto.createHmac(method, salt).update(data).digest(encoding)
          : crypto.createHash(method).update(data).digest(encoding);
    };
});
