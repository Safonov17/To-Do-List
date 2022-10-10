const inputField = document.querySelector('.input-field textarea')
const todoLists = document.querySelector('.todo-lists')
const pendingNum = document.querySelector('.pending-num')
const clearBtn = document.querySelector('.clear-btn')

function allTasks() {
    let tasks = document.querySelectorAll('.pending')
    pendingNum.textContent = tasks.length === 0 ? 'нет' : tasks.length

    let allLists = document.querySelectorAll('.list')
    if (allLists.length > 0) {
        todoLists.style.marginTop = '20px'
        clearBtn.style.pointerEvents = 'auto'
        return
    }
    todoLists.style.marginTop = '0px'
    clearBtn.style.pointerEvents = 'none'
}

inputField.addEventListener('keyup', (e) => {
    let inputVal = inputField.value.trim()

    if (e.key === 'Enter' && inputVal.length > 0) {
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox">
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`

        todoLists.insertAdjacentHTML('beforeend', liTag)
        inputField.value = ''
        allTasks()
    }
})

function handleStatus(e) {
    const checkbox = e.querySelector('input')
    checkbox.checked = checkbox.checked ? false : true
    e.classList.toggle('pending')
    allTasks()
}

function deleteTask(e) {
    e.parentElement.remove()
    allTasks()
}

clearBtn.addEventListener('click', () => {
    todoLists.innerHTML = ""
    allTasks()
})