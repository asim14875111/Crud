// Created a array to store employees record

let Data = [];

// Added a variable to check entry in name is being editing or not 

let currentEditIndex = null;

// Function to add or update entries
function addEntry() {

  // Getting values 
  const employeename = document.getElementById("employee-name").value;
  const joiningdate = document.getElementById("joining-date").value;
  const employeesalary = document.getElementById("employee-salary").value;
  const employeestatus = document.getElementById("status").value;

// Storing all the values in object
  const entry = {
    employeename,
    joiningdate,
    employeesalary,
    employeestatus,
  };

  const updatebutton = document.getElementById("updatebutton");
  
// If the entry is editing it will edit the entry and update it

   if(currentEditIndex !== null){
    Data[currentEditIndex] = entry;

// After updating it will reset the variable to null , the editing mode is finished

    currentEditIndex = null
    updatebutton.innerHTML = "Add" 

  }
  
  // displaying entries
  
  
  
  else{
    // if no entry is being edited ,add the entry to new array 
    
    // updatebutton.innerHTML = "Update/add" 
      Data.push(entry);
      // changing inner html of button when the entries are added
    }


   displayEntries();


  };

// Displaying employees record in table

function displayEntries() {


  // Getting the element where the employee records will be displayed
  const tbody = document.getElementById("employees-lists");


  //Removing all the existing rows in the table
  tbody.innerHTML = "";

  Data.forEach((entry, index) => {

    // Creating row for each entry
    const row = document.createElement("tr");
    row.innerHTML = `
               <td class="row2">${entry.employeename}</td>
               <td class="row2">${entry.joiningdate}</td>
               <td class="row2">${entry.employeesalary}</td>
               <td class="row2">${entry.employeestatus}</td>
               <td class="cursor-pointer text-lg text-blue-700" onclick="deleteItem(${index})">Delete</td>
               <td id="editbutton" class="cursor-pointer text-blue-700 " onclick="editItem(${index})">Edit</td>
               `;
              //  Displaying entries in row
               tbody.appendChild(row);
  });
}

// Function to delete employee record

function deleteItem(index){
  // It will remove one entry from the array 
  Data.splice(index, 1);
  const loginForm = document.getElementById("loginForm");
  loginForm.reset();
  displayEntries();

  updatebutton.innerHTML = "Add" 

};


// Function to edit employee record

function editItem(index) {


// Get the entry from the name array
  const entry = Data[index];

  // Set the input fields to the values which are being edited
  document.getElementById("employee-name").value = entry.employeename;
  document.getElementById("joining-date").value = entry.joiningdate;
  document.getElementById("employee-salary").value = entry.employeesalary;
  document.getElementById("status").value = entry.employeestatus;

// It will replace the value with the older one after being edited 

  currentEditIndex = index;

    updatebutton.innerHTML = "Update" 
  
}

// Formatting inputs values on submit

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (ev) => {

  // Stops the form from submitting and refreshing the page 
  ev.preventDefault();


  // After submitting the form , it will clear/reset the input fields
  loginForm.reset();
});

