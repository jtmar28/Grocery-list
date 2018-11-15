//Declare Variables
const input = document.querySelector('#grocery-item');
const form = document.querySelector('#grocery-form');
const submit = document.querySelector('#submit');
const groceryList = document.querySelector('#grocery-list');
const clear = document.querySelector('#clear');
const search = document.querySelector('#search');

loadAllEventListeners();

function loadAllEventListeners(){
    form.addEventListener('submit', addGroceryItem);
    groceryList.addEventListener('click', deleteGroceryItem);
    search.addEventListener('keyup', filterGroceryList);
    clear.addEventListener('click', clearAllGroceryListItems);
}

function addGroceryItem(e){
    if(input.value === ''){
        alert('Please Enter Grocery Item');
    }else{
        //Create li
        const li = document.createElement('li');
        //Add Class name
        li.className = 'collection-item';
        //Append input into the li
        li.appendChild(document.createTextNode(input.value));
        //Create delete button
        const link = document.createElement('a');
        link.className = 'delete secondary-content';
        link.innerHTML = '<i class="material-icons prefix">delete</i>';
        li.appendChild(link);
        groceryList.appendChild(li);
        //Clear Text Value
        input.value = '';
    }
    e.preventDefault();
}
function deleteGroceryItem(e){
    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
}
function filterGroceryList(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }

    });
}
function clearAllGroceryListItems(){
    groceryList.textContent = '';
}