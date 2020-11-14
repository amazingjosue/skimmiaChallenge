/**
 * @description  If this function get a multiple of 5, will return a ONE otherwise will return a CERO
 * @param {Number} num   The number to evaluete the condition
 * 
 * @returns {Number}    1 || 0
 */
const multipleFive = function (num) {
    handleNumber(num);
    return Number(num % 3 >= 1 && num % 5 == 0);
}

/**
 * @description  If this function get a multiple of 5 and 3, will return a TWO otherwise will return a CERO
 * @param {Number} num  The number to evalate the condition
 * 
 * @returns {Number}    2 || 0
 */
const multipleBoth = function (num) {
    handleNumber(num);
    return Number(num % 3 == 0 && num % 5 == 0) * 2;
}

/**
 * @description  This function validate if a variable is a number or not, and if it is this will trhow an error
 * @param {Number} num The number to evaluate
 * 
 */
const handleNumber = function (num) {
    if (Number.isNaN(num))
        throw new Error(`${num} is not a number`);
}

module.exports = {
    multipleFive,
    multipleBoth,
    handleNumber
}