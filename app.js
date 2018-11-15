//Declare Variables
const input = document.querySelector('#grocery-item');
const form = document.querySelector('#grocery-form');
const submit = document.querySelector('#submit');
const groceryList = document.querySelector('#grocery-list');

loadAllEventListeners();

function loadAllEventListeners(){
    form.addEventListener('submit', addGroceryItem);
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
        e.preventDefault();
    }
}