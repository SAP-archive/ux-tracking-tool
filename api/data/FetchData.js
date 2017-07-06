/* Counters ----------------------------------------------------------------------------------------------------------------- */
var CurrentLevelOne = 0;
var CurrentLevelTwo = 0;
var CurrentLevelThree = 0;
/* Current Prototype Data --------------------------------------------------------------------------------------------------- */
var CurrentFlowMode;
/* Current Use Case Data ---------------------------------------------------------------------------------------------------- */
var CurrentLevelOneTitle;
var CurrentLevelOneID;
var CurrentLevelOneLength;
/* Current Action Data ------------------------------------------------------------------------------------------------------ */
var CurrentLevelTwoTitle;
var CurrentLevelTwoID;
var CurrentLevelTwoLength;
/* Current Step Data -------------------------------------------------------------------------------------------------------- */
var CurrentLevelThreeTitle;
var CurrentLevelThreeID;
var CurrentLevelThreeLength;

/* Fetch data from JSON ----------------------------------------------------------------------------------------------------- */
function FetchFlowData() {
	CurrentFlowMode = TestScriptData.UseCaseAutoFlow;
    if (CurrentFlowMode) {
        PrintToConsole('FetchData', 'Use Case flow is auto.');
    } else {
        PrintToConsole('FetchData', 'Use Case flow is manual.');
    }
}

function FetchLevelOneData() {
	CurrentLevelOneTitle = TestScriptData.UseCases[CurrentLevelOne].UseCaseTitle;
    CurrentLevelOneID = TestScriptData.UseCases[CurrentLevelOne].UseCaseID;
    CurrentLevelOneLength = TestScriptData.UseCases.length;
}

function FetchLevelTwoData() {
	CurrentLevelTwoTitle = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionTitle;
    CurrentLevelTwoID = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionID;
    CurrentLevelTwoLength = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions.length;
}

function FetchLevelThreeData() {
	CurrentLevelThreeTitle = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionSteps[CurrentLevelThree].ActionStepTitle;
    CurrentLevelThreeID = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionSteps[CurrentLevelThree].ActionStepID;
    CurrentLevelThreeLength = TestScriptData.UseCases[CurrentLevelOne].UseCaseActions[CurrentLevelTwo].ActionSteps.length;
}