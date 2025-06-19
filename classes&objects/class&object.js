
// An object is a collection of key-value pair

const smartphone = {
    brand1 : "Samsung", 
    brand2 : "Apple",

    bestSmartphone(){
        console.log(`${this.brand1} is the best brand`);
    }
}


smartphone.bestSmartphone() // method
console.log("Car object: ",smartphone);


// A Class is a blueprint used to create objects
// It defines What properties and methods object will have

class topphones{
    constructor(brand,model){
        this.brand = brand
        this.model = model
    }

    bestPhone(){
        console.log(`You have chosen the best smart phone that is ${this.brand} ${this.model} `);
    }
}


// creating an object from a class 

const smartPhone = new topphones("Samsung","S24 Ultra");

smartPhone.bestPhone();