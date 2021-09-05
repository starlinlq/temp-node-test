const { readFile, writeFile } = require("fs").promises;
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(readFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/first.txt", "utf8");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
