import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      Object.keys(studentsByField).sort().forEach((field) => {
        response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      });
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const students = studentsByField[major] || [];
      return res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
