window.onload = function(){
    
    removeSingleOrderStorage()
    refreshData()
    //Form.valid()

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

//var cont = 0;

var  submitBtnSingleOrder = document.getElementById("buttonAddSingleOrder")
submitBtnSingleOrder.addEventListener("click", addSingleOrder)

var  submitBtnTotalOrder = document.getElementById("buttonAddTotalOrder")
submitBtnTotalOrder.addEventListener("click", addTotalOrder)

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



function addTotalOrder(){

    var ordersContainer = document.getElementById("ordersContainer")
    var datos = Form.valid()

    if(! ordersContainer.childElementCount ){
        alert("debes incluir algún pedido")
    }else if(datos.name == ""){
        alert("debes rellenar campo nombre")
    }
    
    else{
        //sigue acá si existen pedidos
        
        //busco todas las orders si existen en storage

        var objectTotalOrders = {
            name:"",phone:0, table:0,
            order1:{},order2:{},order3:{}, order4:{}, order5:{}, order6:{},order7:{}, order8:{}, order9:{}
        }

        var ordersContainer = document.getElementById("ordersContainer");
        var cont = ordersContainer.childElementCount

        var i = 1;

        while(i<=cont){

            var orderNumber = "order" + i
            var orderSearched = JSON.parse(localStorage.getItem(orderNumber))
            objectTotalOrders[orderNumber.normalize()]=orderSearched

            i++
        }              

        objectTotalOrders.name = datos.name;
        objectTotalOrders.phone = datos.phone;
        objectTotalOrders.table = datos.table;

        console.log(objectTotalOrders)
        //creo un object con toddo el pedido y escribo un html en forma de json

        
        


    }


}








var plate1 = new Plate("Plato1","descripción de plato","images/plate1.png",6.5)
var plate2 = new Plate("Plato2","descripción de plato","images/plate2.png",6.5)
var plate3 = new Plate("Plato3","descripción de plato","images/plate1.png",6.5)
var plate4 = new Plate("Plato4","descripción de plato","images/plate2.png",6.5)
var plate5 = new Plate("Plato5","descripción de plato","images/plate1.png",6.5)
var plate6 = new Plate("Plato6","descripción de plato","images/plate2.png",6.5)
var plate7 = new Plate("Plato7","descripción de plato","images/plate1.png",6.5)
var plate8 = new Plate("Plato8","descripción de plato","images/plate2.png",6.5)
var sauce1 = new Sauce("sauce1", "images/plate1.png");
var sauce2 = new Sauce("sauce2", "images/plate2.png");
var sauce3 = new Sauce("sauce3", "images/plate1.png");
var wonton = new Additional("wontonn", "images/plate1.png");
var chopstick = new Additional("chopstickk" , "images/chopstick.png");
var drinkContainer1 = new DrinkContainer ("drinkk1");
var drink1 = new Drink("drinkicito1" , "images/plate1.png" , 2.5)
var drink2 = new Drink("drinkicito2" , "images/plate2.png" , 3 )
var drink3 = new Drink("drinkicito3" , "images/plate1.png" , 4.5 )




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
    var scrollCont1 = document.getElementById("scrollCont1");
    var scrollCont2 = document.getElementById("scrollCont2");


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
    var listContPlates1 = new ListContPlates(scrollCont1);
    var listColum1 = []
    listColum1.push(plate1, plate2, plate3, plate4, plate5, plate6, plate7, plate8)
    listContPlates1.addListPlates(listColum1)


    //add plates in column 2
    var listContPlates2 = new ListContPlates(scrollCont2);
    var listColum2 = []
    listColum2.push( plate1, plate2, plate3, plate4, plate5, plate6, plate7, plate8)
    listContPlates2.addListPlates(listColum2)

    //adding sauces
    var listSauces = []
    listSauces.push(sauce1, sauce2, sauce3)
    var ListContAdditionals1 = new ListContAdditionals();
    ListContAdditionals1.addAdditionals(listSauces , "sauces" )

    //adding additionals extras  
    var listAdditionals = []
    listAdditionals.push(wonton, chopstick)
    ListContAdditionals1.addAdditionals(listAdditionals , "additionals")

    //adding drinksContainer
    listDrinksContainer =[]
    listDrinksContainer.push(drinkContainer1)

    //adding drinks to listDrinksContainer
    var listDrinks = []
    listDrinks.push(drink1, drink2, drink3)
    ListContAdditionals1.addAdditionals(listDrinksContainer , "drinks" ,listDrinks )


}
