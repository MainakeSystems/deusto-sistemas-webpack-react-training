const students = [
    {id: 3645, name: 'pakito', approved: true},
    {id: 7364, name: 'juanito', approved: false},
    {id: 1098, name: 'patxi', approved: true},
];

//Every
const allApproved = students.every(singleStudent => singleStudent.approved);

console.log("All approved students: ", allApproved);

//Filter
const onlyStudentApproved = students.filter(singleStudent => singleStudent.approved);
console.log("Approved Student: ", onlyStudentApproved);

//Find
const onlyFoundedStudent = students.find(singleStudent => singleStudent.approved);
console.log("Find Result: ", onlyFoundedStudent.name);

//FindIndex
const indexFound = students.findIndex(singleStudent => singleStudent.name == 'patxi');
console.log("Index Found: ", indexFound);

//Map
const concatCharacter = "-";
const modifiedStudentList = students.map(singleStudent => ({
    ...singleStudent,
    name: singleStudent += concatCharacter
}));

students.forEach(singleStudent => {
    console.log("Student Name: ", singleStudent.name);
});

console.log("Mapping Students: ", modifiedStudentList);

//Set
let newStudent = {id: 3645, name: 'pakito', approved: true};

const uniqueStudents = new Set(students);

uniqueStudents.add(newStudent);
uniqueStudents.add(newStudent);
uniqueStudents.add(newStudent);
uniqueStudents.add(newStudent);

console.log("Set Size: ", uniqueStudents.size);
console.log("Array Length: ", students.length);

console.log("DUPLICATED STUDENT LIST: ", uniqueStudents);