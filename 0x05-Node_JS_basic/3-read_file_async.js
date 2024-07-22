const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the data into lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Initialize counters and lists for each field
      const fields = {};

      // Process each line
      lines.forEach((line, index) => {
        // Skip the header line
        if (index === 0) return;

        const [firstname, , , field] = line.split(',');

        if (!fields[field]) {
          fields[field] = { count: 0, list: [] };
        }

        fields[field].count += 1;
        fields[field].list.push(firstname);
      });

      // Log the total number of students
      console.log(`Number of students: ${lines.length - 1}`);

      // Log the number of students in each field and their names
      for (const [field, { count, list }] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
