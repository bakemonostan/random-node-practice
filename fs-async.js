const { readFile, writeFile } = require('fs');

// this takes a callback function
readFile('./content/test.txt', 'utf8', (err, response) => {
  if (err) {
    console.log(err);
    return;
  }
  // Functionality goes in here
  //   console.log(response);
  const first = response;
  readFile();
});
