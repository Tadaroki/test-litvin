function multiplyTable() {
  let i = 1;
  while (i <= 10) {
    let j = 1;
    while (j <= 10) {
      console.log(i + "\t" + "*" + "\t" + j + "\t" + "=" + "\t" + i * j);
      j++;
    }
    console.log("\n");
    i++;
  }
}

multiplyTable();
