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

// let password = ''; //cada que termine de dar la vuelta al rango, aqui guardara la contraseña


//FUNCIONES Y CALLBACKS
const changeRange = () => {
  outputValueElement.textContent = rangeLenghtElement.value; // Que el TEXTO sea igual al VALOR del rango
 };

//GENERAR PASSWPORD
const generatePassword = () => {
  const passwordLength = rangeLenghtElement.value; // el mismo VALOR que el rango
  const characters = checkTests(); // Obtiene los caracteres válidos desde checkTests
  password = ''; // Reinicia la contraseña antes de generarla

  for (let i = 0; i < passwordLength; i++) {
    // Va a meter números dependiendo del número del RANGO
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex); // Mete al STRING la letra en ese INDICE
  }

  passwordInputElement.value = password; // Contraseña en el input
};

//CHECKS TOGGELS
const checkTests = () => {
  let characters = ''; //debe de estar dentro de la funcion para que la vaya reiniciando cada que hace check
  
  if (testUpperCaseElement.checked) {
    characters += upperCase; // Que meta al banco de caracteres
  }
  if (testLowerCaseElement.checked) {
    characters += lowerCase;
  }
  if (testNumbersElement.checked) {
    characters += numbers;
  }
  if (testSymbolsElement.checked) {
    characters += symbols;
  }

  //DISABLE BUTTON
  if (characters === '') {
    generateButtonElement.disabled = true;
  } else {
    generateButtonElement.disabled = false;
  }

  return characters; // Devuelve el valor de characters
  console.log(characters);
};

//EVENTOS
rangeLenghtElement.addEventListener('input', changeRange);
testUpperCaseElement.addEventListener('change', checkTests);
testLowerCaseElement.addEventListener('change', checkTests);
testNumbersElement.addEventListener('change', checkTests);
testSymbolsElement.addEventListener('change', checkTests);
generateButtonElement.addEventListener('click', generatePassword);
