// Orden en el código.
// 1º Constantes del DOM
// 2º Variables del DOM
// 3º Constantes JS
// 4º Variables JS
// 5º Funciones
// 6º Acciones (código que se tiene que ejecutar al arrancar por primera vez)
// 7º Eventos

//CONSTANTES
const symbols = '!@#$%^&*()_+-={}[]:;<>,.?/</>';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const outputValueElement = document.getElementById('output-value'); //TEXTO LENGHT
const rangeLenghtElement = document.getElementById('range-length'); //valor del range
const generateButtonElement = document.getElementById('generate-button');
const passwordInputElement = document.getElementById('password'); //input de la contraseña
//tests
const testUpperCaseElement = document.getElementById('testUpperCase'); //UPPERCASE
const testLowerCaseElement = document.getElementById('testLowerCase'); //LOWERCASE
const testNumbersElement = document.getElementById('testNumbers'); //NUMBERS
const testSymbolsElement = document.getElementById('testSymbols'); //SYMBOLS
// //OBJETOS
// const charactersBank ={
//   symbols:'!@#$%^&*()_+-={}[]:;<>,.?/</>',
//   numbers:'1234567890',
//   upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   lowerCase: 'abcdefghijklmnopqrstuvwxyz'
// }

//VARIABLE JS
// let passwordLength = rangeLenghtElement.value; // el mismo VALOR que el rango
let allowedCharacters = '';
let password = '';
// let characters = '';

//FUNCIONES Y CALLBACKS

//VALOR DEL LENGHT
const changeRange = () => {
  outputValueElement.textContent = rangeLenghtElement.value; // Que el TEXTO sea igual al VALOR del rango
};


//CHECKS TOGGELS
const checkTests = () => {
  if (testUpperCaseElement.checked) {
    const randomIndex = Math.floor(Math.random() * upperCase.length);
    password += upperCase.charAt(randomIndex);
    allowedCharacters += upperCase;
  }
  if (testLowerCaseElement.checked) {
    const randomIndex = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase.charAt(randomIndex);
    allowedCharacters += lowerCase;
  }
  if (testNumbersElement.checked) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    password += numbers.charAt(randomIndex);
    allowedCharacters += numbers;
  }
  if (testSymbolsElement.checked) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    password += symbols.charAt(randomIndex);
    allowedCharacters += symbols;
  }

  // console.log(password);
  // console.log(allowedCharacters);

  //DISABLE BUTTON
  if (password === '') {
    generateButtonElement.disabled = true;
  } else {
    generateButtonElement.disabled = false;
  }

  return allowedCharacters;
};

//GENERAR PASSWPORD
  const generatePassword = () => {
    let allowedCharacters = checkTests();
  
    for (let i = 0; i < rangeLenghtElement.value - password.length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      password += allowedCharacters.charAt(randomIndex);
    }
  
    console.log(password); // para ver la contraseña en la consola
    passwordInputElement.value = password; // contraseña en el input
    password = '';
};

//EVENTOS
rangeLenghtElement.addEventListener('input', changeRange);
testUpperCaseElement.addEventListener('change', checkTests);
testLowerCaseElement.addEventListener('change', checkTests);
testNumbersElement.addEventListener('change', checkTests);
testSymbolsElement.addEventListener('change', checkTests);
generateButtonElement.addEventListener('click', generatePassword);
