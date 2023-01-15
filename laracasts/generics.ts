// Generics;
const AA: string = "test";

interface Box<T> {
  contents: T;
}

const boxOfStrings: Box<string[]> = {
  contents: ["hello", "laracasts"],
};

const boxOfString: Box<string> = {
  contents: "hello",
};

const boxOfNumbers: Box<number[]> = {
  contents: [1, 2, 3, 4],
};

const identity = <T>(x: T): T => x;
const s = identity("s");

const randomElement = <T>(xs: T[]): T => {
  const randomIndex = Math.floor(Math.random() * xs.length);
  return xs[randomIndex] as T;
};

const a = randomElement(["a", "b", "c"]);
const b = randomElement([1, 2, 3, 4]);
