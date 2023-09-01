let string: string = "hello world";

let number: number = 42;

let bool: boolean = true;


let literal = `${string}, ${number}, ${bool}`;

let arr: number[] = [1,2,3,4,5];

type Model = {
	name: string;
	age: number;

}

type Car = {
	name: string;
	age: number;

}

// let fds: Jeu =  {

// name: "jan",
// age: 21,

// }

enum Colors {
	Red,
	Green,
	Blue,
}


const yyy: Colors = Colors.Red;

if(yyy === Colors.Red ){
	console.log("Red");
}

let tup:[string,number] = ["jan",23];

let test: string = "jan";


type CarInformation = Model & Car;


type Extra = Car & {
	turbo: boolean,

}


const arrowFunction = (name: string): string => {
	return name;
}


console.log(arrowFunction("jan"));


let myObject = {} as CarInformation;


