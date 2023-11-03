
let inputToDo=document.querySelector("#inputToDo")
let addToDo=document.querySelector("#addToDo")
let list=document.querySelector("#list")
let alert=document.querySelector("#alert")
const ALERT=`
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Error</strong> Please enter text
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
//<li class="list-group-item">A list item</li>

addToDo.addEventListener("click",function(event){
    event.preventDefault()
    console.log(inputToDo.value)
    let li=document.createElement("li")
    li.classList.add("list-group-item")
    li.innerHTML=inputToDo
    
    if(inputToDo.value){
        console.log("Veri var")
        li.innerHTML=inputToDo.value
        list.append(li)
    }else{
        console.log("Ver Yok")
        alert.innerHTML=ALERT
    }
    
})

console.log()

