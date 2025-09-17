function loggedMethod(originalMethod: any, _context: any) {

  function replacementMethod(this: any, ...args: any[]) {
      console.log("LOG: Entering method.")
      const result = originalMethod.call(this, ...args);
      console.log("LOG: Exiting method.")
      return result;
  }

  return replacementMethod;
}

class Person {
  name: string;
  constructor(name: string) {
      this.name = name;
  }

  @loggedMethod
  greet() {
      console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person("Ron");
p.greet();

// Output:
//
//   LOG: Entering method.
//   Hello, my name is Ron.
//   LOG: Exiting method.

// ----------------------------
// function loggedMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
  
//   descriptor.value = function(this: any, ...args: any[]) {
//     console.log(`LOG: Entering method ${propertyKey}.`);
//     const result = originalMethod.call(this, ...args);
//     console.log(`LOG: Exiting method ${propertyKey}.`);
//     return result;
//   };
  
//   return descriptor;
// }

// class Person {
//   name: string;
  
//   constructor(name: string) {
//     this.name = name;
//   }

//   @loggedMethod
//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }

// const p = new Person("Rojn");
// p.greet();

// // Output:
// //
// //   LOG: Entering method greet.
// //   Hello, my name is Ron.
// //   LOG: Exiting method greet.