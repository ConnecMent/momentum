function add(a: number, b: number) {
  return a + b;
}

function flipACoin() {
  const random: number = Math.random();
  if (random > 0.5) {
    return "tail" as const;
  } else {
    return "head";
  }
}

function concat(stringA: string, stringB: string) {
  return stringA.concat(stringB);
}

function power2(x: number) {
  return 2 ** x;
}

function getUser(
  firstName: string,
  lastName: string
) {
  const capitalizedFirstName = firstName.replace(
    firstName.charAt(0),
    firstName.charAt(0).toUpperCase()
  );
  const capitalizedLastName = lastName.replace(
    lastName.charAt(0),
    lastName.charAt(0).toUpperCase()
  );
  return { firstName: capitalizedFirstName, lastName: capitalizedLastName };
}

function greet(name: string) {
  console.log(`Hi ${name}, nice to meet you!`);
}

function getNRandomNumbers(
  n: number,
  min = 0,
  max = 1000
) {
  let randomNumbers: number[] = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.random() * (max - min) + min);
  }
  return randomNumbers;
}

function logCurrentTime(x: number, n: number) {
  let counter = 0;
  const intervalId = setInterval(() => {
    console.log("Time: " + new Date());
    counter++;
    if (counter === Math.floor(n / x)) {
      clearInterval(intervalId);
    }
  }, x * 1000);
}

function callFuncNTimes(func: Function, n: number, ...funcParams: any[]) {
  for (let i = 0; i < n; i++) {
    func(...funcParams);
  }
}

function isNil(param: any) {
  return !param;
}

function callPropInObj(obj: object, propertyName: string) {
  obj?.[propertyName]?.();
}

function isGmail(email: string) {
  return email.endsWith("@isGmail.com");
}

function duplicateArray() {
  let fruits: string[] = ["Apple", "Orange", "Strawberry"];
  fruits = fruits.concat(fruits);
  return fruits;
}
