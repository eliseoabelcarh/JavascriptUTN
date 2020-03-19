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

    static createRowOfTable(word0, word1, word2){
        
        var fila1= document.createElement("tr");

        var titleCont = document.createElement("td");
        titleCont.innerHTML =  word0 ;

        var f1 = document.createElement("td");
        f1.innerHTML = word1;
        var f2 = document.createElement("td");
        f2.innerHTML = word2;

        fila1.appendChild(titleCont)
        fila1.appendChild(f1);
        fila1.appendChild(f2);
        

        return fila1;

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
        

        var table = document.createElement("table");

        var rowPlates = SingleOrder.createRowOfTable( "<strong>Platos:</strong>" ,plate1 , plate2);
        table.appendChild(rowPlates)
        
        
        //div.innerHTML = "ss" + table + "</br>"

        if(drink1){
            var rowDrink = SingleOrder.createRowOfTable("<strong>Bebida:</strong>", drink1.name , "");
            table.appendChild(rowDrink)
            priceTotal += drink1.price
        }

        if(checkbox101 || checkbox102){
            var checkBoxText101 = "";
            var checkBoxText102 = "";

            if(checkbox101){
                var checkbox101Elem = document.getElementById("checkbox101")
                checkBoxText101 = checkbox101Elem.labels[0].outerText
                
            }
            if(checkbox102){
                var checkbox102Elem = document.getElementById("checkbox102")
                checkBoxText102 = checkbox102Elem.labels[0].outerText
                
            }

            var rowAddit = SingleOrder.createRowOfTable("<strong>Additionals:</strong>" , checkBoxText101, checkBoxText102);
            table.appendChild(rowAddit)
        }

        





        if(checkbox1 || checkbox2 || checkbox3){

            var checkBoxText1 = "";
            var checkBoxText2 = "";
            var checkBoxText3 = "";

            if(checkbox1){
                var checkbox1Elem = document.getElementById("checkbox1")
                checkBoxText1 = checkbox1Elem.labels[0].outerText
    
                //div.innerHTML += checkBoxText1 + "</br>"
                
            }
            if(checkbox2){
                var checkbox2Elem = document.getElementById("checkbox2")
                checkBoxText2 = checkbox2Elem.labels[0].outerText
                //div.innerHTML += checkBoxText2 + "</br>"
            }
            if(checkbox3){
                var checkbox3Elem = document.getElementById("checkbox3")
                checkBoxText3 = checkbox3Elem.labels[0].outerText
                //div.innerHTML += checkBoxText3 + "</br>"
            }

            var rowSauces = SingleOrder.createRowOfTable(checkBoxText1, checkBoxText2 , checkBoxText3);
            table.appendChild(rowSauces)

        }

        

        var rowPrice= SingleOrder.createRowOfTable("","<strong>Precio:</strong>" ,"<strong>"+ priceTotal+"</strong>");
        table.appendChild(rowPrice)
        //div.innerHTML += "Precio: " + priceTotal + "</br>";
       
        div.appendChild(table)

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