/**
 * THE NEVER TYPE
 * One of my favourite TypeScript features. Anytime we are doing checks on a 'Discriminated Union'
 * We can use this exhaustiveness checking, it essentially gives us compile time checks for unhandled cases.
 */

const unreachableCaseError = (x: never): never => {
  throw Error(x);
};

// if add a new literal then we will get an error.
type Andy = "happy" | "sad" | "mad"; // | 'test'
const handleNever = (andy: Andy) => {
  if (andy === "happy") {
    console.log();
    return;
  }
  if (andy === "sad") {
    console.log();
    return;
  }
  if (andy === "mad") {
    console.log();
    return;
  }
  unreachableCaseError(andy);
};

// you can expect that T will never be E.
type banedType<T, E> = T extends E ? never : T;
