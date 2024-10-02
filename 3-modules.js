// CommonJS, every file is a module (by default)
// Modules- Encapsulated Code (only share minimum amt of code)

const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternativ-flavor");
require("./7-mind-grenade");

// console.log(data);

sayHi("susan");
sayHi(john.toUpperCase());
sayHi(peter.toUpperCase());
