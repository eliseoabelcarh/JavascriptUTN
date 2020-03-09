class ListContAdditionals {

    constructor(){
        
    }


    static createCheckBoxDiv( labelName , id ){
        var div = document.createElement("div")
        var checkName = "checkbox" + id;
        div.innerHTML = '<label for="'+ checkName + '">'+ labelName +'</label><input type="checkbox" name="'+ checkName+ '" id="'+  checkName+ '" />'
        return div;
    }

    addAdditionalSelectChoice(item, id , containerElement , arrayDrinks){
        var labelName = item.getName()
        var div = ListContAdditionals.createSelectChoiceDiv(labelName , id , arrayDrinks);
        document.getElementById(containerElement). appendChild(div)
    }

    addAdditionalCheckBox(item, id , containerElement){
        var name = item.getName()
        var div = ListContAdditionals.createCheckBoxDiv(name, id);
        div.addEventListener("change", function(event){
            if(event.target.checked){
               

                if(containerElement == "sauces" ){
                    
                    

                    if(id == 1){
                        var sauce1= document.getElementById("sauce1");
                        var imageSrc = item.getImage()
                        sauce1.innerHTML='<img class = "sauceImage" src = "' + imageSrc +'">'
                        
                    }
                    if(id == 2){
                        var sauce2= document.getElementById("sauce2");
                        var imageSrc = item.getImage()
                        sauce2.innerHTML='<img class = "sauceImage" src = "' + imageSrc +'">'
                        
                    }
                    if(id == 3){
                        var sauce3= document.getElementById("sauce3");
                        var imageSrc = item.getImage()
                        sauce3.innerHTML='<img class = "sauceImage" src = "' + imageSrc +'">'
                        
                    }

                    

                }
                if(containerElement == "additionals" ){
                    
                    if(id == 101){
                        var wontonCont = document.getElementById("wontonImg");
                        var imageSrc = item.getImage()
                        wontonCont.innerHTML = '<img class = "wontonImage" src = "' + imageSrc +'">'

                    }
                    
                    if(id == 102){
                        var chopstickCont = document.getElementById("chopsticks");
                        var imageSrc = item.getImage()
                        chopstickCont.innerHTML = '<img class = "chopstickImage" src = "' + imageSrc +'">'

                    }
                    

                }
                
               




            }else {
                
                if(containerElement == "sauces"){

                    if(id == 1){
                        var sauce1= document.getElementById("sauce1");
                        sauce1.innerHTML = ""
                    }
                    if(id == 2){
                        var sauce2= document.getElementById("sauce2");
                        sauce2.innerHTML = ""
                    }
                    if(id == 3){
                        var sauce3= document.getElementById("sauce3");
                        sauce3.innerHTML = ""
                    }


                }

                if(containerElement == "additionals" ){
                    
                    if(id == 101){
                        var wontonCont = document.getElementById("wontonImg");
                        wontonCont.innerHTML = ''

                    }
                    
                    if(id == 102){
                        var chopstickCont = document.getElementById("chopsticks");
                        chopstickCont.innerHTML = ''

                    }
                    

                }


            
            }
        
        })
        document.getElementById(containerElement).appendChild(div)
    }

    

    addAdditionals(_array , containerElement , arrayDrinks){
        var i = 1;
        if(containerElement == "sauces" ){
            for(var item of _array){
                this.addAdditionalCheckBox(item, i , containerElement)
                i++
            }
        }
        if(containerElement == "additionals"){
            var i = 101;
            for(var item of _array){
                this.addAdditionalCheckBox(item, i , containerElement)
                i++
            }
        }

        if(containerElement == "drinks"){
            for(var item of _array){
                this.addAdditionalSelectChoice(item, i , containerElement, arrayDrinks)
                i++
            }
        }
        

    }

     static createOptionsForSelectChoice(_array){

        var total= ''

        var i = 1;
        for(var item of _array){
            
            var optionElement = document.createElement("option")
            var itemName = item.getName()
            optionElement.value = itemName;
            optionElement.textContent= itemName;

            
                
            
           
            total +=optionElement.outerHTML
            
        }


        return total;

    }

    static createSelectChoiceDiv(labelName, id , arrayDrinks){
        var div = document.createElement("div");
        var divName = "select-choice"  + id;

        //show image for selected option drink
        div.addEventListener('change', (event) => {
            
            if(event.target.value == "empty"){
                var div = document.getElementById("drinkImage");
                div.innerHTML = ''
                localStorage.removeItem("drinkContainer1")
                SinglePrice.updatePrice()
            }

            var nombreEncontrado = false;
            var i = 0;
            while(!nombreEncontrado && event.target.value != "empty"){
                if(arrayDrinks[i].getName() == event.target.value ){
                    
                    var imageSrc = arrayDrinks[i].getImage()

                    var div = document.getElementById("drinkImage");
                    div.innerHTML = '<img class = "drinkImage" src = "' + imageSrc +'">'

                    var priceDrink = arrayDrinks[i].getPrice()
                    
                    localStorage.setItem("drinkContainer1", JSON.stringify( arrayDrinks[i] ))
                    SinglePrice.updatePrice()
                    nombreEncontrado = true;
                }
            i++;
            }


        });


        var part1 ='<label for="'+ divName+'">'+ labelName + '</label><select name="'+ divName + '" id="'+ divName + '">'
        var part2 = '<option value="empty">Choose please</option>'


        
        var part3 = ListContAdditionals.createOptionsForSelectChoice(arrayDrinks)



        var part4 ='</select>'

        div.innerHTML = part1 + part2 + part3 + part4
        return div;

    }

   

    

}