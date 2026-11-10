
const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const message = document.getElementById("message");

let students = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const student = {
        id: document.getElementById("studentId").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        year: document.getElementById("year").value,
        contact: document.getElementById("contact").value
    };

    if (students.some(s => s.id === student.id)) {
        message.style.color = "red";
        message.textContent = "Student ID already exists!";
        return;
    }

    students.push(student);
    displayStudents();

    form.reset();

    message.style.color = "green";
    message.textContent = "Student successfully registered!";
});

function displayStudents() {
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        [student.id, student.name, student.course, student.year]
            .forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            students.splice(index, 1);
            displayStudents();
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        studentList.appendChild(row);
    });
}
  