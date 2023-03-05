"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const perfect_number_1 = __importDefault(require("../src/perfect_number"));
describe.each([
    { n: Number.MIN_SAFE_INTEGER, expected: false },
    { n: -1, expected: false },
    { n: 0, expected: false },
    { n: 1, expected: false },
    { n: 2, expected: false },
    { n: 3, expected: false },
    { n: 6, expected: true },
    { n: 28, expected: true },
    { n: 496, expected: true },
    { n: 8128, expected: true },
])('.isPerfectNumber($n)', ({ n, expected }) => {
    test(`returns ${expected}`, () => {
        expect((0, perfect_number_1.default)(n)).toBe(expected);
    });
});
