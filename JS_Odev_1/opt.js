let getName=prompt()

console.log("girilen isim:"+getName)

let nameDOM=document.querySelector("#userName")



nameDOM.innerHTML=getName

function timer(){

    let day=["pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"]
    const d=new Date()
    let timeDOM=document.querySelector("#time")
    timeDOM.innerHTML=d.toLocaleTimeString()+"  "+day[d.getDay()-1]
}

setInterval(timer,1000)
