//localStorage.setItem("mm","merhaba dunya")
let list=[]
let counter=0

const buttonSaveDOM=document.querySelector("#buttonSave")
let removeItem
let item
const itemList=document.querySelector("#itemList")
const inputTodo=document.querySelector("#inputTodo")


buttonSaveDOM.addEventListener("click",save)


//item.addEventListener("click",done)

function save(event){
    //ELEMENT
    let element=`
    <li class="todo-item list-group-item d-flex justify-content-between align-items-center btn btn-danger mt-1" id="element-${counter}">
        ${inputTodo.value}
        <span class="item-remove badge bg-warning rounded-pill btn" id="element-remove-${counter}">X</span>
    </li>
    `
    //ELEMENT

    //ADD ELEMENT
    itemList.innerHTML+=element
    //ADD ELEMENT

    list.push({"id":`element-${counter}`,"text":inputTodo.value})
    inputTodo.value=""
    counter++
    console.log(list)
    //ELEMENT SEARCH
    item=document.querySelectorAll(".todo-item")
    item.forEach(i => i.addEventListener("click",done))

    removeItem=document.querySelectorAll(".item-remove")
    removeItem.forEach(i => i.addEventListener("click",remove))

}

function remove(event){
    let id=this.id
    let elementID="#element-"+id[id.length-1]
    let element=document.querySelector(elementID)

    event.preventDefault()
    console.log("remove click")
    element.remove()

}

function done(event){
    let e=document.querySelector(`#${this.id}`)
    console.log(item)
    let r=false
    event.preventDefault()
    e.classList.forEach(element =>{
        if(element=="text-decoration-line-through"){
            r=true
        }
    })

    if(r){
        e.classList.remove("text-decoration-line-through")
    }else{
        e.classList.add("text-decoration-line-through")

    }
    console.log("item click")
}
