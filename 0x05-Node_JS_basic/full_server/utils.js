import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export function readDatabase(filePath) {
  return readFileAsync(filePath, 'utf8')
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const studentsByField = {};

      lines.forEach((line, index) => {
        if (index === 0) return; // Skip header
        const [firstname, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });

      return studentsByField;
    })
    .catch(err => {
      throw new Error('Cannot load the database');
    });
}
