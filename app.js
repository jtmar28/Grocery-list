//Declare Variables
const input = document.querySelector('#grocery-item');
const form = document.querySelector('#grocery-form');
const submit = document.querySelector('#submit');
const groceryList = document.querySelector('#grocery-list');
const clear = document.querySelector('#clear');
const search = document.querySelector('#search');

loadAllEventListeners();

function loadAllEventListeners(){
    document.addEventListener('DOMContentLoaded',getGroceryItemsFromLS);
    form.addEventListener('submit', addGroceryItem);
    groceryList.addEventListener('click', deleteGroceryItem);
    search.addEventListener('keyup', filterGroceryList);
    clear.addEventListener('click', clearAllGroceryListItems);
}
function StoreGroceryItemsIntoLS(item){
    let items;
    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    items.push(item);
    localStorage.setItem('items',JSON.stringify(items));
}
function getGroceryItemsFromLS(){
    let items;
    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    items.forEach(function(item){
        const li = document.createElement('li');
        //Add Class name
        li.className = 'collection-item';
        //Append input into the li
        li.appendChild(document.createTextNode(item));
        //Create delete button
        const link = document.createElement('a');
        link.className = 'delete secondary-content';
        link.innerHTML = '<i class="fas fa-trash"></i>';
        li.appendChild(link);
        groceryList.appendChild(li);
    });
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
        link.innerHTML = '';
        li.appendChild(link);
        groceryList.appendChild(li);
        //Store into ls
        StoreGroceryItemsIntoLS(input.value);
        //Clear Text Value
        input.value = '';
    }
    e.preventDefault();
}
function deleteGroceryItem(e){
    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        deleteGroceryItemFromLS(e.target.parentElement.parentElement);
    }
}
function deleteGroceryItemFromLS(groceryItem){
    let items;
    if(localStorage.getItem('items') === null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    items.forEach(function(item,index){
        if(groceryItem.textContent === item){
            items.splice(index,1);
        }
    });
    console.log(groceryItem.textContent);
    localStorage.setItem('items',JSON.stringify(items));

}
function filterGroceryList(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(items){
        const item = items.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            items.style.display = 'block';
        }else{
            items.style.display = 'none';
        }
    });
}
function clearGroceryItemsFromLS(){
    localStorage.clear();
}
function clearAllGroceryListItems(){
    groceryList.textContent = '';
    clearGroceryItemsFromLS();
}

