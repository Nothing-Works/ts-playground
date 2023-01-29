'use strict'

import { users, currentUser } from "./users.js";
import helper from "./helper.js";
import { functionName } from "./helper.js";
console.log(users);
console.log(currentUser);

console.log(helper(['andy']));

console.log(helper(users.map(u=> u.email)));
console.log(functionName());