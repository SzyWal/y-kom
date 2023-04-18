
const todoList = [];

renderTodoList();

function renderTodoList () {

    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++) {

        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHTML += html;
    }
    console.log(todoListHTML)

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    }
    function addTodoList () {
        const inputElement = document.querySelector('.search-bar-Todo');
        const name = inputElement.value;
        
        todoList.push(name)
        console.log(todoList);

        inputElement.value = '';

        renderTodoList();
    };


    const buttonFeature = () => {
        document.addEventListener()
        .innerHTML()
    };

    Addbutton () = {
        //var from queryselector = var.innerHTML
        
    }
// const addTodo = document.querySelector('.AddTodo')
//     .addEventListener('click', () => {
 
//     })
//About work next step: Add EventListerners

//searchbar, responsive menu, loop for whislist (sth like todolist)

// make popup callendar(when arrive)
// sticky popup contact icon (right side)

// Eventlistener in the links

const mobileNav = document.querySelector(".nav-ham")
const burgerBtn = document.querySelector(".burger")

burgerbtn.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
})