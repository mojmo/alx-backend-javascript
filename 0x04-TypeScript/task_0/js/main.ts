interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "California",
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    studentsList.forEach((student) => {
        const tableRow = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        tableRow.appendChild(firstNameCell);
        tableRow.appendChild(locationCell);

        tableBody.appendChild(tableRow);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

renderTable();
