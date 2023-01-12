// Any vs Unknown, any means that tell ts turn off the type checker.
// Unknown allow to take anything but does not allow to access the variable
// we need to check the type fist and then can perform some actions,
// so try to use unknown.
const loggerone = (something: unknown): void => {
  // so could not do this directly, we need to do a string check.
  // console.log(something.toUpperCase());
  if (typeof something === "string") {
    console.log(something.toUpperCase());
  } else {
    console.log(something);
  }
};

loggerone("andy");
loggerone({ foo: "bar" });

// Any vs Unknown
const loggertwo = (something: any): void =>
  console.log(something.toUpperCase());

loggertwo("andy");
loggertwo({ foo: "bar" });

type anyType = { prop1: any; prop2: any };
const anyFoo: anyType = {
  prop1: "hello",
  prop2: { foo: "bar" },
};

console.log(anyFoo.prop2.anything.something);

type unknownType = { prop1: unknown; prop2: unknown };
const unknownFoo: unknownType = {
  prop1: "hello",
  prop2: { foo: "bar" },
};

if (
  unknownFoo.prop2 && // check is not undefined
  typeof unknownFoo.prop2 === "object" && // check is an object
  Object.hasOwnProperty.call(unknownFoo.prop2, "foo")
) {
  // still needs to do a type casting to make it work.
  console.log((unknownFoo.prop2 as { foo: unknown }).foo);
}

const canvas = document.getElementById("my_canvas") as HTMLCanvasElement;
