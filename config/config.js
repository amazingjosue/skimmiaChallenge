const writeFile = require('./writeFile');

const config = function ({
    colors,
    msName
}) {
    const LOG_PREFIX = new Date().getDate() + '-' + new Date().getMonth() + '-' +
        new Date().getFullYear() + ' ' + new Date().getHours() + ':' +
        new Date().getMinutes() + ':' + new Date().getSeconds();

    const log = console.log;
    const error = console.error;
    const info = console.info;

    console.log = function () {
        var args = Array.from(arguments);
        args.unshift(`${LOG_PREFIX} [${process.pid}] [LOG] : `);
        args.unshift(colors[0]);
        log.apply(console, args);
        writeFile(args, msName);
    }

    console.error = function () {
        var args = Array.from(arguments);
        args.unshift(`${LOG_PREFIX} [${process.pid}] [ERROR] : `);
        args.unshift(colors[1]);
        error.apply(console, args);
        writeFile(args, msName);
    }

    console.info = function () {
        var args = Array.from(arguments);
        args.unshift(colors[0]);
        info.apply(console, args);
        writeFile(args, msName);
    }
}

module.exports = config;