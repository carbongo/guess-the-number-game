#!/usr/bin/env node
const readline = require('readline');
const english = require('./locale/en.json');
const russian = require('./locale/ru.json');

// DEFINE READLINE INTERFACE
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// GLOBAL VARIABLES
const EOL = '\n';
let targetNumber = null;
let locale = null;

// SET SYSTEM LOCALE IF AVAILABLE
if (process.env.LANG.includes("ru")) locale = russian;
else locale = english;

// GET RANDOM VALUE FROM AN ARRAY
const getRandomAnswer = function (array) {
    return array[Math.floor(Math.random() * Math.floor(array.length))];
};

// READLINE QUESTION FUNCTION WITH NUMBER GUESS
const number_question = function() {
    rl.question("", (answer) => {
        if (answer!=Number(answer)) rl.write(getRandomAnswer(locale.answer.invalid) + EOL);
        if (answer>targetNumber) rl.write(getRandomAnswer(locale.answer.smaller) + EOL);
        if (answer<targetNumber) rl.write(getRandomAnswer(locale.answer.bigger) + EOL);
        if (answer==targetNumber) initialisation(getRandomAnswer(locale.answer.right) + EOL);
        else number_question();
    });
};

// NUMBER GENERATION
const number_is_ready = function() {
    targetNumber = Math.floor(Math.random() * Math.floor(101));
    rl.write(locale.ready + EOL);
    number_question();
}

// READLINE QUESTION FUNCTION IF PLAYER IS READY
const initialisation = function(line) {
    rl.question(line, (answer) => {
        switch(answer) {
            case locale.key.yes:
                number_is_ready();
                break;
            case locale.key.no:
                rl.write(getRandomAnswer(locale.exit) + EOL);
                rl.close();
                break;
            default:
                initialisation(locale.introduction + EOL);
                break;
        };
    });
};

// GAME START
initialisation(locale.introduction + EOL);