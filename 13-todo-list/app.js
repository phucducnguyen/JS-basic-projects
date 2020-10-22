// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".todo-form");
const todo = document.getElementById("todo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let ediFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = todo.value;
    const id = new Date().getTime().toString(); // should not use for real project
    if(value  && !editFlag){
        //console.log("add item into the list");
    }else if(value  && editFlag){
        //console.log("editting");
    }else{
        //console.log("empty value");
        displayAlert('Please enter value','danger');
    }
}
//display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function(){
        alert.textContent="";
        alert.classList.remove(`alert-${action}`);
    },2000)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********