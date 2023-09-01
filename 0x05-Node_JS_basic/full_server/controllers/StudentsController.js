const readDatabase = require('../utils');

const dbPath = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('This is the list of our students\n');
    readDatabase(dbPath)
      .then((data) => {
        response.write(`Number of students in CS: ${data['CS'].length}. List: ${data['CS'].join(', ')}\n`);
        response.write(`Number of students in SWE: ${data['SWE'].length}. List: ${data['SWE'].join(', ')}\n`);
        response.end();
      })
      .catch((error) => response.write(error.message))
      .finally(() => response.end());
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE');
      response.end();
      return;
    }
    readDatabase(dbPath)
      .then((data) => {
        response.write(`List: ${data[major].join(', ')}\n`);
        response.end();
      })
      .catch((error) => response.write(error.message))
      .finally(() => response.end());
  }
}

export default StudentsController;
