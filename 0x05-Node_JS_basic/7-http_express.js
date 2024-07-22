const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fields = {};

      lines.forEach((line, index) => {
        if (index === 0) return;
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = { count: 0, list: [] };
        }
        fields[field].count += 1;
        fields[field].list.push(firstname);
      });

      let response = `Number of students: ${lines.length - 1}\n`;
      for (const [field, { count, list }] of Object.entries(fields)) {
        response += `Number of students in ${field}: ${count}. List: ${list.join(', ')}\n`;
      }
      return response.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
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
