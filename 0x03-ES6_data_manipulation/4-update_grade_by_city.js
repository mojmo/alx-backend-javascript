export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  return studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Assign grade from newGrades or set to "N/A"
    return {
      ...student, // Spread existing student properties
      grade: matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });
}
