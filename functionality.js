const addButton = document.querySelector(".addB");
const addInfo = document.querySelector(".text-block");
const sortButton = document.querySelector(".sort-button");
const deleteButton = document.querySelector(".x-button");
const body = document.querySelector("body");
const tasks = document.querySelector(".tasks");
const item = document.querySelector(".item");
const myNodeList = [];


addButton.addEventListener('click', () => {
    let newTask = document.createElement('div');
    newTask.classList.add('item');
    newTask.innerHTML = `<div class="p-textBlock"><p class="text-blockTask">${addInfo.value}</p> <button class="x-button" type="button"><img class="deletePic" src="photos\\buttonXgrey.svg" alt=""></button></div>`
    tasks.appendChild(newTask);
    myNodeList.push(addInfo.value);
    addInfo.value = '';
    console.log(myNodeList);
});

tasks.addEventListener('click', (event) => {
    if(event.target.classList.contains('x-button') || event.target.classList.contains('deletePic')){
        event.target.parentElement.parentElement.remove();
    }
});