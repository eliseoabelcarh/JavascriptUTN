class SingleOrder{

    constructor(_oneOrder){

        

        this.dishBase1 = _oneOrder.dishBase1;
        this.dishBase2 = _oneOrder.dishBase2;
        this.checkbox1 = _oneOrder.checkbox1;
        this.checkbox2 = _oneOrder.checkbox2;
        this.checkbox3 = _oneOrder.checkbox3;
        this.checkbox101 = _oneOrder.checkbox101;
        this.checkbox102 = _oneOrder.checkbox102;
        this.drink = _oneOrder.drink;

       
    }


    createDiv(){
        var ordersContainer = document.getElementById("ordersContainer");


        var cont = ordersContainer.childElementCount
        cont++;

        var orderName = "order" + cont
        
        localStorage.setItem(orderName.normalize() ,JSON.stringify(this));

        var div = document.createElement("div")
        div.className= "orderCss"

        var plate1 = this.dishBase1.plate.name
        var plate2 = this.dishBase2.plate.name
        var checkbox1 = this.checkbox1
        var checkbox2 = this.checkbox2
        var checkbox3 = this.checkbox3
        var checkbox101 = this.checkbox101
        var checkbox102 = this.checkbox102
        var drink1 = this.drink
        var priceTotal = this.dishBase1.plate.price + this.dishBase2.plate.price;
        
        div.innerHTML = plate1 +" + " + plate2 + "</br>"

        if(drink1){
            div.innerHTML += drink1.name + "</br>"
            priceTotal += drink1.price
        }
        if(checkbox1){
            var checkbox1Elem = document.getElementById("checkbox1")
            var checkBoxText = checkbox1Elem.labels[0].outerText
            div.innerHTML += checkBoxText + "</br>"
            
        }
        if(checkbox2){
            var checkbox2Elem = document.getElementById("checkbox2")
            var checkBoxText = checkbox2Elem.labels[0].outerText
            div.innerHTML += checkBoxText + "</br>"
        }
        if(checkbox3){
            var checkbox3Elem = document.getElementById("checkbox3")
            var checkBoxText = checkbox3Elem.labels[0].outerText
            div.innerHTML += checkBoxText + "</br>"
        }
        if(checkbox101){
            var checkbox101Elem = document.getElementById("checkbox101")
            var checkBoxText = checkbox101Elem.labels[0].outerText
            div.innerHTML += checkBoxText + "</br>"
        }
        if(checkbox102){
            var checkbox102Elem = document.getElementById("checkbox102")
            var checkBoxText = checkbox102Elem.labels[0].outerText
            div.innerHTML += checkBoxText + "</br>"
        }


        div.innerHTML += "Precio: " + priceTotal + "</br>";
       

        //creating remove div btn
        var removeBtn = document.createElement("button")
        removeBtn.textContent = "X"
        removeBtn.className="removeBtn"
        removeBtn.addEventListener("click", function(){
            div.parentElement.removeChild(div)        
            localStorage.removeItem(orderName.normalize())
            TotalPrice.updateTotalPrice()
        })


        div.appendChild(removeBtn)



        ordersContainer.appendChild(div)




        


        //remove localStorage previous order
        removeSingleOrderStorage()
        TotalPrice.updateTotalPrice()

    }



}