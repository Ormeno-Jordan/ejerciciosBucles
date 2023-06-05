//ejercicio 1//

//let ingresoNumero= prompt("Ingresar numero:");
//for(let i=1; i<=10; i++){
//console.log(`${ingresoNumero} x ${i} = ${i*ingresoNumero}`);
//}

//ejercicio 2//

//let acumulador=[];
//let ingresado;
//do {
//    ingresado=Number(prompt("ingresar número"));
//    acumulador.push(ingresado);
//} while (ingresado!=0);
//console.log(acumulador)

//ejercicio 3//

//let numeroFinal = 5 ;
//let ingresar;
//let intentos = []
//do {
//    ingresar = Number(prompt("Adivinar un número entre 1 y 100"));
//    if(ingresar > numeroFinal){
//    alert("El número es mayor, vuelva a intentarlo.");
//    }if(ingresar < numeroFinal){
//    alert("El número es menor, vuelve a intentarlo.");
//    }else if(ingresar === numeroFinal){
//    alert("¡Felicidades, adivinaste!");
//    }
//    intentos.push(ingresar);
//} while (ingresar != numeroFinal);
//    alert("El número de intentos fué:" + " " + intentos.length);

//ejercicio 4//

//let numero = 100;
//mostrarDivisores(numero);
//
//function mostrarDivisores(numero) {
//    console.log("Los divisores de " + numero + " son:");
//
//    for (let i = 1; i <= numero; i++) {
//      if (numero % i === 0) {
//        console.log(i);
//      }
//    }
//  }

//ejercicio 5//

//const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//
//for (let i = 0; i < array.length; i++) {
//  console.log("Elemento " + (i + 1) + ": " + array[i]);
//}

//ejercicio 6//

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//for (let i = 0; i < numbers.length; i++) {
//  const double = numbers[i] * 2;
//  console.log(double);
//}

//ejercicio 7

//let datos= [
//{
//    nombre: "Jordan",
//    apellido: "Ormeño",
//    edad : "33",
//    hobbie: "Música",
//},
//{
//    nombre: "Inés",
//    apellido: "Arrieta",
//    edad : "71",
//    hobbie: "Coro",
//},
//{
//    nombre: "Ramón",
//    apellido: "Ormeño",
//    edad : "72",
//    hobbie: "Juegos de FB",
//},
//{
//    nombre: "Araceli",
//    apellido: "Molina",
//    edad : "30",
//    hobbie: "Canto",
//},
//{
//    nombre: "Melina",
//    apellido: "Ormeño",
//    edad : "30",
//    hobbie: "Películas",
//}
//]
//for (i = 0; i < datos.length; i++){
//    let persona = datos [ i ];
//    let nombre = persona.nombre;
//    let apellido = persona.apellido;
//    let edad = persona.edad;
//    let hobbie = persona.hobbie;
//    alert("Hola, mi nombre completo es " + nombre + " " + apellido + ", tengo " + edad + " años de edad y mi Hobbie es " + hobbie + ".")
//}

//ejercicio 9//

//let array=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let numerosImpares=[];
//alert("Tengo un array que va desde el 1 al 10. A continuación se te mostrarán sólo los numeros impares.")
//for(i=0 ; i<array.length ; i++){
//if(array[i]% 2!==0){
//numerosImpares.push(array[i]);
//console.log(numerosImpares.length)
//}
//}
//alert("Los numeros impares son: "+numerosImpares[0]+", "+numerosImpares[1]+", "+numerosImpares[2]+", "+numerosImpares[3]+", "+numerosImpares[4]);

//ejercicio 10//

//let ingresado;
//let sumaPares = 0;
//let sumaImpares = 0;
//do {
//    ingresado = Number(prompt("Ingrese un número, use 0 para terminar."));
//if(ingresado % 2 == 0){
//    sumaPares += Number(ingresado);
//}
//else if(ingresado % 2 !== 0){
//    sumaImpares += Number(ingresado);
//}
//} while (ingresado != 0);
//console.log("La suma de los números pares ingresados es: " + sumaPares);
//console.log("La suma de los números impares ingresados es: " + sumaImpares)


//alert("La suma de los números pares ingresados es: " + sumaPares)
//alert("La suma de los números impares ingresados es: " + sumaImpares)
