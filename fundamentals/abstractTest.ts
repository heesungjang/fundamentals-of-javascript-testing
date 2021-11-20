import { sum, subtract } from "./maths";

// 테스팅 모듈
const expect = (result: number) => {
    return {
        toBe: (expected: number) => {
            if (result !== expected) {
                throw new Error(`${result} is not equal to ${expected}`);
            }
        },
        toEqual: (expected: number) => {},
        toBeGreaterThan: (expected: number) => {},
    };
};

let result: number;
let expected: number;
//예상 결과 값 === 10
result = sum(3, 7);
expected = 10;
//테스트
expect(result).toBe(expected);

//예상 결과 값 === 4
result = subtract(7, 3);
expected = 4;
//테스트
expect(result).toBe(expected);
