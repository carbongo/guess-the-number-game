#!/usr/bin/env node
const readline = require('readline');
const english = require('./locale/en.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const EOL = '\n';

const getRandomAnswer = function (array) {
    return array[Math.floor(Math.random() * Math.floor(array.length))];
};

let targetNumber = Math.floor(Math.random() * Math.floor(101));

rl.question(english.introduction + EOL, (answer) => {
    if (answer===english.key.yes) {
        // rl.question(english.ready);
        rl.close();
    } else if (answer===english.key.no) {
        rl.write(getRandomAnswer(english.exit) + EOL);
        rl.close();
    } else {
        rl.close();
    }
})