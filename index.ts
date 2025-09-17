// // declaration
// type CustomString = string;
// type CustomNumber = number;
// type CustomDate = Date;
// type CustomSymbol = symbol;

// // annotation
// let firstname: CustomString = "Mark";
// let age: CustomNumber = 20;
// let date: CustomDate = new Date();
// let symbol: CustomSymbol = Symbol("id");

// function add(a: number, b: number) {
//   return a + b;
// }

// // inference
// let finalResult = add(1, 2);

// //union types
// type StringOrNumber = string | number;

// function print(input: StringOrNumber) {
//   console.log(input);
// }

// print("Hello");
// print(1);

type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = string extends number ? true : false;

//type casting
let firstname = <any>"Mark";
let lastname = "Doe" as any;

// objects in type
let person = {
  name: "Harsha",
  age: 32,
};

let car: Object = {
  brand: "BMW",
  color: "Black",
};

let newcar: {
  brand: string;
  color: string;
} = {
  brand: "BMW",
  color: "Black",
};

// type alias for objects

type Author = {
  name: string;
  age: number;
  email: string;
  readonly type?: "human" | "ai";
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string;
};

type Awards = {
  [key: string]: AwardsDetails;
};

type AwardsDetails = {
  name: string;
  date: Date;
};

let post: Post = {
  title: "this is the blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 1,
    email: "kdhjbs@gmail.com",
    type: "human",
  },
  awards: {},
};

// Index Signature with Objects
let post2: Post = {
  title: "this is the blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 1,
    email: "kdhjbs@gmail.com",
    type: "ai",
  },
  awards: {
    web: {
      name: "web awards",
      date: new Date(),
    },
    web3: {
      name: "web 3",
      date: new Date(),
    },
  },
};

// Optional and readonly

let post3: Post = {
  title: "this is the blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 1,
    email: "kdhjbs@gmail.com",
  },
  awards: {
    web: {
      name: "web awards",
      date: new Date(),
    },
    web3: {
      name: "web 3",
      date: new Date(),
    },
  },
};

// union types
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogORCatUnion = Dog | Cat;

let dog: DogORCatUnion = {
  name: "",
  barks: true,
  wags: true,
};

let cat: DogORCatUnion = {
  name: "",
  purrs: true,
};

let partialDog: DogORCatUnion = {
  name: "",
  //   barks: true,
  //   wags: true,
  purrs: true,
};

// Discriminating Unions
type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Loading ..";
    case "failed":
      return `Error ${state.code}`;
    case "success":
      return `Downloading ${state.response.title}`;
  }
}

// Intersection types

type Cat2 = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog2 = {
  name: string;
  barks: boolean;
  color: string;
};

type HybridAnbimal = Dog2 & Cat2;

let hyrbidAnimal: HybridAnbimal = {
  name: "",
  color: "",
  purrs: false,
  barks: true,
};

// Arrays and enums
