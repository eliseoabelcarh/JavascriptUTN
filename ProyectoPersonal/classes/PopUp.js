class PopUp{
    constructor(){

    }

    static showMessage(title, message){
        var popUp = document.getElementById("popUpPadre");
        var contentPopUp = document.getElementById("contentPopUp");
        var closeBtn = document.getElementById("buttonPopUp")

        popUp.style.visibility="visible";
        contentPopUp.innerHTML ="<h2>"+ title + "</h2></br>" + message;
        
        closeBtn.addEventListener("click", function(){
            PopUp.closePopUp()
        })
        popUp.addEventListener("click", function(){
            PopUp.closePopUp()
        })



    }



    static closePopUp(){
        var popUp = document.getElementById("popUpPadre");
        popUp.style.visibility = "hidden"
    }
    



}