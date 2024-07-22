const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fields = {};
      const header = lines[0].split(',');
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');
      
      lines.slice(1).forEach((line) => {
        const list = line.split(',');
        if (!fields[list[idxFd]]) {
          fields[list[idxFd]] = { count: 0, list: [] };
        }
        fields[list[idxFd]].count += 1;
        fields[list[idxFd]].list.push(list[idxFn]);
      });

      const all = {
        numberStudents: `Number of students: ${lines.length - 1}\n`,
        listStudents: [],
      };

      for (const [field, { count, list }] of Object.entries(fields)) {
        all.listStudents.push(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }

      return all;
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
        res.write('This is the list of our students\n');
        res.write(data.numberStudents);
        res.write(data.listStudents.join('\n'));
        res.end();
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
