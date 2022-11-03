const addButton = document.querySelector(".addB");
const addInfo = document.querySelector(".text-block");
const sortButton = document.querySelector(".sort-button");
const deleteButton = document.querySelector(".x-button");

deleteButton.addEventListener('click', () => {
    console.log("Hello!");
});

sortButton.addEventListener('click', _event => {
    console.log("Hello!");
});

addInfo.addEventListener('keyup', event => {
    if(event.key == 'Enter' || event.key == 13){
        console.log("Privet Togrul");
    }
});

addButton.addEventListener('click', _event => {
    console.log("Hello!");
});