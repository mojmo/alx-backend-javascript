export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
}
