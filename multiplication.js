// Function that outputs the multiplication table of a number to the console
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
      let result = num * (i + (j - 1));
      row += result.toString().padStart(4, " ");
    }
    console.log(row);
  }
}

// Testing the function with the multiplication table of 5
multiplicationTable(5);
