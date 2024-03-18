let array = []

//---------------------------------//

//push : add end
array.push(1);
array.push(2);
array.push(3);

//---------------------------------//
//pop : delete from head
array.pop();

//---------------------------------//
//shift : delete from head
array.shift();

//---------------------------------//
//unshift : add head
array.unshift(0);

array.pop();
array.pop();
array.pop();

array.push(1)
array.push(2)
array.push(3)

//---------------------------------//
//reverse
array.reverse();

const a1  = [1,2,3];
const a2  = a1.toReversed();
console.log(a2);
console.log(a1);


//---------------------------------//
//sort
array.sort();

const s1  = ["a","c","b"];
const s2  = s1.toSorted();
console.log(s1);
console.log(s2);


//---------------------------------//
//slice
// create another array by slicing numbers from index start to end
let test = array.slice(0,2);

//---------------------------------//
//concat
let x = [1,2,3];
let y = [5,6,7];
let z = [8,9];
let res = x.concat(y,z);

//---------------------------------//
/// flat to decode my array in specific depth
// and remove hole in array
let arr = [1,2,[2,4,[5,8,[9,10]]],3,4,5];
arr.flat(2); /// defult=1

//---------------------------------//
///copywithin
let arr1 = [1,2,3,4,5,6]; //target [start,end)
//console.log(arr1.copyWithin(0,2,3));


//---------------------------------//
///every and some 
// every: should all e,ement satisfied the condition
// some : at least one element satisfied a condition
let arr2 = [1,5,8,10,11,15];

function checkEven(i){
    return i % 2 === 0
}
//console.log(arr2.some(checkEven));
//console.log(arr2.every(checkEven));


//---------------------------------//
///reduceright
let arr3 = [1,2,3,4,5,6];

// function that returns sum of two values
function add(current, r_current) {
  return current + r_current;
}
//console.log(arr3.reduceRight(add));