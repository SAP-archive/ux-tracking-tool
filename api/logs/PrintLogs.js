/* CSV Output --------------------------------------------------------------------------------------------------------------- */
var TestResultsArray = [];

/* Counter ------------------------------------------------------------------------------------------------------------------ */
var LogConsoleCounter = 0;

/* Print logs --------------------------------------------------------------------------------------------------------------- */
function PrintInitialLogs() {
	PrintBrowserLogs();
    PrintScreenLogs();
	PrintUseCaseLogHeaders();
}

/* Used by library function in order to print logs -------------------------------------------------------------------------- */
function AddToPrintStack(LogsJSmessageID, DetailMessage, TriggerElement) {
    var Output;
    PrintResults(LogsData[LogsJSmessageID].message, DetailMessage, TriggerElement);
    Output = '[' + LogConsoleCounter + '] ' + LogsData[LogsJSmessageID].message + '\n' + DetailMessage;
    BrowserConsole(Output);
    LogConsoleCounter ++;
}

/* Print Console output ----------------------------------------------------------------------------------------------------- */
function PrintToConsole(TriggerElement, DetailMessage) {
    var Output;
    if (LogConsoleCounter < 10){
        Output = '[0' + LogConsoleCounter + '] > [' + TriggerElement + '] ' + DetailMessage;
    } else {
        Output = '[' + LogConsoleCounter + '] > [' + TriggerElement + '] ' + DetailMessage;
    }
    BrowserConsole(Output);
    LogConsoleCounter ++;
}

function BrowserConsole(message) {
    console.log(message);
    /* Function used in the demo page of the tool --------------------------------------------------------------------------- */
    DemoPageConsole(message);
}