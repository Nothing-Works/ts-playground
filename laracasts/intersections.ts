// union type can be thought "or" type
// intersection type can be thought "and" type
interface Serializable {
  serialize(x: unknown): string;
}

interface Identifiable {
  uuid: string;
}

interface tt extends Serializable, Identifiable {}

const something: Serializable & Identifiable = {
  uuid: "uuid",
  serialize(x: unknown): string {
    return JSON.stringify(x);
  },
};

const something1: tt = {
  uuid: "uuid",
  serialize(x: unknown): string {
    return JSON.stringify(x);
  },
};

// the two should be compatible.
// kinda old way
type Dictionary = {
  [key: string]: string;
};
const dictionary: Dictionary = {
  foo: "bar",
  bar: "foo",
};

// better way
type betterDictionary = Record<string, string>;
type unknownRecord = Record<PropertyKey, unknown>;

interface Foo {
  id: number;
  name: string;
}

// they are not compatible so will not work even here we do not have error.
// but when we are trying to assign, we will get error.
type Nope = Foo & Record<string, string>;

// error!!!
// const nope: Nope = {
//   id: 1,
//   name: "andy",
// };
