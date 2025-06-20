// An object is a collection of key-value pair

const smartphone = {
  brand1: "Samsung",
  brand2: "Apple",

  bestSmartphone() {
    console.log(`${this.brand1} is the best brand`);
  },
};

smartphone.bestSmartphone(); // method
console.log("Car object: ", smartphone);

// A Class is a blueprint used to create objects
// It defines What properties and methods object will have

class topphones {
  constructor(brand, model) {
    //this.brand (is a property of the class) = brand is a parameter
    this.brand = brand;
    this.model = model;
  }

  bestPhone() {
    console.log(
      `You have chosen the best smart phone that is ${this.brand} ${this.model} `
    );
  }
}

// creating an object from a class

const smartPhone = new topphones("Samsung", "S24 Ultra");

smartPhone.bestPhone();

// Inheritance in JS

class Parent {
  sleep() {
    console.log("sleeping!");
  }

  eat() {
    console.log("eating!");
  }
}

class child extends Parent {
  homework() {
    console.log("His child doesn't like to do his home work!");
  }
} // inheritance properties form parent class

const son = new child();

console.log(son.sleep());

// super keyword invokes the parent constructor.

class person {
  constructor() {
    console.log("A Person can sleep and eat");
  }
}

class engineer extends person {
  constructor(branch) {
    // for declaration of new constructor the super key word required to declare with parameter.
    super();
    this.branch = branch;
    console.log("Your branch name is : ", branch);
  }
}

const eng = new engineer("Chemical Engineer!");
// console.log(eng);
