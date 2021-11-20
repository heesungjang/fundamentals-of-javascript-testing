import { expect, test } from "./test";
import { sum, subtract } from "./maths";

// 테스팅 모듈

test("sum adds numbers", () => {
    const result = sum(3, 7);
    const expected = 10;
    //테스트
    expect(result).toBe(expected);
});

test("sub subtracts numbers", () => {
    //예상 결과 값 === 4
    const result = subtract(7, 3);
    const expected = 4;
    //테스트
    expect(result).toBe(expected);
});
