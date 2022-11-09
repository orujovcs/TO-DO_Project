const addButton = document.querySelector(".addB");
const addInfo = document.querySelector(".text-block");
const sortButton = document.querySelector(".sort-button");
const sortBtn = document.querySelector(".button");
const deleteButton = document.querySelector(".x-button");
const tasks = document.querySelector(".tasks");
const items = document.querySelectorAll(".item");
const input = document.querySelector
let myNodeList = [];
sortBtn.addEventListener('mouseover',() => {
    var image = document.querySelector(".button");
    if(image.src == `http://127.0.0.1:5501/photos/lowToHighGrey.svg`){
        image.src = `http://127.0.0.1:5501/photos/lowToHighBlack.svg`;
    }
    else if(image.src == `http://127.0.0.1:5501/photos/highToLowGrey.svg`){
        image.src = `http://127.0.0.1:5501/photos/highToLowBlack.svg`;
    }
});
sortBtn.addEventListener('mouseout',() => {
    var image = document.querySelector(".button");
    if(image.src == `http://127.0.0.1:5501/photos/lowToHighBlack.svg`){
        image.src = `http://127.0.0.1:5501/photos/lowToHighGrey.svg`;
    }
    else if(image.src == `http://127.0.0.1:5501/photos/highToLowBlack.svg`){
        image.src = `http://127.0.0.1:5501/photos/highToLowGrey.svg`;
    }
});
sortBtn.addEventListener('click', () => {
    var image = document.querySelector(".button");
    if(image.src == `http://127.0.0.1:5501/photos/lowToHighBlack.svg`){
        image.src = `http://127.0.0.1:5501/photos/highToLowBlack.svg`;
        let task = document.querySelector(".tasks");
        task.innerHTML = " ";
        myNodeList.sort();
        myNodeList.forEach((item) => {
            let newTask = document.createElement('div');
            newTask.classList.add('item');
            newTask.innerHTML = `<div class="p-textBlock"><p class="text-blockTask">${item}</p> <button class="x-button" type="button"><img class="deletePic" src="photos\\buttonXgrey.svg" alt=""></button></div>`
            tasks.appendChild(newTask);
        });
    }
    else if(image.src == `http://127.0.0.1:5501/photos/highToLowBlack.svg`){
        image.src = `http://127.0.0.1:5501/photos/lowToHighBlack.svg`;
        let task = document.querySelector(".tasks");
        task.innerHTML = " ";
        myNodeList.reverse();
        myNodeList.forEach((item) => {
            let newTask = document.createElement('div');
            newTask.classList.add('item');
            newTask.innerHTML = `<div class="p-textBlock"><p class="text-blockTask" draggable="true">${item}</p> <button class="x-button" type="button"><img class="deletePic" src="photos\\buttonXgrey.svg" alt=""></button></div>`
            tasks.appendChild(newTask);
        });
    }
});
addButton.addEventListener('click', () => {
    let newTask = document.createElement('div');
    newTask.classList.add('item');
    newTask.innerHTML = `<p class="text-blockTask">${addInfo.value}</p> <button class="x-button" type="button"><img class="deletePic" src="photos\\buttonXgrey.svg" alt=""></button>`
    tasks.appendChild(newTask);
    myNodeList.push(addInfo.value);
    addInfo.value = '';
});
document.addEventListener('keyup', (event) => {
    if(event.key == "Enter" || event.key == 13){
        let newTask = document.createElement('div');
        newTask.classList.add('item');
        newTask.innerHTML = `<input class="text-block" type="text" value="${addInfo.value}" draggable="true"><button class="x-button" type="button"><img class="deletePic" src="photos\\buttonXgrey.svg" alt=""></button>`
        tasks.appendChild(newTask);
        myNodeList.push(addInfo.value);
        addInfo.value = '';
    }
});
tasks.addEventListener('click', (event) => {
    if(event.target.classList.contains('x-button') || event.target.classList.contains('deletePic')){
        let deletedElement = event.target.parentElement.parentElement;
        console.log(deletedElement);
        let ifInputDeletedElement;
        try {
            if(deletedElement.querySelector('.text-block').value){
                ifInputDeletedElement = deletedElement.querySelector('.text-block').value;
                console.log(ifInputDeletedElement);
            }
        } 
        catch (error) {}
        let deletedElementInnerText = deletedElement.firstChild.innerText;
        console.log(deletedElementInnerText);
        myNodeList = myNodeList.filter ( (item)=>{     
            return item !== deletedElementInnerText;
        });
        if(ifInputDeletedElement != null){
            myNodeList = myNodeList.filter ( (item)=>{     
            return item !== ifInputDeletedElement;
        });
        }
        deletedElement.remove();
    }
});
const taskList = document.getElementById("tasks-list");
const sortable = Sortable.create(taskList,{
    animation: 200,
    ghostClass: 'myghostclass',
    dragClass: 'sortable-drag'
});