// app.js file content
// console.log("Hello Word")

//esta es la funcion que suma dos numeros
function sum(a, b) {
    return a + b;
}
// solo un registro en consola para nosotros
console.log(sum(7,3));

//exporta la funciomn  para usarla en otros archivo
//(similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

