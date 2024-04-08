//Ts Basic

// variable : 
const personName = "ramin";
const age = 18;
const isStudent = true;


// let temp: any = 10;
// temp = "salam";
// temp = true;


// function
function sum(num1:number,num2:number){
    return num1 + num2;
}

function greeting(name?:string):void{
    console.log(`Hello ${name}`);
}

greeting();
greeting("ramin");


// array
const arr = [1,2,3];
const arr1 = ["ramin","ali","mohammad"];


// tuple
// like a constant array
const user:[string,string,number] = ["ramin","laghaie",1234];


//enum
enum size {small = 5,medium = 10,large = 15};

const tshirtSize:size = size.medium;
console.log(tshirtSize);


// obj

const employee: {
    readonly id:number,
    name:string,
    greet:() => void
} = {
    id:1,
    name:"ramin",

    greet:function(){
        console.log("salaam");
    }
}

employee.greet();