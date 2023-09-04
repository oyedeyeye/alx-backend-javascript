const readDatabase = require('../utils');

const dbPath = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(dbPath)
      .then((data) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write('This is the list of our students\n');
        response.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
        response.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
        response.end();
      })
      .catch((error) => {
        response.statusCode = 500;
        response.write('Cannot load the database');
        console.error(error);
      })
      .finally(() => response.end());
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE');
      response.end();
      return;
    }
    readDatabase(dbPath)
      .then((data) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write(`List: ${data[major].join(', ')}`);
        response.end();
      })
      .catch((error) => {
        response.statusCode = 500;
        response.write('Cannot load the database');
        console.error(error);
      })
      .finally(() => response.end());
  }
}

export default StudentsController;
