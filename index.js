let NAME = [];

function addEntry() {
  const values = document.querySelector(".demo");
  const PElement = document.querySelector("#first-employee-id");
  let employeename = document.getElementById("employee-name").value;

  const joiningdate = document.getElementById("joining-date").value;
  const employeesalary =
    document.getElementById("employee-salary").value;
  const employeestatus = document.getElementById("status").value;

  let name = {
    employeename,
    joiningdate,
    employeestatus,
    employeesalary,
  };

  NAME.push(name);
  displayEntries();
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Displaying emoloyees record in table

function displayEntries() {
  const tbody = document.getElementById("employees-lists");
  tbody.innerHTML = "";

  NAME.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
           <td class="row2 pl-4 text-lg font-bold text-gray-600 " >${entry.employeename}</td>
           <td class="row2 text-lg font-bold text-gray-600 " >${entry.joiningdate}</td>
           <td class="row2 text-lg font-bold text-gray-600 " >${entry.employeesalary}</td>
   
           <td class="row2 text-lg font-bold text-gray-600  " >${entry.employeestatus}</td>

       

           
           <td type="button" id="" onclick="deleteItem(${index})" class="row2 cursor-pointer text-lg text-blue-500 " >Delete</td>
           
           <td class="cursor-pointer"  onclick="editItem(${index})" >Edit</td>`;
    tbody.appendChild(row);
  });
}

// function to delete employee record

function deleteItem(index) {
  NAME.splice(index, 1);
  displayEntries();
}

// Function to edit employee record

function editItem(index) {
  const entry = NAME[index];
  document.getElementById("employee-name").value = entry.employeename;
  document.getElementById("joining-date").value = entry.joiningdate;
  document.getElementById("employee-salary").value =
    entry.employeesalary;
  document.getElementById("status").value = entry.employeestatus;
  currentEditIndex = index;
}
