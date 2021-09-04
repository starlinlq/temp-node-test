//Modules encapsulated code (only share minimum)
//Commonjs, every file is module by default
const { john, peter } = require("./4-names");
const { sayHi } = require("./5-utils");
require("./7-mind-grenade");
const data = require("./6-alternative-flavor");
sayHi("susan");
sayHi(john);
sayHi(peter);
