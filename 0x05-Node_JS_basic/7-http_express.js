const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8')
      .then((data) => {
        const rows = data.split('\n').filter((row) => row.trim() !== '');
        const fieldData = {};
        let studentCount = 0;

        rows.slice(1).forEach((row) => {
          const columns = row.split(',');
          const firstName = columns[0];
          const field = columns[3];
          studentCount += 1;
          if (!fieldData[field]) {
            fieldData[field] = { count: 0, list: [] };
          }
          fieldData[field].count += 1;
          fieldData[field].list.push(firstName);
        });

        let result = `Number of students: ${studentCount}\n`;
        for (const [field, { count, list }] of Object.entries(fieldData)) {
          result += `Number of students in ${field}: ${count}. List: ${list.join(', ')}\n`;
        }
        resolve(result.trim());
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(500).send('Database path not provided');
    return;
  }

  countStudents(databasePath)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch(() => {
      res.status(500).send('Cannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
