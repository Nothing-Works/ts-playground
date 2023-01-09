const greeting: string = "Hello, Andy";

const year: number = 2002;

greeting.toLowerCase();

const addTwoNumbers = (a: number, b: number): number => a + b;

function add(a: number, b: number): number {
  return a + b;
}

// use interface to define the shape of the type

interface User {
  id: string;
  name: string;
}

interface Book {
  id: string;
  name: string;
  releaseDate?: Date;
}
const fetchUserById = (id: string): User => ({
  id,
  name: "Andy",
});

const fetchBookById = (id: string): Book => ({
  id,
  name: "Andy",
  releaseDate: new Date(),
});

const user = fetchUserById("123");
const book = fetchBookById("123");

const saveUser = (user: User) => console.log("saving the user", { user });
const saveBook = (book: Book) => console.log("saving the book", { book });

// if both interfaces have the same shape then we can use those types interchangeably.
// super-set type can work with sub-set type.
saveUser(book);
// sub-set type can not work with super-set type unless with option property.
saveBook(user);
console.log(user);
console.log(greeting);
