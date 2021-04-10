export function randomValue(): number {
    const min = 1;
    const max = 200;
    return min + Math.random() * (max - min);
}