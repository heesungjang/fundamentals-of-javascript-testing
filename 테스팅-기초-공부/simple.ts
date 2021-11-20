{
    // simple test

    // sum 함수는 num1과 num2를 더한 값을 반환해야 하지만 + 대신 -으로 로직 문제가 있다.
    const sum = (num1: number, num2: number) => num1 - num2;
    // subtract 함수는 num1에서 num2를 뺀 값을 반환해야 하지만 - 대신 +으로 로직 문제가 있다.
    const subtract = (num1: number, num2: number) => num1 + num2;

    let result: number;
    let expected: number;

    //예상 결과 값 === 10
    result = sum(3, 7);
    expected = 10;

    if (result !== expected) {
        throw new Error(`결과 값 ${result} !== 예상 결과 값 ${expected} `);
    }

    //예상 결과 값 === 4
    result = subtract(7, 3);
    expected = 4;

    if (result !== expected) {
        throw new Error(`결과 값 ${result} !== 예상 결과 값 ${expected} `);
    }
}
