// You are creating a website for your college. Create a class User with 3 properties, name , city and roll number
// It also has a method called viewData() that allows user to view website data.

class User{
    constructor(username,userRoll,usercity){
        this.username = username;
        this.usercity = usercity;
        this.userRoll = userRoll;
    }

    viewData(username,userRoll,usercity){
        console.log(this.username , this.userRoll , this.usercity);
    }

}

const newUser = new User("Clay jenson","California",256)
newUser.viewData();


// Create a new class called Admin which inherits from User. Add a new method called 
// editData to Admin that allows it to edit website data.

let data = "data";
class Admin extends User{
    constructor(username,usercity,userRoll){
        super(username,usercity,userRoll);
    }

    editData(){
        data = "edited data"
        console.log(data);
    }
}

const ad = new Admin("Jack", "London",523);
console.log(ad);
console.log(ad.editData());

