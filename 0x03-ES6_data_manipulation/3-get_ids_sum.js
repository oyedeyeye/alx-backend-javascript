export default function getStudentIdsSum(getListStudents) {
  if (!(getListStudents instanceof Array)) {
    return [];
  }
  return getListStudents.reduce((sum, students) => sum + students.id, 0);
}
