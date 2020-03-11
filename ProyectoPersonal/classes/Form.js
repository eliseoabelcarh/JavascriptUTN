class Form{
    constructor(){

    }

    static valid(){
        var datos= {
            name:"",phone:0,table:0
        };


        var name = document.getElementById("nameForm");
        var phone = document.getElementById("phoneForm");
        var table = document.getElementById("tableForm");
        
        if(name.value == ""){
            
            name.setCustomValidity("escribe algo")
            
        }else{
            name.setCustomValidity("")
            datos.name = name.value;
            datos.phone = phone.value;
            datos.table = table.value;
            
        }

    
        return datos;
    }
    
}