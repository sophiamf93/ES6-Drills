let favMovie = (name = 'Tommy Wiseau', movie = "The Room") => console.log(`My name is ${name} and my favorite movie is ${movie}`)

favMovie('Sophia', 'Gangs of New York');

let fullName = 'Sophia Foreman'

let getFirstNameConcise = () => console.log(fullName.split(' ')[0])
getFirstNameConcise();

let math = (x, y) => (
    {
        exponent: x ** y,
        product:x * y
    }
)
let result = math(3, 3);
console.log(`${result.exponent}, ${result.product}`);

let stuff = (name, location, favFood) => console.log(`${name}, ${location}, ${favFood}`);

let array = ['Sophia', 'Birmingham', 'Coq Au Vin'];

stuff(...array);

let sophia = 'Sophia Foreman'

let spread = () => {
    let sophiaArray = [...sophia]
    for (i = 0; i < sophia.length; i++) {
        console.log(sophiaArray[i])
    }
};

spread()