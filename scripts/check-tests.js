import fs from 'fs';
import path from 'path';

const componentsDir = path.join(__dirname, 'src/components');

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    const componentFile = path.join(componentsDir, file);
    const testFile = path.join(componentsDir, '__tests__', `${file}.test.js`);

    fs.access(testFile, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(`Test file not found for component ${file}`);
        process.exit(1);
      }
    });
  });
});
