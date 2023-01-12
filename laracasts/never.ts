/**
 * THE NEVER TYPE
 * One of my favourite TypeScript features. Anytime we are doing checks on a 'Discriminated Union'
 * We can use this exhaustiveness checking, it essentially gives us compile time checks for unhandled cases.
 */

const unreachableCaseError = (x: never): never => {
  throw Error(x);
};
