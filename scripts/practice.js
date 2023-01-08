console.log ("Hello World");

let studentsName = ["gary", "sivisko", "edgar", "jose", "brayan", "kevin", "scott", "will", "john", "hethe"];


function showStudents(){
    let list = "";
    for(let i = 0; i < studentsName.length; i++){
        list += `<li>${studentsName[i]}</li>`;
        document.getElementById("ol").innerHTML = list}}

let persons = []
let c=1;
function person(name, salary, Id){
    this.name = name;
    this.salary = salary;
    this.id = c++;

}
    let person1 = new person("Gary", 100000);
    let person2 = new person("Sivisko", 100000);
    let person3 = new person("Edgar", 100000);
    let person4 = new person("Jose", 100000);
    let person5 = new person("Brayan", 100000);
    let person6 = new person("Kevin", 100000);
    let person7 = new person("Scott", 100000);
    let person8 = new person("Will", 100000);
    let person9 = new person("John", 185000);
    let person10 = new person("Hethe", 100000);

    persons.push(person1, person2, person3, person4, person5, person6, person7, person8, person9, person10);



function displayTotal(){
    let total = 0;
    let totalDisplay = "";
    if (persons.length == 0){
        totalDisplay = `<h1>Total: 0</h1>`
    }
    for(let i = 0; i < persons.length; i++){
        total += persons[i].salary;
        totalDisplay= `<h1>Total: ${total}</h1>`
    }
    document.getElementById("total").innerHTML = totalDisplay;
displayCards();
}

function deletePerson(aPersonId) {
    let indexDelete = persons.findIndex((persons) => persons.id == aPersonId);
    persons.splice(indexDelete, 1);
    displayTotal();
  }
function displayCards() {
    let personCard = "";
    let personData = "";
    for (let q = 0; q < persons.length; q++) {
      let person = persons[q];
      personCard = `
          <table>
          <thead>
            <tr>
              <th>Person #</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody id="personTable"></tbody>
            </table>`;
      personData += `<tr>
      <td class="tablenumber">${[q + 1]}</td>
      <td class="tablename">${person.name}</td>
      <td class="tablesalary">${person.salary}</td>
      <td><button id="deletebutton" onclick="deletePerson(${person.id})">Delete</button></td>
      </tr>`;
    }
    document.getElementById("personDisplay").innerHTML = personCard;
    document.getElementById("personTable").innerHTML = personData;
}
function highSalary(){
    
}
function init(){
    showStudents(),
    displayCards(),
    displayTotal()
}

window.onload = init;