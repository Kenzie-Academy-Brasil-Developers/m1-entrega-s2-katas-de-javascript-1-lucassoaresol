function oneThroughTwenty() {
  let numero = 0
  for(let i=0;i<20;i++){
    numero++
    console.log(numero)
  }
}

//call function oneThroughTwenty

function evensToTwenty() {
  let numero = 0
  for(let i=0;i<20;i++){
    numero++
    if(numero%2==0){
      console.log(numero)
    }
  }
}

//call function evensToTwenty

function oddsToTwenty() {
  let numero = 0
  for(let i=0;i<20;i++){
    numero++
    if(numero%2!=0){
      console.log(numero)
    }
  }
}

//call function oddsToTwenty

function multiplesOfFive() {
  let numero = 0
  for(let i=0;i<100;i++){
    numero++
    if(numero%5==0){
      console.log(numero)
    }
  }
}

//call function multiplesOfFive

function squareNumbers() {
  let numero = 0
  let result
  for(let i=0;i<100;i++){
    numero++
    result = numero*numero
    if(result<=100){
      console.log(result)
    }
    }
  }

//call function squareNumbers

function countingBackwards() {
  let numero = 21
  for(let i=0;i<20;i++){
    numero--
    console.log(numero)
  }
}

//call function countingBackwards

function evenNumbersBackwards() {
  let numero = 21
  for(let i=0;i<20;i++){
    numero--
    if(numero%2==0){
      console.log(numero)
    }
  }
}

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let numero = 21
  for(let i=0;i<20;i++){
    numero--
    if(numero%2!=0){
      console.log(numero)
    }
  }
}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let numero = 101
  for(let i=0;i<100;i++){
    numero--
    if(numero%5==0){
      console.log(numero)
    }
  }
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let numero = 101
  let result
  for(let i=0;i<100;i++){
    numero--
    result = numero*numero
    if(result<=100){
      console.log(result)
    }
    }
}

//call function squareNumbersBackwards

console.log("1.oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)")
console.log(oneThroughTwenty())

console.log("2.evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)")
console.log(evensToTwenty())

console.log("3.oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)")
console.log(oddsToTwenty())

console.log("4.multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)")
console.log(multiplesOfFive())

console.log("5.squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)")
console.log(squareNumbers())

console.log("6.countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)")
console.log(countingBackwards())

console.log("7.evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)")
console.log(evenNumbersBackwards())

console.log("8.oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)")
console.log(oddNumbersBackwards())

console.log("9.multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)")
console.log(multiplesOfFiveBackwards())

console.log("10.squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)")
console.log(squareNumbersBackwards())
