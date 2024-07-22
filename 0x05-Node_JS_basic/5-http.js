const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
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
      return response;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.statusCode = 500;
      res.end('Database path not provided');
      return;
    }

    countStudents(databasePath)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
