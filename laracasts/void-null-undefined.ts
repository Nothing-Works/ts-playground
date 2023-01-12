// Void, Null, Undefined

const logger = (something: unknown): void => console.log(something);

logger("andy is good");

interface UserOne {
  id: string;
  email: string;
  firstName: string | null;
  age?: number;
}

const createUser = (email: string): UserOne => ({
  id: "uu-id",
  email,
  // we have to set the properties, even it's null
  firstName: null,
  // ? means it's optional so we can just unset that property which will mean age will be undefined (doesn't exist)
  //   age: null,
});

const user1 = createUser("test");
