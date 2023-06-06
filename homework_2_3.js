const generateTable = () => {
  for (let i = 1; i <= 10; i++) {
    console.log("\t");
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};

generateTable();
