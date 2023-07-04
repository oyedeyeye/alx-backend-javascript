export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!(getListStudents instanceof Array) || !(newGrades instanceof Array)) {
    return [];
  }
  return getListStudents.filter(((student) => student.location === city))
    .map((student) => {
      const studentObj = student;
      studentObj.grade = 'N/A';
      for (const obj of newGrades) {
        if (obj.studentId === studentObj.id) {
          studentObj.grade = obj.grade;
        }
      }
      return studentObj;
    });
}
