// Selectors
let form = document.querySelector('.form')
let input = document.querySelector('.input')
let submit = document.querySelector('.submit')
let select = document.querySelector('.select')
let list = document.querySelector('.list')

input.focus()
// Data
let dateItem = document.querySelector('.data')
let hoursEl = document.querySelector('.hours')
let minutesEl = document.querySelector('.minutes')
setInterval(() => {
    let time = new Date()
    let hours =time.getHours()
    let minutes =time.getMinutes()
    hoursEl.textContent = hours
    minutesEl.textContent = minutes
}, 100)

// Form
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let inputValue = input.value.trim()
    if(inputValue){
        let li = document.createElement('li')
        li.classList.add('list-item')
        list.appendChild(li)
        let textDiv = document.createElement('div')
        textDiv.classList.add('item-text')
        textDiv.textContent = inputValue
        li.appendChild(textDiv)
        let buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('buttons-div')
        li.appendChild(buttonsDiv)
        // DoneBtn
        let doneBtn = document.createElement('button')
        doneBtn.classList.add('done-btn')
        doneBtn.innerHTML = `DONE <span><i class="fa-solid fa-circle-check"></i></span>`
        buttonsDiv.appendChild(doneBtn)
        // DeleteBtn
        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.innerHTML = `DEL <span><i class="fa-solid fa-trash-can"></i></span>`
        buttonsDiv.appendChild(deleteBtn)
    }else{
        alert('error')
    }
    input.value = ""    
})

// Delete Event
document.addEventListener('click', (e)=>{
    if(e.target.classList[0] == 'delete-btn'){
        let buttonDelete = e.target.parentElement.parentElement
        buttonDelete.remove()
    }
})

// Done Event
document.addEventListener('click', (e)=>{
    if(e.target.classList[0] == 'done-btn'){
        let buttonDone = e.target.parentElement.parentElement
        buttonDone.classList.toggle('done-lists')
    }
})