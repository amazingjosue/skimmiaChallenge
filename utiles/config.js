const writeFile = require('./writeFile');

/**
 * @description Function that create configs for the logs in the console
 */
const config = function ({
    colors,
    serviceName
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
        writeFile(args, serviceName);
    }

    console.error = function () {
        var args = Array.from(arguments);
        args.unshift(`${LOG_PREFIX} [${process.pid}] [ERROR] : `);
        args.unshift(colors[1]);
        error.apply(console, args);
        writeFile(args, serviceName);
    }

    console.info = function () {
        var args = Array.from(arguments);
        args.unshift(colors[0]);
        info.apply(console, args);
        writeFile(args, serviceName);
    }
}
config({
    colors: ["\x1b[32m", "\x1b[31m"],
    serviceName: "skimmiaChallenge"
});