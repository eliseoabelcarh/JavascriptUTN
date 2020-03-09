class DishBase {

    constructor( ){
        
        this.plate = new Plate();
        
       
    }

    cargarPlato(plate){
        this.plate = plate;
    }
   
    

    static setPlateUno(plate1){
        var plate1img = document.getElementById("plate1img");
        this.plate1 = plate1;
        plate1img.innerHTML=  "<img class = 'plate1img' src="+  this.plate1.getImage()   + ">";
    }
    static setPlateDos(plate2){
        var plate2img = document.getElementById("plate2img");
        this.plate2 = plate2;
        plate2img.innerHTML=  "<img class = 'plate2img' src="+  this.plate2.getImage()   + ">";
    }


    activeChopstick(){
        this.chopstick = true;
    }
    desactiveChopstick(){
        this.chopstick = false;
    }

    activeSauce1(){
        this.sauce1 = true;
    }
    desactiveSauce1(){
        this.sauce1 = false;
    }

    activeSauce2(){
        this.sauce2 = true;
    }
    desactiveSauce2(){
        this.sauce2 = false;
    }


    activeSauce3(){
        this.sauce3 = true;
    }
    desactiveSauce3(){
        this.sauce3 = false;
    }

    activeWonton(){
        this.wonton = true;
    }
    desactiveWonton(){
        this.wonton = false;
    }

    getPlate1(){
        return this.plate1;
    }


    


}