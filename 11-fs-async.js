const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) return;
    let second = result;

    writeFile(
      "./content/result-sync2.txt",
      `this is the async version ${first}, ${second}`,
      (error, result) => {
        if (error) return;
        console.log(result);
      }
    );
  });
});
