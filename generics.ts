//  First declare a generics function signature
type GetFirstElement = <T>(arr: T[]) => T | undefined;
// A generic array function that gets first element of every type of array
const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};

// We declare two different tyopes of array
const numberArray = [1, 2, 3];
const stringArray = ["a", "b", "c"];

// Typescript is correctly able to infer the value that will be return by expression
// Even though the function is the same the returned type is different based on the input value
let stringOutput = getFirstElement(stringArray);
let numberOutput = getFirstElement(numberArray);

// Where do declare generic dictates when typescript will binc a concrete type to a generic
// what if the above function was declared with a different placement of generic
type FirstElement<T> = (arr: T[]) => T | undefined;

// Here if the generic type is not passed at the time of function declaration TS will throw and error
// So now you need to tell TypeScript which types can we used with this fucntion which solves a completely different purpose from the function that has been declared above
// Hover over the function param and you will see that TS now identifies that param will be an
// array of strings
const firstElement: FirstElement<string> = (arr) => {
  return arr[0];
};

// Generics can have constraints as well
type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

// Any array like value that has a length property on it will be accepted as an argument
logLength(numberArray);
logLength(stringArray);
logLength("Any String");

// But if used for an object it will throw an error
logLength({ name: "John", length: 12 });



// ---------------------------------------------------------

type KeyValuePair<K, V> = {
    key: K;
    value: V
}

const stringNumberPair: KeyValuePair<string, number> = {
    key:"age",
    value: 30
};

const numberBooleanPair: KeyValuePair<number, boolean> = {
    key: 1,
    value: true,
  };
  
console.log(stringNumberPair); // Output: { key: 'age', value: 30 }
console.log(numberBooleanPair); // Output: { key: 1, value: true }
  
type HasId = {
    id: number;
};

function printId<T extends HasId>(obj: T): void {
    console.log(obj.id)
}

const user = {
    id: 1,
    name: "Alice",
  };
  
printId(user); 

const product = {
    id: 101,
    name: "Laptop",
  };
  
  printId(product);


// -------------------------------------------------------------

type Events = {
    id: number;
    date: Date;
    type: "indoor" | "outdoor"
}


type UnionOfKeysOfEvents = keyof Events; //id | data | type

let idOfEvent: UnionOfKeysOfEvents = 'id'

let dateOfEvents: UnionOfKeysOfEvents = 'date'

type Numeric = {
    [key: number]: string
}

type NumericKeyof = keyof Numeric;

type NumberAndString = {
    [key: string]: string;
};

type NumberAndStringKeyOf = keyof NumberAndString

let stringObject:NumberAndString = {
    0:"first",
    second: "second"
}

console.log(stringObject['0'])

type Person = {
    name: string;
    age: string;
    address:string;
}

type PartialPerson = {
    [k in keyof Person]?:Person[k] | null
}

let partial:PartialPerson = {
    name: "Harsha"
}
// ------------------------------------

async function fetchData<T = any>(url:string):Promise<T> {
    const response = await fetch(url);
    const data = await response.json()
    return data;
}

async function fetchDefault(){
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1')
    // console.log(data);
}

fetchDefault();

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPost(){
    const data = await fetchData<Post>('https://jsonplaceholder.typicode.com/posts/1')
    // console.log(data);
}

fetchPost()

// ----------------------------- polymorphic functions for function overload

const filter = (array: any[], predicate: Function) => {
    let result: any[] = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  };
  
  let numbers = [1, 3, 4, 6, 9, 7, 10, 12];
  // Predicate to filter all numbers greater than 7
  function predicate(item: number) {
    return item > 7;
  }
  
  let animals = ["cat", "bat", "rat", "mat"];
  // Predicate to filter all cats from animals array
  function filterCats(item: string) {
    return item === "cat";
  }
  
  // Result of invoking the function
  console.log(filter(numbers, predicate));
  console.log(filter(animals, filterCats));

// ----------------------------------------- generics instead of function overloading
// Trying to create a simple implementation of JavaScript's own filter method
// const filter2 = <T>(array: T[], predicate: (item: T ) => boolean): T[] => {
//     let result: any[] = [];
//     for (let i = 0; i < array.length; i++) {
//       let item = array[i]
//       if (predicate(item)) {
//         result.push(item);
//       }
//     }
//     return result;
//   };
  
//   let numbers2 = [1, 3, 4, 6, 9, 7, 10, 12];
//   // Predicate to filter all numbers greater than 7
//   function predicate2(item: number) {
//     return item > 7;
//   }
  
//   let animals2 = ["cat", "bat", "rat", "mat"];
//   // Predicate to filter all cats from animals array
//   function filterCats2(item: string) {
//     return item === "cat";
//   }
  
//   // Result of invoking the function
//   console.log(filter2(numbers, predicate2));
//   console.log(filter2(animals, filterCats2));


// ----------------------------------------- generics instead of function overloading

const map = <T, U>(array: T[], func:(item:T)=>U):(U|T)[] => {
    if(array.length ===0){
        return [];
    }

    let result: U[] = [];
    for(let i = 0; i< array.length; i++){
        result.push(func(array[i]!));
    }

    return result;

}

let number = [1,2,3,4,5]
const converted = map(number, (num)=>num.toString())
console.log(converted)



