class Drink{
    constructor(_name, _image,  _price){
        this.name = _name;
        this.image = _image;
        this.price = _price;
    }

    getName(){
        return this.name;
    }

    getImage(){
        return this.image;
    }
    getPrice(){
        return this.price;
    }
}