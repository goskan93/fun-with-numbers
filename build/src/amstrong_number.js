"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Summary.
 * A number is an Armstrong number when the sum of its own digits each raised to the power of the number of digits is equal to the number itself.
 *
 * Description.
 * @since 0.0.1
 * @param {number} N     Positive integer (base 10).
 * @returns {boolean}    If True then number N is Armstrong number.
 */
const isArmstrongNumber = (N) => {
    if (N < 0)
        return false;
    const power = N.toString().length;
    const digitsInN = Array.from(N.toString(), Number);
    const result = digitsInN.map(n => Math.pow(n, power)).reduce((a, b) => a + b, 0);
    console.log({ N, power, digitsInN, result });
    return result === N;
};
exports.default = isArmstrongNumber;
