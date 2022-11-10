const addButton = document.querySelector(".addB");
const addInfo = document.querySelector(".text-block");
const sortButton = document.querySelector(".sort-button");
const sortBtn = document.querySelector(".button");
const deleteButton = document.querySelector(".x-button");
const tasks = document.querySelector(".tasks");
const items = document.getElementsByClassName("item");
const itemss = document.querySelectorAll(".item");
const urlAddress = document.URL;
addButton.addEventListener('click', createTask);
createTask();
sortBtn.addEventListener('mouseover',() => {
    var image = document.querySelector(".button");
    if(image.src == `${urlAddress}photos/lowToHighGrey.svg`){
        image.src = `${urlAddress}photos/lowToHighBlack.svg`;
    }
    else if(image.src == `${urlAddress}photos/highToLowGrey.svg`){
        image.src = `${urlAddress}photos/highToLowBlack.svg`;
    }
});
sortBtn.addEventListener('mouseout',() => {
    var image = document.querySelector(".button");
    if(image.src == `${urlAddress}photos/lowToHighBlack.svg`){
        image.src = `${urlAddress}photos/lowToHighGrey.svg`;
    }
    else if(image.src == `${urlAddress}photos/highToLowBlack.svg`){
        image.src = `${urlAddress}photos/highToLowGrey.svg`;
    }
});
sortBtn.addEventListener('click', () => {
    let myNodeList = [...items];
    var image = document.querySelector(".button");
    if(image.src == `${urlAddress}photos/lowToHighBlack.svg`){
        image.src = `${urlAddress}photos/highToLowBlack.svg`;             
        myNodeList.sort((a,b) =>{
            if(a.firstChild.value < b.firstChild.value)            
                return -1;    
            else if(a.firstChild.value > b.firstChild.value)
                return 1;
            return 0;
        });
        tasks.replaceChildren(...myNodeList);
    }
    else if(image.src == `${urlAddress}photos/highToLowBlack.svg`){
        image.src = `${urlAddress}photos/lowToHighBlack.svg`;        
        myNodeList.sort((a,b) =>{
            if(a.firstChild.value > b.firstChild.value)            
                return -1;      
            else if(a.firstChild.value < b.firstChild.value)
                return 1;
            return 0;
        });
        tasks.replaceChildren(...myNodeList);
    }
});
function createTask(){
    let newTask = document.createElement('div');    
    newTask.classList.add('item');
    newTask.addEventListener('keyup', makeReadOnlyTask);     
    newTask.innerHTML = `<input class="text-block" type="text" draggable="true" ><button class="x-button" type="button"><img class="deletePic" src="photos\\buttonXgrey.svg" alt=""></button>`
    tasks.appendChild(newTask);
    const tasksHeight = document.querySelector(".input-block");  
    tasksHeight.scrollBy(0,110);
}
function makeReadOnlyTask(event){
    if(event.key == "Enter" || event.key == 13){
        event.target.readOnly = true;
    }
}
tasks.addEventListener('click', (event) => {
    if(event.target.classList.contains('x-button') || event.target.classList.contains('deletePic')){
        let htmlCode = document.querySelector(".text-block");
        if(items.length == 1){
            htmlCode.value = ' ';
        }
        else{
            let deletedElement = event.target.parentElement.parentElement;                
            deletedElement.remove();
        }   
    }
});
const taskList = document.getElementById("tasks-list");
const sortable = Sortable.create(taskList,{
    animation: 200,
    ghostClass: 'myghostclass',
    dragClass: 'sortable-drag'
});