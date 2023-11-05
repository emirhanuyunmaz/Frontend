
const itemRowDOM=document.querySelector("#itemRow")
const itemAll=document.querySelector("#all")
const itemKorea=document.querySelector("#korea")
const itemJapan=document.querySelector("#japan")
const itemChina=document.querySelector("#china")

itemAll.addEventListener("click",all)
itemChina.addEventListener("click",china)
itemKorea.addEventListener("click",korea)
itemJapan.addEventListener("click",japan)


const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];


function itemAdd(name1,price1,img1,exp1,name2,price2,img2,exp2){
    let itemElement=`
    <!-- ITEM - ROW - START -->
                <div class="row mt-4">
                    <!-- ITEM - 1- Start -->
                    <div class="col-5 bg-warning bg-gradient p-2 mx-auto">
                        <div class="row">
                            <div class="col-4">
                                <!-- İMAGES -->
                                <img id="itemImage" class="h-100 w-100" src="${img1}" alt="">
                            </div>
    
                            <div class="col-8">
                                <!-- TEXT -->
                                <div class="row">
                                    <!-- NAME - Price -->
                                    <div class="col-8">
                                        <h5 id="itemName">${name1}</h5>
                                    </div>
    
                                    <div class="col-4">
                                        <p id="itemPrice"> ${price1}</p>
                                    </div>
    
                                </div>
                                <hr style="margin: 0px;">
                                <div class="row">
                                    <!-- DESC -->
                                    <p id="itemExp">${exp1}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ITEM - 1 END  -->
    
                    <!-- ITEM - 2- Start -->
                    <div class="col-5 bg-warning bg-gradient p-2 mx-auto" >
                        <div class="row">
                            <div class="col-4">
                                <!-- İMAGES -->
                                <img id="itemImage" class="h-100 w-100" src="${img2}" alt="">
                            </div>
    
                            <div class="col-8">
                                <!-- TEXT -->
                                <div class="row">
                                    <!-- NAME - Price -->
                                    <div class="col-8">
                                        <h5 id="itemName">${name2}</h5>
                                    </div>
    
                                    <div class="col-4">
                                        <p id="itemPrice"> ${price2}</p>
                                    </div>
    
                                </div>
                                <hr style="margin: 0px;">
                                <div class="row">
                                    <!-- DESC -->
                                    <p id="itemExp">${exp2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ITEM - 2 END  -->
    
                </div>
                <!-- ITEM - ROW - END  -->
    `

    return itemElement
}

function all(){
    for (let i=0;i<menu.length-1;i++){   
        let newItemRow=itemAdd(menu[i].title , menu[i].price , menu[i].img , menu[i].desc ,
                menu[i+1].title , menu[i+1].price , menu[i+1].img , menu[i+1].desc,)
        
        itemRowDOM.innerHTML+=newItemRow

    }
}

function china(){
    itemRowDOM.innerHTML=""

    let china=menu.filter(item => item.category=="China")

    for (let i=0;i<china.length-1;i++){
        let newItemRow=itemAdd(china[i].title , china[i].price , china[i].img , china[i].desc ,
            china[i+1].title , china[i+1].price , china[i+1].img , china[i+1].desc,)

        itemRowDOM.innerHTML+=newItemRow
    }

}

function korea(){
    itemRowDOM.innerHTML=""

    let korea=menu.filter(item => item.category=="Korea")

    for (let i=0;i<korea.length-1;i++){
        let newItemRow=itemAdd(korea[i].title , korea[i].price , korea[i].img , korea[i].desc ,
            korea[i+1].title , korea[i+1].price , korea[i+1].img , korea[i+1].desc,)

        itemRowDOM.innerHTML+=newItemRow
    }

}

function japan(){
    console.log("japan")
    itemRowDOM.innerHTML=""

    let japan=menu.filter(item => item.category=="Japan")

    for (let i=0;i<japan.length-1;i++){

        let newItemRow=itemAdd(japan[i].title , japan[i].price , japan[i].img , japan[i].desc ,
            japan[i+1].title , japan[i+1].price , japan[i+1].img , japan[i+1].desc,)

        itemRowDOM.innerHTML+=newItemRow
    }

}


all()




