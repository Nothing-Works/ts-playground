"use strict";
const greeting = "Hello, Andy";
const year = 2002;
greeting.toLowerCase();
const addTwoNumbers = (a, b) => a + b;
function add(a, b) {
    return a + b;
}
const fetchUserById = (id) => ({
    id,
    name: "Andy",
});
const fetchBookById = (id) => ({
    id,
    name: "Andy",
    releaseDate: new Date(),
});
const user = fetchUserById("123");
const book = fetchBookById("123");
const saveUser = (user) => console.log("saving the user", { user });
const saveBook = (book) => console.log("saving the book", { book });
saveUser(book);
saveBook(user);
console.log(user);
console.log(greeting);
//# sourceMappingURL=index.js.map