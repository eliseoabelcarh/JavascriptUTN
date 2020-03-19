class Plate {

    constructor(_name, _description , _image, _price){
        this.name = _name;
        this.description = _description;
        this.image = _image;
        this.price = _price
        this.selected = false;
    }

    setActiveDescription(value){
        this.activeDescription = value;
    } 

    getActiveDescription(){
        return this.activeDescription;
    }
    getName(){
        return this.name
    }
    setName(_name){
        this.name = _name;
        return this.name;
    }

    getDescription(){
        return this.description
    }
    setDescription(_description){
        this.description = _description;
        return this.description;
    }

    getImage(){
        return this.image
    }
    setImage(_image){
        this.image = _image;
        return this.image;
    }

    getPrice(){
        return this.price

    }

    setPrice(_price){
        this.price = _price;
        return this.price;

    }



    createPlateDescription(){
        var div = document.createElement("div");
        div.className = "contDescriptionPlate"
        div.textContent = this.getDescription();
        
        return div;

    }

    some(div){
        

        var desc = this.createListItemDescription()
        div.appendChild(desc)
 }

  



}