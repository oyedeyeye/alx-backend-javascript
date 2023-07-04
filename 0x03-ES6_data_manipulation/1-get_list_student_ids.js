export default function getListStudentIds(getListStudents) {
  if (!(getListStudents instanceof Array)) {
    return [];
  }
  return getListStudents.map((student) => student.id);
}
