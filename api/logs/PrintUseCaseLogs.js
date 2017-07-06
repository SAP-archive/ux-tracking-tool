/* CSV Counters ------------------------------------------------------------------------------------------------------------- */
var UseCaseLogHeadersCounter = 4;
var UseCaseLogsCounter = 5;

/* Print column headers in the CSV ------------------------------------------------------------------------------------------ */
function PrintUseCaseLogHeaders() {
    TestResultsArray[UseCaseLogHeadersCounter] = [];
    TestResultsArray[UseCaseLogHeadersCounter][0] = 'Counter';
    TestResultsArray[UseCaseLogHeadersCounter][1] = 'Date';
    TestResultsArray[UseCaseLogHeadersCounter][2] = 'Timestamp';
    TestResultsArray[UseCaseLogHeadersCounter][3] = 'Timeframe per interaction';
    TestResultsArray[UseCaseLogHeadersCounter][4] = 'Trigger Element';
    TestResultsArray[UseCaseLogHeadersCounter][5] = 'UseCase no.';
    TestResultsArray[UseCaseLogHeadersCounter][6] = 'UseCase title';
    TestResultsArray[UseCaseLogHeadersCounter][7] = 'Action no.';
    TestResultsArray[UseCaseLogHeadersCounter][8] = 'Action title';
    TestResultsArray[UseCaseLogHeadersCounter][9] = 'Step no.';
    TestResultsArray[UseCaseLogHeadersCounter][10] = 'Step title';
    TestResultsArray[UseCaseLogHeadersCounter][11] = 'Short message';
    TestResultsArray[UseCaseLogHeadersCounter][12] = 'Long message';
}

/* Print logs in the CSV ---------------------------------------------------------------------------------------------------- */
function PrintResults(LogMessage, DetailMessage, TriggerElement) {
    var CurrentTime = Math.floor(Date.now() / 1000);
    TestResultsArray[UseCaseLogsCounter] = [];
    TestResultsArray[UseCaseLogsCounter][0] = UseCaseLogsCounter;
    TestResultsArray[UseCaseLogsCounter][1] = ConvertTime(CurrentTime);
    TestResultsArray[UseCaseLogsCounter][2] = CurrentTime;
    TestResultsArray[UseCaseLogsCounter][3] = TestResultsArray[UseCaseLogsCounter][2] - TestResultsArray[UseCaseLogsCounter - 1][2];
    TestResultsArray[UseCaseLogsCounter][4] = TriggerElement;
    if(LevelOneRunning) {
        TestResultsArray[UseCaseLogsCounter][5] = TestScriptData.UseCases[CurrentLevelOne].UseCaseID;
        TestResultsArray[UseCaseLogsCounter][6] = TestScriptData.UseCases[CurrentLevelOne].UseCaseTitle;
    } else {
        TestResultsArray[UseCaseLogsCounter][5] = '';
        TestResultsArray[UseCaseLogsCounter][6] = '';
    }
    if(LevelTwoRunning) {
        TestResultsArray[UseCaseLogsCounter][7] = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionID;
        TestResultsArray[UseCaseLogsCounter][8] = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionTitle;
    } else {
        TestResultsArray[UseCaseLogsCounter][7] = '';
        TestResultsArray[UseCaseLogsCounter][8] = '';
    }
    if(LevelThreeRunning) {
        TestResultsArray[UseCaseLogsCounter][9] = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionSteps[CurrentLevelThree].ActionStepID;
        TestResultsArray[UseCaseLogsCounter][10] = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionSteps[CurrentLevelThree].ActionStepTitle;
    } else {
        TestResultsArray[UseCaseLogsCounter][9] = '';
        TestResultsArray[UseCaseLogsCounter][10] = '';
    }
    TestResultsArray[UseCaseLogsCounter][11] = LogMessage;
    TestResultsArray[UseCaseLogsCounter][12] = DetailMessage;
    UseCaseLogsCounter ++;
}

/* Supportive functions ----------------------------------------------------------------------------------------------------- */
function ConvertTime(InteractionTimestamp){
  var CurrentDate = new Date(InteractionTimestamp * 1000);
  var Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var Year = CurrentDate.getFullYear();
  var Month = Months[CurrentDate.getMonth()];
  var Day = CurrentDate.getDate();
  var Hour = CurrentDate.getHours();
  var Min = CurrentDate.getMinutes();
  var Sec = CurrentDate.getSeconds();
  var Timestamp;
  if (Sec < 10){
      Timestamp = Day + ' ' + Month + ' ' + Year + ', ' + Hour + ':' + Min + ':0' + Sec ;
  } else if (Sec >= 10) {
      Timestamp = Day + ' ' + Month + ' ' + Year + ', ' + Hour + ':' + Min + ':' + Sec ;
  }
  return Timestamp;
}