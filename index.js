'use strict';
const config = require('./config/config');
const logger = require('./config/config');

logger({
    colors: ["\x1b[32m", "\x1b[31m"],
    msName: "skimmiaChallenge"
});

/**
 * @description  If this function get a multiple of 5, will return a ONE otherwise will return a CERO
 * @param {Number} numero   The number to evaluete the condition
 * 
 * @returns     1 || 0
 */
const multipleFive = function (numero) {
    return Number(numero % 3 >= 1 && numero % 5 == 0);
}

/**
 * @description  If this function get a multiple of 5 and 3, will return a TWO otherwise will return a CERO
 * @param {Number} numero  The number to evalate the condition
 * 
 * @returns     2 || 0
 */
const multipleBoth = function (numero) {
    return Number(numero % 3 == 0 && numero % 5 == 0) * 2;
}


const counting = function () {
    try {
        let count = [];
        for (let i = 1; i <= 100; i++) {
            count.push(i);
        };
        const texto = ["Music", "TI", "Musical"];
        count = count.map(numero => {
            if (numero % 3 == 0 || numero % 5 == 0) {
                return texto[multipleFive(numero) + multipleBoth(numero)]
            }
            return numero;
        });

        count.forEach(number => console.log(number));
        console.log(count)

        return {
            count,
            success: true
        };

    } catch (error) {
        console.log(error)
        return {
            success: false,
            error: error.message || error
        }
    }
};

counting();

module.exports = counting;
