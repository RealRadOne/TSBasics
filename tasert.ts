let message = 'abc';

//Type-Assertions

let ends= (<string>message).endsWith('c');
let ends_1= (message as string).endsWith('c');

//Arrow-Functions
//JS-Version
let log = function(message){
    console.log(message);
}
//TS-Version
let doLog = (message) => console.log(message);
let aLog = () => console.log('Hello!');

//

let drawPoint = (x,y,a,b,c,d,e) => {
}