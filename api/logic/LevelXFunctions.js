/* Use Case Variables ------------------------------------------------------------------------------------------------------- */
var LevelOneRunning = false;
var LevelTwoRunning = false;
var LevelThreeRunning = false;

var LevelOneCounter;
var LevelTwoCounter;
var LevelThreeCounter;

/* Single Interactions ------------------------------------------------------------------------------------------------------ */
function UxSetInteraction(TriggerElement) {
    var Output = 'User interacted with the "' + TriggerElement + '" element.';

    if (LevelTwoRunning && LevelThreeRunning) {
        AddToPrintStack(15, Output, TriggerElement);
    } else {
        AddToPrintStack(16, Output, TriggerElement);
    }
}

function UxCompleteSession() {
    ExportCSV(TestResultsArray);
}