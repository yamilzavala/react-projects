export const slowFn = () => {
    let total = 0;
    for (let index = 0; index < 1000000000; index++) {
        total += index;
        
    }
    return total;

}
