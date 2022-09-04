//TESTING I
//MICRO DESAFIO 1
//CALCULADORA
// Debe poder resolver las 4 operaciones básicas: suma, resta, multiplicación y división. Cada una debe corresponder con una función.
// Cada operación debe recibir dos operandos. 
// Solo debe recibir números en cada operando. En el caso de que se envíe otro valor, debe mostrar un mensaje de error.
// Debe contener una función main donde se envíe como parámetros el primer operando, el segundo operando y la operación. 
// Ayuda: Se puede implementar con un IF o con SWITCH en base a la operación a realizar.
// Realizar varios ejemplos de ejecución con distintos tipos de datos enviados como operandos. El programa debe generar una salida controlada de error en los siguientes casos:


function calcular(a, b, operacion){
      let resultado;
      if(isNaN(a) || isNaN(b) || a == null || b == null ){
             return "El dato ingresado no es un numero";
      }
      else{
            switch (operacion) {
                  case "suma":
                        resultado = sumar(a, b);
                        break;
                  case "resta":
                        resultado= restar(a, b);
                        break;
                  case "multiplicar":
                        resultado=multiplicar(a, b);
                        break;
                  case "division":
                        if(b == 0){
                              console.log("El numero divisor debe ser distinto a 0");
                        }
                        else{
                              resultadodividir(a, b);
                        }
                        break;
                  case "multiplicacion":
                              resultado=multiplicar(a, b);
                              break;
                  default:
                        break;
            }
      }
      
      return resultado;
}
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const resto = (a, b) => a % b;

let operacionSuma = calcular(2, null, "suma");
console.log(operacionSuma);
let operacionResta = calcular("a",3,"resta");
console.log(operacionResta);
let operacionMultiplicacion = calcular(5,2.3,"multiplicacion");
console.log(operacionMultiplicacion);
let operacionDivision = calcular(20,0,"division");
console.log(operacionDivision);
let operacionSinDatos = calcular()
console.log(operacionSinDatos);

