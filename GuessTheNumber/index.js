import { prompt } from "./prompt.js";

const numberRandomIntBetween = (minimalNumber, maximumNumber) => {
  return Math.floor(
    Math.random() * (maximumNumber + 1 - minimalNumber) + minimalNumber
  );
};

const restartGame = () => {
  const choice = prompt("Voulez vous rejouer ? (O/N): ");

  if (choice.toUpperCase() === "O") {
    console.log("\n\n");
    console.log("⭐ Nouvelle partie :");
    game();
  } else if (choice.toUpperCase() === "N") {
    console.log("Merci d'avoir joué ! A la prochaine 😄");
  } else {
    console.log("⛔ Choix invalide. Veuillez entrer O ou N.");
    restartGame();
  }
};

const game = () => {
  const targetNumber = numberRandomIntBetween(1, 100);
  let numberTrials = 0;

  const playGuessTheNumber = () => {
    const guessNumber = Number(prompt("🎮 Entrez un nombre :"));
    numberTrials += 1;

    if (guessNumber > targetNumber) {
      console.log("📈 Le numéro entré est trop grand.");
      playGuessTheNumber();
      return;
    }

    if (guessNumber < targetNumber) {
      console.log("📉 Le numéro entré est trop petit.");
      playGuessTheNumber();
      return;
    }

    console.log(`🟢 Super, le nombre aléatoire était en effet ${guessNumber}`);
    console.log(`✨ Vous avez réussi en ${numberTrials} coups.`);
  };

  console.log({ targetNumber });
  playGuessTheNumber();
  restartGame();
};

game();
