'use strict';

const readline = require('readline');

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports.readPassword = (query) => {

    return new Promise((resolve, reject) => {

        const stdin = process.openStdin();

        process.stdin.on("error", () => {
            reject(new Error("stdin error"));
        });

        process.stdin.on("data", (character) => {
            character += "";
            switch (character) {
                case "\n":
                case "\r":
                case "\x04":
                    stdin.pause();
                    break;
                default:
                    const arr = new Array(readlineInterface.line.length + 1);
                    process.stdout.write("\x1B[2K\x1B[200D" + query + arr.join("*"));
                    break;
            }
        });

        readlineInterface.question(query, (value) => {
            readlineInterface.history = readlineInterface.history.slice(1);
            resolve(value);
            readlineInterface.close();
        });

    });
};
