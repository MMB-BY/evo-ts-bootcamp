import {randomValue} from './randomValueGenerator';

export function arrayWithRandomValues(): number[] {
    return Array.from({length: 30}).map(el => el = randomValue());
}