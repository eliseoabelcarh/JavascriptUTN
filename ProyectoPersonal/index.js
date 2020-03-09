window.onload = function(){
    
    removeSingleOrderStorage()
    refreshData()

    localStorage.removeItem("order1")
    localStorage.removeItem("order2")
    localStorage.removeItem("order3")
    localStorage.removeItem("order4")
    localStorage.removeItem("order5")
    localStorage.removeItem("order6")
    localStorage.removeItem("order7")
    localStorage.removeItem("order8")
    localStorage.removeItem("order8")
    localStorage.removeItem("order9")
}

function removeSingleOrderStorage(){

    localStorage.removeItem("dishBase1")
    localStorage.removeItem("dishBase2")
    localStorage.removeItem("checkbox1")
    localStorage.removeItem("checkbox2")
    localStorage.removeItem("checkbox3")
    localStorage.removeItem("checkbox101")
    localStorage.removeItem("checkbox102")
    localStorage.removeItem("drinkContainer1")
    

    //localStorage.clear()
}

var cont = 0;

var  submitBtnSingleOrder = document.getElementById("buttonAddSingleOrder")

submitBtnSingleOrder.addEventListener("click", addSingleOrder)

function addSingleOrder(event){

    if(localStorage.getItem("dishBase1") == null || localStorage.getItem("dishBase2") == null){
        //mostrar mensaje que diga elegir platos
        alert("elige platos")
        event.preventDefault()
       
    }

    else{
    
    var singleOrder = {
        dishBase1:{},
        dishBase2:{},
        drink:{}
    }

    var dish1 = JSON.parse(localStorage.getItem("dishBase1"));
    var dish2 = JSON.parse(localStorage.getItem("dishBase2"));

    if(dish1 || dish2 ){
        singleOrder.dishBase1 = dish1;
        singleOrder.dishBase2 = dish2;
    }





    var form1inputs = document.getElementById("form1").elements;
    
    for(var input of form1inputs){
        if(input.type == "checkbox"  ){
            var id = input.id
            var elem = document.getElementById(id)
            localStorage.setItem(id , elem.checked )
            singleOrder[id.normalize()] = elem.checked
            
            //var text = elem.labels[0].outerText
        }
        if(input.type == "select-one"  ){
            var id = input.id
            var elem = document.getElementById(id)
            var drinkSelected = JSON.parse(localStorage.getItem("drinkContainer1"))
            singleOrder.drink = drinkSelected;
            
        }

        
        
    }
    
    var order = new SingleOrder(singleOrder)
    order.createDiv()
    
    refreshData()
    return singleOrder

    }
}





var plate1 = new Plate("plato1","desc11111","images/plate1.png",6.5)
var plate2 = new Plate("plato2","desc2222","images/plate2.png",6.5)
var plate3 = new Plate("plato3","desc333","images/plate1.png",6.5)
var plate4 = new Plate("plato4","desc444","images/plate2.png",6.5)
var plate5 = new Plate("plato5","desc5","images/plate1.png",6.5)
var plate6 = new Plate("plato6","desc6","images/plate2.png",6.5)
var plate7 = new Plate("plato7","desc7","images/plate1.png",6.5)
var plate8 = new Plate("plato8","desc8","images/plate2.png",6.5)


function refreshData(){

var imageContPlate1 = document.getElementById("plate1img")
var imageContPlate2 = document.getElementById("plate2img")
var imageContWonton = document.getElementById("wontonImg")
var imageContChopstick = document.getElementById("chopsticks")
var imageContSauce1 = document.getElementById("sauce1")
var imageContSauce2 = document.getElementById("sauce2")
var imageContSauce3 = document.getElementById("sauce3")
var imageContDrink = document.getElementById("drinkImage")
var drinksCont = document.getElementById("drinks")
var additCont = document.getElementById("additionals")
var saucesCont = document.getElementById("sauces")

var singlePriceCont = document.getElementById("singlePrice")
singlePriceCont.innerText = 0

var dataContainers =[]
dataContainers.push(imageContPlate1 , imageContPlate2 ,imageContWonton ,imageContChopstick, imageContSauce1, imageContSauce2 ,imageContSauce3 , drinksCont, additCont, saucesCont, imageContDrink )
for(var container of dataContainers ){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}


//add plates in column 1
var scrollCont1 = document.getElementById("scrollCont1");

var listContPlates1 = new ListContPlates(scrollCont1);
var listColum1 = []
listColum1.push(plate1, plate2, plate3, plate4)
listContPlates1.addListPlates(listColum1)


//add plates in column 2
var scrollCont2 = document.getElementById("scrollCont2");
var listContPlates2 = new ListContPlates(scrollCont2);
var listColum2 = []
listColum2.push( plate5, plate6, plate7, plate8)
listContPlates2.addListPlates(listColum2)

//adding sauces
var sauce1 = new Sauce("sauce1" , "images/plate1.png");
var sauce2 = new Sauce("sauce2", "images/plate2.png");
var sauce3 = new Sauce("sauce3", "images/plate1.png");

var listSauces = []
listSauces.push(sauce1, sauce2, sauce3)

var ListContAdditionals1 = new ListContAdditionals();


ListContAdditionals1.addAdditionals(listSauces , "sauces" )

//adding additionals extras
var wonton = new Additional("wontonn", "images/plate1.png");
var chopstick = new Additional("chopstickk" , "images/chopstick.png");

var listAdditionals = []
listAdditionals.push(wonton, chopstick)



ListContAdditionals1.addAdditionals(listAdditionals , "additionals")

//adding drinksContainer

var drinkContainer1 = new DrinkContainer ("drinkk1");

listDrinksContainer =[]
listDrinksContainer.push(drinkContainer1)

//adding drinks to listDrinksContainer
var drink1 = new Drink("drinkicito1" , "images/plate1.png" , 2.5)
var drink2 = new Drink("drinkicito2" , "images/plate2.png" , 3 )
var drink3 = new Drink("drinkicito3" , "images/plate1.png" , 4.5 )
var listDrinks = []
listDrinks.push(drink1, drink2, drink3)




ListContAdditionals1.addAdditionals(listDrinksContainer , "drinks" ,listDrinks )













}
