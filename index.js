'use strict';

require('./utiles/config');
const {
    multipleFive,
    multipleBoth
} = require('./evaluationNumber')

/**
 * @description     This function create an array of numbers from 1 to 100 and for multiples of 3 and 5 the number will be replaced for a String
 * 
 * @returns {Array} This will be an array of 100 elements
 */
const multipleFiveThree = function () {
    try {
        const textOptions = ["Music", "TI", "Musical"];
        const count = [];

        for (let num = 1; num <= 100; num++) {
            if (num % 3 == 0 || num % 5 == 0) {
                count.push(textOptions[multipleFive(num) + multipleBoth(num)]);
                console.log(`Position ${num}: `, count[num - 1]);
                continue;
            }
            count.push(num);
            console.log(`Position ${num}: `, count[num - 1]);
        };

        return {
            count,
            success: true
        };

    } catch (error) {
        console.error(error)
        return {
            success: false,
            error: error.message || error
        };
    };
};

multipleFiveThree();
module.exports = { multipleFiveThree }
