// Add tests soon

 function displayExpectedMinutesInOven() {
     const EXPECTED_MINUTES_IN_OVEN = 40;

     let printTime = document.getElementById("expected-minutes-in-oven");

     if(printTime) {
         printTime.textContent = EXPECTED_MINUTES_IN_OVEN;
     };

     return printTime;
 };

 displayExpectedMinutesInOven();


function remainingMinutesInOven(actualMinutesInOven) {
    const preparationMinutesPerLayer = 2;
    const EXPECTED_MINUTES_IN_OVEN = 40;

    let explanation = document.getElementById("calcul-remaining-minutes");
    explanation.textContent = `Le four est initialement programmé pour ${EXPECTED_MINUTES_IN_OVEN} minutes.   Pour ${actualMinutesInOven} minutes de cuisson, il me restera ${
        EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
    } minutes.`;

    return explanation;
};

console.log(remainingMinutesInOven(15));

function calculTimeOfPreparationInMinutes(){

};

