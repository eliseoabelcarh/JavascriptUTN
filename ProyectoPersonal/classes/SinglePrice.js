class SinglePrice {
    constructor(){

    }

    static updatePrice(){


        var priceOrderCont = document.getElementById("singlePrice");

        var priceDish1 = 0;
        var priceDish2 = 0;
        var priceDrink = 0;

        var dish1 = JSON.parse(localStorage.getItem("dishBase1"));
        if(dish1){
            priceDish1 = dish1.plate.price;
        }
        
        

        var dish2 = JSON.parse(localStorage.getItem("dishBase2"));
        if(dish2){
            priceDish2 = dish2.plate.price;
        }
        
        var drink1 = JSON.parse(localStorage.getItem("drinkContainer1"));
        if(drink1){
            priceDrink= drink1.price;
        }

        


       
        var total = priceDish1 + priceDish2 + priceDrink

        priceOrderCont.innerText = total



        return total;

    }

}