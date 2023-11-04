import { prompt } from "./prompt.js";

const askPasswordLength = () => {
  const passwordLength = Number(prompt("Combien de caracteres ? "));
  if (
    Number.isNaN(passwordLength) ||
    (passwordLength >= 8 && passwordLength <= 36)
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
};

main();
