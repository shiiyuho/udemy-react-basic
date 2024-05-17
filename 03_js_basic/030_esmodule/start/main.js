import { hello, User } from "./module.js";
import funcB from "./module.js"; //export defaultの場合は{}がいらない,
hello();
const user = new User("Tom");
user.hello();
