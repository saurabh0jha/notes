function searchArray(haystack, needle) {
  console.log(haystack.includes(needle) ? "YES" : "NO");
}

function main() {
  let inputArr;
  let size;
  let elementToSearch;
  let lineNumber = 0;

  rl.on("line", function (line) {
    if (lineNumber === 0) {
      [size, elementToSearch] = line.split(" ");
    }

    if (lineNumber === 1) {
      inputArr = line.split(" ");
      searchArray(inputArr, elementToSearch);
    }

    lineNumber++;
  });
}

main();
