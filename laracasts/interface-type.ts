// interface will always expect object
interface IUser {
  id: string;
  name: string;
}

// type we can assign anything
type TUser = {
  id: string;
  name: string;
};

const user11: IUser = {
  id: "uuid",
  name: "andy",
};

const user22: TUser = {
  id: "uuid",
  name: "andy",
};

/*
 which one to use?
 - standard data types use interface, use interfaces where you can
 - use types for union and intersections
 - kye differences
    - interfaces are guaranteed to be 'named' in the error message, whereas type aliases are not
    - interfaces cannot be used to rename primitives or literal types
    - type aliases cannot participate in declaration merging but interfaces can
*/

// union
type suit = "clubs" | "diamonds" | "hearts" | "spades";
const card1: suit = "clubs";

// intersection

interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

type PersistedUser = User & Timestamps;

const persistedUser: PersistedUser = {
  name: "andy",
  id: "id",
  updatedAt: new Date(),
  createdAt: new Date(),
};

// renaming primitives
type customString = string;

const nice: customString = "nice";

type heart = "hearts";

// Declaration merging

interface MergeUser {
  id: string;
  name: string;
}
interface MergeUser {
  age: number;
}
