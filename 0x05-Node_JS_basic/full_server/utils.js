const fs = require('fs');

async function readDatabase(path) {
  let data;

  try {
    data = await fs.promises.readFile(path, { encoding: 'utf-8', flag: 'r' });
  } catch (error) {
    throw new Error(error);
  }

  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter(((student) => student.length === 4 && student[0] !== 'firstname'))
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  const fields = students.map((student) => student.field);
  const uniqueFields = new Set(fields);
  const studentsByField = {};

  for (const field of uniqueFields) {
    studentsByField[field] = [];
  }

  for (const student of students) {
    studentsByField[student.field].push(student.firstName);
  }

  return studentsByField;

  // const csStudents = students
  //   .filter((student) => student.field === 'CS')
  //   .map((student) => student.firstname);
  // const sweStudents = students
  //   .filter((student) => student.field === 'SWE')
  //   .map((student) => student.firstname);
}

module.exports = readDatabase;
