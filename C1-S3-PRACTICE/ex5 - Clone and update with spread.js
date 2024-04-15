// THE CONTEXT
// In the provided code, there's an array named students, containing objects representing students with their IDs, names, and grades.
// There's a function named updateStudentGrade that takes three parameters:
//      studentsArray (the array of students)
//      idToUpdate (the ID of the student to update)
//       newGrade (the new grade to assign to the student).

// YOUR JOB
// Your task is to complete the updateStudentGrade function, following the  steps

let students = [
    { id: 1, name: "Trang", grade: "A" },
    { id: 2, name: "Hai", grade: "B" },
    { id: 3, name: "Linh", grade: "C" },
  ];
  
  function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
    studentsArray.forEach( student => {
      student.id === idToUpdate ? student.grade= newGrade : "" ;
    });
    return studentsArray;
  }
  
  // Original array of students
  console.log("Original students array:");
  console.log(students);
  
  // Update the grade of the student with ID 2 to "A"
  let updatedStudents = updateStudentGrade(students, 2, "A");
  
  // Updated array of students
  console.log("\nUpdated students array:");
  console.log(updatedStudents);