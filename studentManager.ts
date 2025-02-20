import { Student } from "./student";

export class StudentManager{
    // Initialize an array to store students
private students: Student[] = [];

// Create (Add) a new student
createStudent = (student: Student): void => {
  this.students.push(student);
  console.log('Student created:', student);
};

// Read (Get) a student by ID
 getStudent = (id: number): Student | undefined => {
  const student = this.students.find((s) => s.id === id);
  if (student) {
    console.log('Student found:', student);
  } else {
    console.log('Student not found');
  }
  return student;
};

// Update (Modify) an existing student by ID
updateStudent = (id: number, updatedData: Partial<Student>): void => {
  const studentIndex = this.students.findIndex((s) => s.id === id);
  if (studentIndex !== -1) {
    const student = this.students[studentIndex];
    this.students[studentIndex] = { ...student, ...updatedData };
    console.log('Student updated:', this.students[studentIndex]);
  } else {
    console.log('Student not found');
  }
};

// Delete (Remove) a student by ID
deleteStudent = (id: number): void => {
  const studentIndex = this.students.findIndex((s) => s.id === id);
  if (studentIndex !== -1) {
    this.students.splice(studentIndex, 1);
    console.log('Student deleted');
  } else {
    console.log('Student not found');
  }
}
}