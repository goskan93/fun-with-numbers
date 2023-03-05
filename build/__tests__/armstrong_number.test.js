"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amstrong_number_1 = __importDefault(require("../src/amstrong_number"));
describe.each([
    { n: Number.MIN_SAFE_INTEGER, expected: false },
    { n: -1, expected: false },
    { n: 151, expected: false },
    { n: 369, expected: false },
    { n: 999, expected: false },
    { n: 92728, expected: false },
    { n: 0, expected: true },
    { n: 1, expected: true },
    { n: 2, expected: true },
    { n: 153, expected: true },
    { n: 370, expected: true },
    { n: 371, expected: true },
    { n: 407, expected: true },
    { n: 1634, expected: true },
    { n: 8208, expected: true },
    { n: 9747, expected: true },
    { n: 92727, expected: true },
])('.isArmstrongNumber($n)', ({ n, expected }) => {
    test(`returns ${expected}`, () => {
        expect((0, amstrong_number_1.default)(n)).toBe(expected);
    });
});
