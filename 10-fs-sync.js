const { readFileSync, writeFileSync, read } = require("fs");

let first = readFileSync("./content/first.txt", "utf-8");
let second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);

