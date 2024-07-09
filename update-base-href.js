const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/404.html');
const oldBaseHref = '<base href="/">'; // Original base href in index.html
const newBaseHref = '<base href="https://Barnbarn96.github.io/frontend/">';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  const result = data.replace(oldBaseHref, newBaseHref);

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log('Base href updated successfully!');
  });
});
