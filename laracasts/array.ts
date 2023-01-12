// Array
const team: Array<string> = ["andy", "song"];
const team1: string[] = ["andy", "song"];

const listNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
const listNumbers1: number[] = [1, 2, 3, 4, 5, 6];

const mix: (string | number)[] = [1, "andy", 2, "song", 3];

// Tuples

const tuple: [number, string] = [2023, "why?"];
// This will not work
// const wrong: [number, string] = ["why?", 2023];
const wrong: [string, number] = ["why?", 2023];
