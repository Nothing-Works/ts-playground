const BBB: string = "andy";

// 1.The implicit any type error
// const addTwoNumbers = (a, b) => {
//   return a + b;
// };

// here we need to add number type
const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

// 2. working with obj params
// const addTwoNumbersA = (params) => {
//   return params.first + params.second;
// };
interface AndySong {
  first: number;
  second: number;
}
// can be type and inline as well.
const addTwoNumbersA = (params: AndySong) => {
  return params.first + params.second;
};

// 3 optional properties
const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

// 4. optional parameters
export const getNameA = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

// 5. assigning types to variables
