// OBJECTIF : Valider un RDV
function formatMinutesWithTwoNumbers(minutes) {
    if ( minutes < 10 ) {
        return `0${minutes}`
    } else {
        return `${minutes}`;
    };
};


function calculateEndTimeAppointement(startHours, startMinutes, durationMinutes) {
    let endHours = startHours;
    let endMinutes = startMinutes + durationMinutes;

    while (endMinutes >= 60 ) {
        endHours = endHours + 1;
        endMinutes = endMinutes - 60;
    };

    return { endHours, endMinutes };
};


function updateAppointmentTime(startHours, startMinutes, endHours, endMinutes, durationMinutes) {
    let startMinutesFormatted = formatMinutesWithTwoNumbers(startMinutes);
    let endMinutesFormatted = formatMinutesWithTwoNumbers(endMinutes);

    let startHoursAndMinutes = `${startHours}h${startMinutesFormatted}`;
    let endHoursAndMinutes = `${endHours}h${endMinutesFormatted}`;

    const startTime = document.getElementById('startTime');
    const endTime = document.getElementById('endTime');
    const duration = document.getElementById('duration');

    startTime.textContent = `${startHoursAndMinutes}.`;
    endTime.textContent = `${endHoursAndMinutes}.`;
    duration.textContent = `${durationMinutes} min.`;
};


function checkAppointementEndsBeforeShopClosure(endHours, endMinutes, shopClosingTimeHours, shopClosingTimeMinutes) {
    const isValid = document.getElementById("isValid");
    
    if( endHours < shopClosingTimeHours
        || endHours === shopClosingTimeHours
        && endMinutes <= shopClosingTimeMinutes
    ) {
        isValid.textContent = `disponible.`;
    } else {
        isValid.textContent = `non disponible.`;
    };
};

function main() {
    let startHours = 15;
    let startMinutes = 40;

    let shopClosingTimeHours = 16;
    let shopClosingTimeMinutes = 30;

    // let durationMinutes = 15;

    for ( let durationMinutes = 1; durationMinutes <= 120; durationMinutes = durationMinutes + 1) {
        const { endHours, endMinutes } = calculateEndTimeAppointement(startHours, startMinutes, durationMinutes);

        updateAppointmentTime(startHours, startMinutes, endHours, endMinutes, durationMinutes);
        checkAppointementEndsBeforeShopClosure(endHours, endMinutes, shopClosingTimeHours, shopClosingTimeMinutes);

        const closureShop = document.getElementById('closureShop');
        closureShop.textContent = `${shopClosingTimeHours}h${shopClosingTimeMinutes}.`;
    }


    // let shopClosingTimeHours = 16;
    // let shopClosingTimeMinutes = 30;

    // const { endHours, endMinutes } = calculateEndTimeAppointement(startHours, startMinutes, durationMinutes);

    // updateAppointmentTime(startHours, startMinutes, endHours, endMinutes, durationMinutes);
    // checkAppointementEndsBeforeShopClosure(endHours, endMinutes, shopClosingTimeHours, shopClosingTimeMinutes);

    // const closureShop = document.getElementById('closureShop');
    // closureShop.textContent = `${shopClosingTimeHours}h${shopClosingTimeMinutes}.`;
};

main();
