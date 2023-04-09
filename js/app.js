let input = document.getElementById("Entered-list");
let addBtn = document.getElementById("Add-list");
let tasks = document.getElementById("Tasks");

//add btn disabled

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    } else{
        addBtn.classList.remove('active');
    }
});

//add new item to list

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = 
        `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else{
        alert('Please, enter a task.');
    }
});

//Delete items from list

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
});

//Mark items from list

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});