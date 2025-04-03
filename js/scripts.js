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



//FUNCIONES Y CALLBACKS
const changeRange = () => {
  outputValueElement.textContent = rangeLenghtElement.value; // Que el TEXTO sea igual al VALOR del rango
 };


 //GENERAR PASSWPORD
const generatePassword = () => {
  let hasUpperCase = false; 
 
  const passwordLength = rangeLenghtElement.value; // el mismo VALOR que el rango
  const characters = checkTests(); // Obtiene los caracteres válidos desde checkTests
  password = ''; // Reinicia la contraseña antes de generarla

  for (let i = 0; i < passwordLength; i++) {
    // Va a meter números dependiendo del número del RANGO
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex); // Mete al STRING la letra en ese INDICE
  }

  for (let i = 0; i < password.length; i++) { //revista la nueva contraseña en cada index
    if (upperCase.includes(password)) hasUpperCase = true;
  }
//IMPRIME 4 DIGITOS DE MAS
//   if (!upperCase.includes(password)) {
//     password= password.slice(0, password.length);
//     password += upperCase.charAt(Math.floor(Math.random() * upperCase.length)); 
//   }
//   if (!lowerCase.includes(password)) {
//     password= password.slice(0, password.length);
//     password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)); 
//   }
//   if (!numbers.includes(password)) {
//     password= password.slice(0, password.length);
//     password += numbers.charAt(Math.floor(Math.random() * numbers.length)); 
//   }
//   if (!symbols.includes(password)) {
//     password= password.slice(0, password.length);
//     password += symbols.charAt(Math.floor(Math.random() * symbols.length)); 
// }



console.log (password); // para ver la contraseña en la consola
console.log(hasUpperCase); // 
  passwordInputElement.value = password; // contraseña en el input

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
  // console.log(characters);
  return characters; // Devuelve el valor de characters
  
};



//EVENTOS
rangeLenghtElement.addEventListener('input', changeRange);
testUpperCaseElement.addEventListener('change', checkTests);
testLowerCaseElement.addEventListener('change', checkTests);
testNumbersElement.addEventListener('change', checkTests);
testSymbolsElement.addEventListener('change', checkTests);
generateButtonElement.addEventListener('click', generatePassword);
