//Create a function that is capable of generate a random RGB color object

export function generateRandomColor (){ // function name
    let Rgb
    let red;
    let green;
    let blue;

    red =  Math.floor(Math.random() * 256)
    green =  Math.floor(Math.random() * 256)
    blue =  Math.floor(Math.random() * 256)
    
        Rgb = {
        r: red, g: green, b: blue
    }   

    return Rgb
}


//Create a function that is capable of maping an array of numbers into strings

export function filterNegativeNumbers (arr){

    let newArray = arr.filter(element => element >= 0);

    return newArray
     
}




// Create a function that is capable of maping an array of numbers into strings.

export function mapNumbersIntoStrings(arr){
    let newArray = arr.map(element => element.toString());
    
    return newArray
}




// Create a function that is capable of identify if the passed string is a palindrome or not. It should return a boolean.

export function isPalindrome(str){
    return str == str.split('').reverse().join('');
}

//Create a Class in Javascript that represents a person capable of having "name" and "age" as instance variables, and a method
// that prints out the name into the console. (Class and Prototype syntax is allowed)

export class Person{
    
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        printName(){
            return this.age();
        }
    
}



// Create a function that is capable of receiving an instance of the Person Class and print into the console it's age.

export function printOutPersonAge(Person){
    console.log(Person.age);
}



