// app.js file content
// console.log("Hello Word")
//package jacjkson "test": "echo \"Error: no test specified\" && exit 1"//
 

//esta es la funcion que suma dos numeros
function sum(a, b) {
    return a + b;
}
// solo un registro en consola para nosotros
console.log(sum(7,3));

//exporta la funciomn  para usarla en otros archivo
//similar a la palabra clave `export` cuando se usa webpack//

//module.exports = { sum };
module.exports = { sum, fromEuroToDollar };

//one euro is:
let oneEuroIs = {
    "JPY":127.9, //Japan yen
    "USD":1.2,  // Us Dollar
    "GBP":0.8, //British Pound
}

function fromEuroToDollar(Euro){
    return (Euro*oneEuroIs.USD)
}

console.log(fromEuroToDollar(3.5))
//module.exports = { fromEuroToDollar };
//module.exports = { fromEuroToDollar };

function fromDollarToYen(USD){
    return (USD*oneEuroIs.JPY)/oneEuroIs.USD;
}

function fromYenToPound(YEN){
    return (YEN*oneEuroIs.GBP)/oneEuroIs.JPY;
}









