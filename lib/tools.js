var fs = require('fs');

exports.generateKey = function (length) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        base = 62, // 0x3E
        mod = 4,
        bits = length * mod || base;

    var ret = '';

    // in v8, Math.random() yields 32 pseudo-random bits (in spidermonkey it gives 53)
    while (bits > 0) {
        var rand = Math.floor(Math.random() * 0x100000000);

        // we use the top bits
        for (var i = 26; i > 0 && bits > 0; i -= mod, bits -= mod)
            ret += chars[(base - 1) & rand >>> i];
    }

    return ret;
};

exports.requireDir = function (directory) {
    var result = {},
        files = fs.readdirSync(directory);

    files.forEach(function (file) {
        if (file.substr(-3) === '.js')
            file = file.substr(0, file.length - 3);

        result[file] = require(path.resolve(directory, file));
    });

    return result;
};
