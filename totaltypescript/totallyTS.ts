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
interface User5 {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

// const defaultUser5: User5 = {};

const getUserById5 = (user: User) => {
  return user.id;
};

// 6. constraining values type which is union type
type role = "admin" | "user" | "super-admin";

// 7. array
const posts: string[] = ["andy", "test"];

// 8. function return type
const makeUser = (): User5 => {
  return { id: 1, firstName: "andy", lastName: "song", isAdmin: true };
};

// 9. promises and async
const fetchLukeSkywalker = async (): Promise<string> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

// 10. passing type argument
const guitarists = new Set<string>();
guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");
// guitarists.add(2); so we can not do this

// 11. assigning dynamic keys to an object
// this can be used as a dictionary
const cache: Record<string, string> = {};
const cache1: { [key: string]: string } = {};
// or use an interface

// 12. narrowing down union type
const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  } else {
    return amount.amount;
  }
};

// 13. typing errors in a try-catch
const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};

// 14, inheriting interface properties
interface Identity15 {
  id: string;
}
interface User15 extends Identity15 {
  firstName: string;
  lastName: string;
}

interface Post15 extends Identity15 {
  title: string;
  body: string;
}

interface Comment15 extends Identity15 {
  comment: string;
}

const comment: Comment15;

// 15. combining types to create new types
interface User16 {
  id: string;
}

interface Post16 {
  title: string;
}

const userWithPost: User16 & { posts: Post16[] } = {
  id: "andy",
  posts: [
    {
      title: "test",
    },
  ],
};

// 16. Selectively Construct Types from Other Types
type myType = Pick<User15, "firstName" | "lastName">;
type myType2 = Omit<User15, "firstName" | "lastName">;

// 17. Typing Functions
const addListener = (onFocusChange: (isFocused: boolean) => void) => {
  // or use Function type
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

// 18. Typing Async Functions
const createThenGetUser = async (
  createUser: () => Promise<string>,
  getUser: (userId: string) => Promise<User>
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};
