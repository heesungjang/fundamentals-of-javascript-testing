export const test = (title: string, callback: () => void) => {
    try {
        callback();
        console.log(`✅ ${title}`);
    } catch (error) {
        console.log(`❌ ${title}`);
        console.log(error);
    }
};
