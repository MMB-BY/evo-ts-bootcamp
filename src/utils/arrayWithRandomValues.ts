import { randomValue } from "./randomValueGenerator";

export function arrayWithRandomValues(): number[] {
  const lengthOfArray = Math.floor(randomValue(20, 40));

  return Array.from({ length: lengthOfArray }).map(() => randomValue(1, 200));
}
