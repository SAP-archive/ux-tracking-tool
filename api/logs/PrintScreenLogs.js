/* CSV Counters ------------------------------------------------------------------------------------------------------------- */
var ScreenLogHeadersCounter = 2;
var ScreenLogsCounter = 3;

function PrintScreenLogs() {
    PrintScreenLogsToConsole();
    PrintScreenLogHeaders();
    PrintScreenLogResults();
}

/* Print Console output ----------------------------------------------------------------------------------------------------- */
function PrintScreenLogsToConsole() {
    PrintToConsole('GetResolution', 'Screen height: ' + window.screen.height);
    PrintToConsole('GetResolution', 'Screen width: ' + window.screen.width);
    PrintToConsole('GetResolution', 'Window available height: ' + window.screen.availHeight);
    PrintToConsole('GetResolution', 'Window available width: ' + window.screen.availWidth);
    PrintToConsole('GetResolution', 'Window height: ' + window.innerHeight);
    PrintToConsole('GetResolution', 'Window width: ' + window.innerWidth);
}

/* Print column headers in the CSV ------------------------------------------------------------------------------------------ */
function PrintScreenLogHeaders() {
    TestResultsArray[ScreenLogHeadersCounter] = [];
    TestResultsArray[ScreenLogHeadersCounter][0] = 'Screen details';
    TestResultsArray[ScreenLogHeadersCounter][1] = 'Screen height';
    TestResultsArray[ScreenLogHeadersCounter][2] = 'Screen width';
    TestResultsArray[ScreenLogHeadersCounter][3] = 'Window available height';
    TestResultsArray[ScreenLogHeadersCounter][4] = 'Window available width';
    TestResultsArray[ScreenLogHeadersCounter][5] = 'Window height';
    TestResultsArray[ScreenLogHeadersCounter][6] = 'Window width';
}

/* Print logs in the CSV ---------------------------------------------------------------------------------------------------- */
function PrintScreenLogResults() {
    TestResultsArray[ScreenLogsCounter] = [];
    TestResultsArray[ScreenLogsCounter][0] = '';
    TestResultsArray[ScreenLogsCounter][1] = window.screen.height;
    TestResultsArray[ScreenLogsCounter][2] = window.screen.width;
    TestResultsArray[ScreenLogsCounter][3] = window.screen.availHeight;
    TestResultsArray[ScreenLogsCounter][4] = window.screen.availWidth;
    TestResultsArray[ScreenLogsCounter][5] = window.innerHeight;
    TestResultsArray[ScreenLogsCounter][6] = window.innerWidth;
}