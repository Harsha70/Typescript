// class User {
//     name: string;
//     readonly email: string;
//     lastName?: string;
  
//     constructor(name: string, email: string, lastName?: string) {
//       this.name = name;
//       this.email = email;
//       this.lastName = lastName;
//     }
  
//     greet() {
//       return `Hello ${this.name}`;
//     }
//   }

// class Admin extends User {
//     isAdmin:boolean=true
//     usersReporting: number;
    
//     constructor(name: string, email: string, usersReporting: number, lastName?: string){
//         super(name, email, lastName)
//         this.usersReporting = usersReporting
//     }
// }

// const user: User = new User("Mark", "Mark@email.com");
// const admin: Admin = new Admin("John", "John@email.com", 123);

// console.log(user);
// console.log(admin);
// ------------------------- Inheritance example
// class Book {
//     title:string
//     author:string
//     yearPublished?:number
//     readonly ISBN:string

//     constructor(title: string, author:string, ISBN:string, yearPublished?:number){
//         this.title = title;
//         this.ISBN = ISBN;
//         this.author = author
//         if (yearPublished) {
//             this.yearPublished = yearPublished;
//         }
//     }
// }

// const firstBook = new Book("The Great Gatsby", "Harsha", '2012342349', 1234)
// console.log(firstBook)

// function logBookDetails(book: Book): void {
//     console.log(`Title: ${book.title}`)
//     console.log(`Author: ${book.author}`)
//     console.log(`ISBN: ${book.ISBN}`)
//     console.log(`Title: ${book.title}`)
//     if (book.yearPublished) {
//         console.log(`Year Published: ${book.yearPublished}`);
//     }
// }

// logBookDetails(firstBook)


// class Ebook extends Book {
//     filesize: number;
//     format: string;

//     constructor(title: string, author:string, ISBN:string, 
//         filesize: number, format: string, yearPublished?:number){
//         super(title, author, ISBN, yearPublished)
//         this.filesize = filesize
//         this.format = format

//     }
// }

// const firstEBook = new Ebook("The Great Gatsby", "Harsha", '2012342349', 2, 'PDF', 1234)

// logBookDetails(firstEBook)

// ----------------------- Access modifiers public, private, protected

// class User {
//     // Convert name to public
//     public name: string;
//     readonly email: string;
//     // If an access modifier is not mentioned the default remains public
//     lastName?: string;
  
//     constructor(name: string, email: string, lastName?: string) {
//       this.name = name;
//       this.email = email;
//       this.lastName = lastName;
//     }
  
//     greet() {
//       return `Hello ${this.name}`;
//     }
//   }
  

//   class Admin extends User {
//     isAdmin: boolean = true;
//     usersReporting: number;
  
//     constructor(name: string, email: string, usersReporting: number, lastName?: string) {
//       super(name, email, lastName);
//       this.usersReporting = usersReporting;
//     }
  
//     // Public properties are accessible inside the child classes also
//     // even methods can have access modifiers not just the properties
//     public printName() {
//       console.log(this.name);
//     }
//   }
  
//   const user: User = new User("Mark", "Mark@email.com");
//   const admin: Admin = new Admin("John", "John@email.com", 11);
  
//   // These properties were assigned a value and these can be seen in the console
//   // Changing the properties below changes the values as these are public properties
//   user.name = "Alice";
//   admin.lastName = "Doe";
  
//   console.log(user);
//   console.log(admin);
  
//   // Since the printname method is public it can be accessed from the object itself
//   // or outside the class
//   admin.printName();



// ---------------------------------- override method in child class

// ---------------------------------- Shorthand for constructors

// class User {
//     constructor(
//       public name: string,
//       readonly email: string,
//       private phone: number,
//       public lastName?: string
//     ) {}
  
//     greet(): string {
//       return `Hello ${this.name}`;
//     }
//   }
  
//   class Admin extends User {
//     public isAdmin: boolean = true;
  
//     constructor(
//       name: string,
//       email: string,
//       phone: number,
//       public usersReporting: number,
//       lastName?: string
//     ) {
//       super(name, email, phone, lastName);
//       this.usersReporting = usersReporting;
//     }
  
//     // A greet methods can override the parent class method
//     // but the condition is that the child class methods must have the same signature
//     greet(): string {
//       return `Hello ${this.name}! I am the admin.`;
//     }
//   }
  
//   // Create users with phone numbers now
//   const user: User = new User("Mark", "Mark@email.com", 123456);
//   const admin: Admin = new Admin("John", "John@email.com", 123456, 11);
  
//   // Greet methods on both objects would return a different greeting
//   console.log(user.greet());
//   console.log(admin.greet());


// --------------------------------- More control over class

// class Person{
//     public fullname: string
//     constructor(
//         public firseName: string,
//         public lastName: string,
//         public age: number
//     ){
//         if(age>200 || age<0){
//             throw new Error("The age must be written with in the age range 0-200")
//         }
//         this.fullname = `${this.firseName} ${this.lastName}`
//     }

// }

// const john: Person = new Person("John", "Doe", 45)
// const mark: Person = new Person("Mark", "Doe", 43)


//------------------------------- using mutators - setters and accessors - getter

// class Person {
//     // This _age property is for the internal use of the class and not exposed to outside world
//     private _age?: number;
  
//     constructor(public firstname: string, public lastname: string) {}
  
//     // I need a better way to set the age of the person
//     // The logic needs to be encapsulated inside a method separate from constructor
//     public set age(age: number) {
//       if (age > 200 || age < 0) {
//         throw new Error("The age must be within range of 0-200");
//       }
//       this._age = age;
//     }
  
//     public get age() {
//       if (this._age === undefined) {
//         throw new Error("The age property has not been set as yet");
//       }
//       return this._age;
//     }
  
//     public get fullname() {
//       return `${this.firstname} ${this.lastname}`;
//     }
//   }
  
//   const john: Person = new Person("John", "Doe");
//   const mark: Person = new Person("Mark", "Doe");
  
//   john.age = 50;
//   mark.age = 30;
  
//   // We can access the age like a property even though there is a method behind the scenes
//   // that is working to fetch the age for us using one of the private properties of a class
//   console.log(john.age);
//   console.log(mark.age);
  
//   // Now full name can be access on a class as if if was the property of the class
//   console.log(john.fullname);
//   console.log(john._age)
  
// ================================ generics with class

// type Identifiable = {
//     id:number
// }

// class Repository<T extends Identifiable> {
//     private item: T[] = []

//     add(item: T){
//         this.item.push(item)
//     }

//     getByid(id:number):T | undefined{
//         return this.item.find((item)=>item.id === id)
//     }

//     getAll(): T[]{
//         return this.item
//     }

//     removebyId(id: number): void{
//         this.item = this.item.filter((item)=> item.id !== item.id)
//     }
// }

// type User = Identifiable & {
//     name: string;
//     email:string;
// }

// type Book = Identifiable & {
//     title: string;
//     ISBN: number
// }



// const usersRepository = new Repository<User>()
// const booksRepository = new Repository<Book>()
// usersRepository.add({
//     id:1,
//     name: "john",
//     email: "john@e.com"
// })

// booksRepository.add({
//     id:1,
//     title: "john",
//     ISBN: 123
// })
// console.log(usersRepository.getByid(1))
// console.log(booksRepository.getByid(1))



//------------------------ Mixins

// function TimeStamp(Base: any){
//     return class extends Base {
//         protected timestamp: Date = new Date();

//         getTimestamp(){
//             return this.timestamp
//         }
//     };
// }

// class User {
//     constructor(public name: string){}
// }

// --------------------------

class Employee {
    static companyName: string = "Tech Solutions Inc."; // Static member

    constructor(
        public name: string,
        public age: number,
        private _salary: number,
        protected id: number
    ){}
    
    get salary():number{
        return this._salary
    }

    set salary(newSalary: number){
        if(newSalary>0){
            this._salary=newSalary
        }
        else{
            throw new Error("Salary > 0")
        }
    }

    public static getCompanyName():string{
        return this.companyName
    }

    public getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this._salary}`
    }

}

class Manager extends Employee{
    constructor(
        name: string,
        age: number,
        salary: number,
        id: number,
        public department: string
    ){
        super(name, age, salary, id)
    }

    public getDetails():string{
        return `${super.getDetails()}, department: ${this.department}`
    }
}

const emp = new Employee("Harsha", 20, 50000, 1)
console.log(emp.getDetails())

const manager = new Manager("Bob", 40, 80000, 2, "Engineering")
console.log(manager.getDetails())






