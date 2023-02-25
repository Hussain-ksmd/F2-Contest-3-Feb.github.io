let tableData = [];

function addNewRow() {
  const table = document.getElementById("data-table");
  const newRow = table.insertRow(-1);
  const newRowId = table.rows.length - 2;
  newRow.insertCell().innerHTML = newRowId + 1;

  const cellName = newRow.insertCell();
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  cellName.appendChild(nameInput);

  const cellRoll = newRow.insertCell();
  const rollInput = document.createElement("input");
  rollInput.type = "text";
  cellRoll.appendChild(rollInput);

  const cellSubject = newRow.insertCell();
  const subjectInput = document.createElement("input");
  subjectInput.type = "text";
  cellSubject.appendChild(subjectInput);

  const cellMarks = newRow.insertCell();
  const marksInput = document.createElement("input");
  marksInput.type = "text";
  cellMarks.appendChild(marksInput);

  const cellMarkedBy = newRow.insertCell();
  const markedByInput = document.createElement("input");
  markedByInput.type = "text";
  cellMarkedBy.appendChild(markedByInput);

  const newRowData = {
    id: newRowId + 1,
    student_name: "",
    student_roll: "",
    subject: "",
    marks: "",
    markedBy: ""
  };
  tableData.push(newRowData);
}

function saveTableData() {
  const table = document.getElementById("data-table");
  const rows = table.rows;
  for (let i = 1; i < rows.length - 1; i++) {
    const cells = rows[i].cells;
    tableData[i - 1].student_name = cells[1].firstChild.value;
    tableData[i - 1].student_roll = cells[2].firstChild.value;
    tableData[i - 1].subject = cells[3].firstChild.value;
    tableData[i - 1].marks = cells[4].firstChild.value;
    tableData[i - 1].markedBy = cells[5].firstChild.value;
  }

  // validate input fields
  let isValid = true;
  for (const data of tableData) {
if (data.student_name.trim() === "" ||
    data.student_roll.trim() === "" ||
    data.subject.trim() === "" ||
    data.marks.trim() === "" ||
    data.markedBy.trim() === "") {
  isValid = false;
  break;
}

if (isNaN(data.marks)) {
  isValid = false;
  break;
}

if (!data.markedBy.includes("@")) {
  isValid = false;
  break;
}
}

if (!isValid) {
console.log("Error: Invalid input");
return;
}

console.log(tableData);
}

// event listeners
document.getElementById("add-row-btn").addEventListener("click", addNewRow);
document.getElementById("save-btn").addEventListener("click", saveTableData);