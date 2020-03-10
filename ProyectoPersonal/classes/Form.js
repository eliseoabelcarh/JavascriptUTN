class Form{
    constructor(){

    }

    static valid(){
        var result= false;


        var name = document.getElementById("nameForm");
        
        if(name.value == ""){
            console.log("esta vacío")
            name.setCustomValidity("escribe algo")
        }else{
            name.setCustomValidity("")
            result = true;
        }
        


        return result;
    }
    
}