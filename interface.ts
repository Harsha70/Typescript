// interface User {
//     userName: string;
//     email: string;
//     login(): void;
// }

// class Admin implements User {
//     constructor(public userName: string, public email: string, public adminLevel: number){}
//     login():void{
//         console.log("Admin is now logged in")
//     }
// }

// class Customer implements User{
//     constructor(public userName: string, public email: string){}
//     login(): void{
//         console.log("Customer is now logged in")
//     }
// }

// class Auth{
//     public static login(user: User){
//         user.login()
//     }
// }

// const admin: Admin = new Admin("Harsha", "harsha@gmail.com", 1)

// const customer: Customer = new Customer("John", "john@gmail.com")

// Auth.login(admin)
// Auth.login(customer)


// -----------------------

interface User{
    name: string;
    email: string;
    phone: number;
    gender: string;
}

interface UserWithAddress extends User{
    address: string
}

const user1: User = {
    name: "Harsha",
    email: "harsha@gmail.com",
    phone: 123432344,
    gender: "male"
}

const userWithAddress: UserWithAddress = {
    name: "Harsha",
    email: "harsha@gmail.com",
    phone: 123432344,
    gender: "male",
    address: "this is an address"
}


enum Roles{
    admin = "admin",
    author = "author",
    editor = "editor",
}

interface Role{
    role: Roles
}

enum PermissionsList{
    read = "read",
    write = "write",
    execute = "execute"
}

interface UserPermissions{
    permissions: PermissionsList[];
}

interface AdminUser extends User, Role, UserPermissions{
    numberOfUsersReporting: number
}

const rob: AdminUser = {
    name: "rob",
    email: "rob@email.com",
    phone: 99876787,
    gender: "male",
    role: Roles.admin,
    permissions: [
      PermissionsList.read,
      PermissionsList.write,
      PermissionsList.execute,
    ],
    numberOfUsersReporting: 5,
  };
  
console.log(user);
console.log(userWithAddress);
console.log(rob);

// =============================================

interface Automobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
}

enum AutomobileTypes {
    car= "car",
    bus="bus",
    van="van",
    trunk="trunk",
    bike="bike"
}

enum AutomobileBrands{
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota= "toyota",
}

enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
  }
  
const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black,AutomobileColors.red],
    description: " This is a Ferrari "
}

const honda: Automobile<string, string, string> = {
    type: "car",
    brand: "Honda",
    colors: ["silver", "black"],
    description: " This is a Honda "
}

const toyota: Automobile<string, AutomobileBrands, number> = {
    type: "toyota",
    brand: AutomobileBrands.toyota,
    colors: [1,2],
    description: " This is a Toyota "
}

// console.log(ferrari, honda, toyota)

// -----------------------------------------

class Cars implements Automobile<string, AutomobileBrands, AutomobileColors>{
    public type:string = "Car"
    constructor(public brand:AutomobileBrands, public colors: AutomobileColors[], 
        public description: string){}
}

class Truck implements Automobile<string, AutomobileBrands, AutomobileColors>{
    public type:string = "Truck"
    constructor(public brand:AutomobileBrands, public colors: AutomobileColors[], 
        public description: string){}
}


const ferrariclass: Cars = new Cars(
    AutomobileBrands.ferrari, 
    [AutomobileColors.red, AutomobileColors.black],
    "This is a Ferrari"
    );

const toyotatrucklass: Truck = new Truck(
    AutomobileBrands.toyota, 
    [AutomobileColors.red, AutomobileColors.black],
    "This is a Toyota"
    );
// console.log(ferrariclass, toyotatrucklass)

// ---------------------------------- implementing multiple interfaces
interface CommercialVehical{
    capacity: string;
    licenseRenewalDate: Date;
}

class Trucks implements Automobile<string, AutomobileBrands, AutomobileColors>, CommercialVehical {
    public type: string = "truck"
    constructor(public brand:AutomobileBrands, 
        public colors: AutomobileColors[], 
        public description: string, 
        public capacity: string, 
        public licenseRenewalDate: Date){}
}

const toyotatruck: Trucks = new Trucks(
    AutomobileBrands.toyota, 
    [AutomobileColors.red, AutomobileColors.black],
    "This is a Toyota",
    "15 tonnes",
    new Date()
    );

console.log(toyotatruck)

// ------------------------------------------- declaration merging in interface
interface IUser {
    id: number;
    name: string;
}

interface IUser {
    passwordhash:string
}

class Users implements IUser{
    constructor(public id:number, public name: string, public passwordhash: string){}
}

// -------------------------------------------------- types VS interfaces
type Usertype = {
    name: string;
};

type AdminUsertype = {
    isAdmin: boolean;
}

// intersection
const userAndadmin: Usertype & AdminUsertype = {
    name: "John",
    isAdmin: true
}

// Union type

const userOrAdmin: Usertype | AdminUsertype = {
    name: "Mark"
}

// Tuples

type ResponseTuple = [string, number];

// types can not have same typename but can in interface
// ----------------------------------------- abstract class vs interface
//  abstract class methods automatically available in child class because we extends
// in interface will have call signature and must implement in class

// classes can implement multiple interfaces but can only inheret one parent class

// abstract classes can have static method buit interface cannot have a static





