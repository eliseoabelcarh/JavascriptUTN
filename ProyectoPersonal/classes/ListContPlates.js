class ListContPlates {
    constructor(element){
        this.listElement = element;
        this.platesList = []//lista de objetos Plate
        this.dishBaseUno ;
        this.dishBaseDos ;

    }

    getListElement (){
        return this.listElement;
    }
    setListElement(value){
        this.listElement = value;
    }

    static getDishBaseUno (){
        return this.dishBaseUno;
    }
    static setDishBaseUno(value){
        this.dishBaseUno = value;
    }
    getDishBaseDos (){
        return this.dishBaseDos;
    }
    setDishBaseDos(value){
        this.dishBaseDos = value;
    }

    static createListItem(_plate, id){

        const div = document.createElement("div")
        div.className = "contNamePlate"
        div.id = "posic" + id
        div.textContent = _plate.getName();
        
        div.addEventListener("click", function(){
            //console.log(div.id)
                           
                   
                    var arrayPlates = document.getElementsByClassName("contNamePlate")
                    for(var obj of arrayPlates ){
                        
                        //y el parent del div actual es igual al div a borrar
                            if(obj.firstElementChild && ( obj.parentElement == div.parentElement  ) ){
                                obj.firstElementChild.remove()
                                

                            }
                    }

                //mostrar descripcion
                div.appendChild(_plate.createPlateDescription())
                //_plate.setActiveDescription(true)
               


                                    
                    //creo un dishbase con platos default de ambas columnas
                    //var dishElement1= document.getElementById("plate1Container")
                    var dishBase1 = new DishBase( );

                    //var dishElement2= document.getElementById("plate2Container")
                    var dishBase2 = new DishBase( );


                //agrego imagen de plate
                var scrollCont1 = document.getElementById("scrollCont1");
                var scrollCont2 = document.getElementById("scrollCont2");
                
                if(div.parentElement ==scrollCont1 ){ 
                    DishBase.setPlateUno(_plate)
                    dishBase1.cargarPlato(_plate)
                    this.dishBaseUno = dishBase1;
                    //console.log(this.dishBaseUno)
                    localStorage.setItem("dishBase1" ,JSON.stringify(dishBase1) );

                  }
                if(div.parentElement ==scrollCont2 ){ 
                    DishBase.setPlateDos(_plate)
                    dishBase2.cargarPlato(_plate)
                    this.dishBaseDos = dishBase2;
                    //console.log(this.dishBaseDos)
                    localStorage.setItem("dishBase2" ,JSON.stringify(dishBase2) );
                  }  
                 
                
                  
                  SinglePrice.updatePrice()
        }
        )
        
        

        return div;

    }

   
    


    update (){
        //remove exsiting list elements
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);
        }
        var i = 0;
        for(var plate of this.platesList){
            var div = ListContPlates.createListItem(plate, i)
            this.listElement.appendChild(div)
            i++
        }
                      
    }//fin de update



    addPlate(_plate){
        this.platesList.push(_plate)
        this.update()
    }
    
    addListPlates(list){
        
        for ( var item of list){
            this.addPlate(item)
        }

    }

    
    //llamar a todos los div en this.element

   



}