import { prompt } from "./prompt.js";

const askPasswordLength = () => {
  const passwordLength = Number(prompt("Combien de caracteres ? "));
  if (
    Number.isNaN(passwordLength) ||
    passwordLength <= 8 ||
    passwordLength >= 36
  ) {
    throw new Error("Veuillez choisir entre 8 et 36 caractères maximum.");
  }

  return passwordLength;
};

/**
 *
 * @param {String} value
 * @returns
 */
const yesOrNoValue = (value) => {
  if (value.toLowerCase().startsWith("y")) {
    return true;
  } else if (value.toLowerCase().startsWith("n")) {
    return false;
  }
  throw new Error("Il faut répondre Yes (y) ou No (n)");
};

const askSpecialChars = () => {
  const value = prompt("Caracteres speciaux ? (y/n) ");
  return yesOrNoValue(value);
};

const getRandomValue = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SPECIALS = "!@#$%^&*()";
const NUMBERS = "0123456789";

const generatePassword = (
  passwordLength,
  containNumber,
  containUpperCase,
  containSpecialChars
) => {
  let charset = LOWERCASE;

  if (containUpperCase) {
    charset += UPPERCASE;
  }

  if (containSpecialChars) {
    charset += SPECIALS;
  }

  if (containNumber) {
    charset += NUMBERS;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = charset[getRandomValue(charset.length - 1)];
    password += randomCharacter;
  }

  if (containUpperCase && password.toLowerCase() === password) {
    return generatePassword(
      passwordLength,
      containNumber,
      containSpecialChars,
      containUpperCase
    );
  }

  if (containNumber && !password.split("").some((p) => NUMBERS.includes(p))) {
    {
      return generatePassword(
        passwordLength,
        containNumber,
        containSpecialChars,
        containUpperCase
      );
    }
  }
  return password;
};

const askNumbers = () => {
  const value = prompt("Souhaitez vous inclure des chiffres ? (y/n) ");
  return yesOrNoValue(value);
};

const askUppercase = () => {
  const value = prompt("Souhaitez vous inclure des majuscules ? (y/n) ");
  return yesOrNoValue(value);
};

const main = () => {
  let passwordLength = null;
  let containNumber = null;
  let containUpperCase = null;
  let containSpecialChars = null;

  while (
    passwordLength === null ||
    containNumber === null ||
    containSpecialChars === null ||
    containUpperCase === null
  ) {
    try {
      passwordLength = passwordLength ? passwordLength : askPasswordLength();
      containNumber = containNumber ? containNumber : askNumbers();
      containSpecialChars = containSpecialChars
        ? containSpecialChars
        : askSpecialChars();
      containUpperCase = containUpperCase ? containUpperCase : askUppercase();
    } catch (error) {
      console.log(error.message);
    }
  }
  const password = generatePassword(
    passwordLength,
    containNumber,
    containUpperCase,
    containSpecialChars
  );
  console.log(`Votre mot de passe généré est :${password}`);
};

main();
