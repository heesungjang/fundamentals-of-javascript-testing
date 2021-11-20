export const test = async (title: string, callback: () => void | Promise<number>) => {
    try {
        await callback();
        console.log(`✅ ${title}`);
    } catch (error) {
        console.log(`❌ ${title}`);
        console.log(error);
    }
};

// 테스팅 모듈
export const expect = (result: number) => {
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
