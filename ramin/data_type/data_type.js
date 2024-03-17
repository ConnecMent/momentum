//number

const num1 = 10;
const num2 = 10.5;
const num3 = 5/0;
const num4 = -5/0;
const num5 =  3e5;
const num6 = 16546453531641654694964894949498978984n;
const num7 = "abc"/3;

//string

const s1 = "salam 1";
const s2 = 'salam 2';
const s3 = `salam 3 ${5}`;

//// M A P

const map = new Map();

// add element;
map.set("ramin",123);
map.set("ali",456);
map.set("reza",789);

// iterate from a map
for(let [key,value] of map){
    console.log(key,"'s phone muber","-->",value);
}

//access element
console.log(map.get("ramin"));

//size 
console.log(map.size);

//remive element
map.delete("ali");
console.log(map.size);

//is exist ?
console.log(map.has("ahmad"));

//tree method to iterate
//_1
for(let key of map.keys()){
    console.log(key);
}

//_2
for(let value of map.values()){
    console.log(value);
}

//_3
for(let all of map.entries()){
    console.log(all[0],"--",all[1]);
}

//remove all element
map.clear();
console.log(map.size);

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
// 1- cant't iterate from a weak set
// 2- WeakSet does not have size property
// 3- WeakSet does not have clear, keys, values, entries, forEach methods.

let obj1 = {}

const weakset = new WeakSet();
weakset.add(obj1);
console.log(weakset.has(obj1));
weakset.delete(obj1);


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

function myIntersection(s1,s2){
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



////////////////////////////////////////
const set1 = new Set([1, 3, 5, 7, 9]);
const set2 = new Set([1, 4, 9]);
console.log(set1.intersection(set2));


const set3 = new Set([1, 3, 5, 7, 9]);
const set4 = new Set([1, 3, 9]);
console.log(set3.difference(set4));

console.log(set3.isSubsetOf(set4));
console.log(set3.isSupersetOf(set4));
//////////////////////////////////////



// let x = new Set([1,2,3]); 
// let y = new Set([4,5]);

// let z = diffrent(x,y);

// console.log(z.values());
