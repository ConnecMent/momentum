//number

let num1 = 10;
let num2 = 10.5;
let num3 = 5/0;
let num4 = -5/0;
let num5 =  3e5;
let num6 = 16546453531641654694964894949498978984n;
let num7 = "abc"/3;

//string

let s1 = "salam 1";
let s2 = 'salam 2';
let s3 = `salam 3 ${5}`;

//// M A P

let m1 = new Map();

// add element;
m1.set("ramin",123);
m1.set("ali",456);
m1.set("reza",789);

// iterate from a map
for(let [key,value] of m1){
    console.log(key,"'s phone muber","-->",value);
}

//access element
console.log(m1.get("ramin"));

//size 
console.log(m1.size);

//remive element
m1.delete("ali");
console.log(m1.size);

//is exist ?
console.log(m1.has("ahmad"));

//tree method to iterate
//_1
for(let key of m1.keys()){
    console.log(key);
}

//_2
for(let value of m1.values()){
    console.log(value);
}

//_3
for(let all of m1.entries()){
    console.log(all[0],"--",all[1]);
}

//remove all element
m1.clear();
console.log(m1.size);

// WEAK MAP
///that's like ordinary map but there is some diffrent
// 1 - key must ba an obj
// 2 - cant't iterate from a weak map

let wm = new WeakMap();

let obj = {}

wm.set(obj,"ramin");
wm.get(obj);
wm.has(obj);
wm.delete(obj);

/// S E T

let s = new Set([1,2]);
s.add(5);
console.log(s.has(6));
console.log(s.values());
s.delete(1);
s.clear();

// WEAK SET
///that's like ordinary set but there is some diffrent
// 1 - elements must ba an obj
// 2 - cant't iterate from a weak set

let obj1 = {}

let ws = new WeakSet();
ws.add(obj1);
console.log(ws.has(obj1));
ws.delete(obj1);


///practice 
//implement union and intersection and defrent operation whit set


function union(s1,s2){
    let resultSet = new Set();

    for(let i of s1){
        resultSet.add(i);
    }

    for(let i of s2){
        resultSet.add(i);
    }

    return resultSet;

}

function intersection(s1,s2){
    let res = new Set();

    for(let i of s1){
        if(s2.has(i)){
            res.add(i);
        }
    }

    return res;
}

function diffrent(s1,s2){
    
    let res = new Set(s1);

    for(let i of s2){
        if(s1.has(i)){
            res.delete(i);
        }
    }
    return res;
}

// let x = new Set([1,2,3]); 
// let y = new Set([4,5]);

// let z = diffrent(x,y);

// console.log(z.values());
