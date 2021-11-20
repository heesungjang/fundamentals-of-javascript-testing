export const test = async (title: string, callback: () => void | Promise<number>) => {
    try {
        await callback();
        console.log(`✅ ${title}`);
    } catch (error) {
        console.log(`❌ ${title}`);
        console.log(error);
    }
};
