/* CSV Counters ------------------------------------------------------------------------------------------------------------- */
var BrowserLogHeadersCounter = 0;
var BrowserLogsCounter = 1;

function PrintBrowserLogs(){
    PrintBrowserLogsToConsole();
    PrintBrowserLogHeaders();
    PrintBrowserLogResults();
}

/* Print Console output ----------------------------------------------------------------------------------------------------- */
function PrintBrowserLogsToConsole() {
    if (navigator.cookieEnabled) {
        PrintToConsole('GetNavigator', 'Browser cookies are enabled.');
    } else {
        PrintToConsole('GetNavigator', 'Browser cookies are disabled.');
    }
    PrintToConsole('GetNavigator', 'Browser Code Name: ' + navigator.appCodeName);
    PrintToConsole('GetNavigator', 'Browser Name: ' + navigator.appName);
    PrintToConsole('GetNavigator', 'Browser Version: ' + navigator.appVersion.replace(/;/g," @"));
    PrintToConsole('GetNavigator', 'Browser Language: ' + navigator.language);
    PrintToConsole('GetNavigator', 'Browser Platform: ' + navigator.platform);
    PrintToConsole('GetNavigator', 'Browser Engine: ' + navigator.product);
    PrintToConsole('GetNavigator', 'Browser Agent: ' + navigator.userAgent.replace(/;/g," @"));
    if (navigator.javaEnabled()) {
        PrintToConsole('GetNavigator', 'Java is enabled.');
    } else {
        PrintToConsole('GetNavigator', 'Java is disabled.');
    }
}

/* Print column headers in the CSV ------------------------------------------------------------------------------------------ */
function PrintBrowserLogHeaders() {
    TestResultsArray[BrowserLogHeadersCounter] = [];
    TestResultsArray[BrowserLogHeadersCounter][0] = 'Browser Details';
    TestResultsArray[BrowserLogHeadersCounter][1] = 'Browser Cookies';
    TestResultsArray[BrowserLogHeadersCounter][2] = 'Browser Code Name';
    TestResultsArray[BrowserLogHeadersCounter][3] = 'Browser Name';
    TestResultsArray[BrowserLogHeadersCounter][4] = 'Browser Version';
    TestResultsArray[BrowserLogHeadersCounter][5] = 'Browser Language';
    TestResultsArray[BrowserLogHeadersCounter][6] = 'Browser Platform';
    TestResultsArray[BrowserLogHeadersCounter][7] = 'Browser Engine';
    TestResultsArray[BrowserLogHeadersCounter][8] = 'Browser Agent';
    TestResultsArray[BrowserLogHeadersCounter][9] = 'Java enabled';
}

/* Print logs in the CSV ---------------------------------------------------------------------------------------------------- */
function PrintBrowserLogResults() {
    TestResultsArray[BrowserLogsCounter] = [];
    TestResultsArray[BrowserLogsCounter][0] = '';
    TestResultsArray[BrowserLogsCounter][1] = navigator.cookieEnabled;
    TestResultsArray[BrowserLogsCounter][2] = navigator.appCodeName;
    TestResultsArray[BrowserLogsCounter][3] = navigator.appName;
    TestResultsArray[BrowserLogsCounter][4] = navigator.appVersion.replace(/;/g," @");
    TestResultsArray[BrowserLogsCounter][5] = navigator.language;
    TestResultsArray[BrowserLogsCounter][6] = navigator.platform;
    TestResultsArray[BrowserLogsCounter][7] = navigator.product;
    TestResultsArray[BrowserLogsCounter][8] = navigator.userAgent.replace(/;/g," @");
    TestResultsArray[BrowserLogsCounter][9] = navigator.javaEnabled();
}