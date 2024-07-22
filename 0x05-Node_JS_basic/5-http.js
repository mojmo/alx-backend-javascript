const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(filePath) {
  const studentNames = {};
  const fieldCounts = {};
  let totalStudents = 0;
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let result = '';
        const rows = data.toString().split('\n');
        rows.forEach((row, index) => {
          if (index === 0) return;
          if (row) {
            totalStudents += 1;
            const columns = row.split(',');
            const field = columns[3];
            const name = columns[0];
            if (studentNames[field]) {
              studentNames[field].push(name);
            } else {
              studentNames[field] = [name];
            }
            if (fieldCounts[field]) {
              fieldCounts[field] += 1;
            } else {
              fieldCounts[field] = 1;
            }
          }
        });
        result += `Number of students: ${totalStudents}\n`;
        for (const [field, count] of Object.entries(fieldCounts)) {
          result += `Number of students in ${field}: ${count}. `;
          result += `List: ${studentNames[field].join(', ')}\n`;
        }
        resolve(result);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        const trimmedOutput = output.slice(0, -1);
        res.end(trimmedOutput);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
