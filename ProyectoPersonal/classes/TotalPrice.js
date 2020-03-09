class TotalPrice {
    constructor(){


    }


    static updateTotalPrice(){

        var priceTotalOrders = document.getElementById("totalPrice")

              

        var pricePlate1 = 0;
        var pricePlate2 = 0;
        var priceDrink1 = 0;
        var totalPrice = 0;

        
        var i = 1;
        
        
        while(i<10){

            var orderNro = "order" + i
            
            if(localStorage.getItem(orderNro) != null){
                

                var objOrder = JSON.parse(localStorage.getItem(orderNro))

                if(objOrder.dishBase1.plate.price ){
                    var pricePlate1 = objOrder.dishBase1.plate.price
                    
                }
                if(objOrder.dishBase2.plate.price ){
                    var pricePlate2 = objOrder.dishBase2.plate.price
                    
                }
               
                if(objOrder.drink != null){
                    var priceDrink1 = objOrder.drink.price
                    console.log(priceDrink1)
                }
                
                var subtotalPrice = pricePlate1 +pricePlate2 + priceDrink1
                totalPrice = totalPrice +subtotalPrice;

            }


        i++;
        
        }





        
        priceTotalOrders.innerText = totalPrice



    }

}