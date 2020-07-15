var cars = ['a','b','c','d','e','f','g','h,','i','j'];
console.log(cars)


function ye (argumentOne,argumentTwo){
    argumentOne.push(argumentTwo);
    return argumentOne;
};


console.log(ye(cars,'fast'));

function na (argument){
    argument.splice('a','b','c');
    return argument
};

console.log(na(cars));

function exampleThree(argument){
    var newArray = argument.slice(2,5);
    return newArray
};

console.log(exampleThree(cars))