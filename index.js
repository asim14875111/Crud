let NAME = [];
let currentEditIndex = null;
// Function to add entries 

function addEntry() {
  const employeename = document.getElementById("employee-name").value;
  const joiningdate = document.getElementById("joining-date").value;
  const employeesalary = document.getElementById("employee-salary").value;
  const employeestatus = document.getElementById("status").value;

  const entry = {
    employeename,
    joiningdate,
    employeesalary,
    employeestatus,
};

  const updatebutton = document.getElementById("updatebutton");
  
   if( currentEditIndex !== null){
    NAME[currentEditIndex] = entry;
    currentEditIndex = null
  }

 
  else if ( !employeename || !joiningdate || !employeesalary || !employeestatus) {
   
      alert(" fill all the fields!")
  } 
    
    
    else{
    NAME.push(entry);

      updatebutton.innerHTML = "Update/add" 
    }

  

  

  document.getElementById("loginForm").reset();
  displayEntries();
}

// Displaying employees record in table

function displayEntries() {

  const tbody = document.getElementById("employees-lists");
  tbody.innerHTML = "";

  NAME.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
               <td class="row2">${entry.employeename}</td>
               <td class="row2">${entry.joiningdate}</td>
               <td class="row2">${entry.employeesalary}</td>
               <td class="row2">${entry.employeestatus}</td>
               <td class="cursor-pointer text-lg text-blue-700" onclick="deleteItem(${index})">Delete</td>
               <td id="editbutton" class="cursor-pointer text-blue-700 " onclick="editItem(${index})">Edit</td>`;
               tbody.appendChild(row);
  });
}

// Function to delete employee record

function deleteItem(index) {
  NAME.splice(index, 1);
  displayEntries();
}

// Function to edit employee record
function editItem(index) {
  const entry = NAME[index];
  document.getElementById("employee-name").value = entry.employeename;
  document.getElementById("joining-date").value = entry.joiningdate;
  document.getElementById("employee-salary").value = entry.employeesalary;
  document.getElementById("status").value = entry.employeestatus;
  currentEditIndex = index;}

// Formatting inputs values on submit

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  loginForm.reset();
});




function noNumbers(event){
  if(event.key >= '0'  && event.key <= '9' ){
    event.preventDefault()
  }
}



function nosymbols(event){

  if(event.key === '@')
    
    {event.preventDefault()}

else if(event.key === '!') {
  event.preventDefault()
}
else if(event.key === '#') {
  event.preventDefault()
}
else if(event.key === '$') {
  event.preventDefault()
}
else if(event.key === '%') {
  event.preventDefault()
}
else if(event.key === '^') {
  event.preventDefault()
}
else if(event.key === '&') {
  event.preventDefault()
}
else if(event.key === '*') {
  event.preventDefault()
}
else if(event.key === '(') {
  event.preventDefault()
}
else if(event.key === ')' ) {
  event.preventDefault()
}
else if(event.key === '_') {
  event.preventDefault()
}
else if(event.key === '-') {
  event.preventDefault()
}
else if(event.key === '=') {
  event.preventDefault()
}
else if(event.key === '[') {
  event.preventDefault()
}
else if(event.key === ']') {
  event.preventDefault()
}
else if(event.key === '{') {
  event.preventDefault()
}
else if(event.key === '}') {
  event.preventDefault()
}
else if(event.key === '/') {
  event.preventDefault()
}
else if(event.key === '?') {
  event.preventDefault()
}
else if(event.key === '=') {
  event.preventDefault()
}
else if(event.key === '.') {
  event.preventDefault()
}
else if(event.key === '>') {
  event.preventDefault()
}
else if(event.key === '<') {
  event.preventDefault()
}
else if(event.key === ',') {
  event.preventDefault()
}
else if(event.key === ';') {
  event.preventDefault()
}
else if(event.key === ':') {
  event.preventDefault()
}
else if(event.key === '`') {
  event.preventDefault()
}
else if(event.key === '~') {
  event.preventDefault()
}
else if(event.key === '+') {
  event.preventDefault()
}
else if(event.key === '"') {
  event.preventDefault()
}
else if(event.key === "'") {
  event.preventDefault()
}
else if(event.key === "|") {
  event.preventDefault()
}
// else if(event.key === "0") {
//   event.preventDefault()
// }

}





