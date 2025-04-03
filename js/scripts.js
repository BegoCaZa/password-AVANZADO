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

//VARIABLES JS
const passwordLength = rangeLenghtElement.value; // el mismo VALOR que el rango
let password = ''; //cada que termine de dar la vuelta al rango, aqui guardara la contraseña
let characters = '';

//FUNCIONES Y CALLBACKS
const changeRange = () => {
  outputValueElement.textContent = rangeLenghtElement.value; // Que el TEXTO sea igual al VALOR del rango
};

//GENERAR PASSWPORD
const generatePassword = () => {
  for (let i = 0; i < passwordLength; i++) {
    //va a meter numeros dependiendo del nuemero del RANGO
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex); //mete al STRING la letra en ese INDICE
  }

  passwordInputElement.value = password; // contraseña en el input
};

//CHECKS TOGGELS
const checkTests = () => {
  if (testUpperCaseElement.checked) {
    characters += upperCase; //que meta al banco de caracteres
  } else {
    characters = ''; //esta mal
  }

  if (testLowerCaseElement.checked) {
    characters += lowerCase;
  } else {
    characters = '';
  }
  if (testNumbersElement.checked) {
    characters += numbers;
  } else {
    characters = '';
  }
  if (testSymbolsElement.checked) {
    characters += symbols;
  } else {
    characters = '';
  }

  if (characters === '') {
    generateButtonElement.disabled;
  }

  console.log(characters);
};

//EVENTOS
rangeLenghtElement.addEventListener('input', changeRange);
testUpperCaseElement.addEventListener('change', checkTests);
testLowerCaseElement.addEventListener('change', checkTests);
testNumbersElement.addEventListener('change', checkTests);
testSymbolsElement.addEventListener('change', checkTests);
generateButtonElement.addEventListener('click', generatePassword);
