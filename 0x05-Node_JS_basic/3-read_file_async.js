const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path,
      { encoding: 'utf-8', flag: 'r' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter(((student) => student.length === 4 && student[0] !== 'firstname'))
    .map((student) => ({
      firstname: student[0],
      lastname: student[1],
      age: student[2],
      field: student[3],
    }));

  const csStudents = students
    .filter((student) => student.field === 'CS')
    .map((student) => student.firstname);
  const sweStudents = students
    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstname);

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  return { students, csStudents, sweStudents };
}

module.exports = countStudents;
