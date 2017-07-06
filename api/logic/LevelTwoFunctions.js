function UxBeginAction(TargetLevelOne, TargetLevelTwo, TriggerElement) {
    /* Fetch data from JSON ------------------------------------------------------------------------------------------------- */
    FetchLevelTwoData();
    /* Start Output --------------------------------------------------------------------------------------------------------- */
    var Output = 'User interacted with element "' + TriggerElement + '". ';
    /* Control Algorithm ---------------------------------------------------------------------------------------------------- */
    if (LevelOneRunning) {
        if (LevelTwoRunning === false) {
            if (LevelThreeRunning === false) {
                if (CurrentLevelOne == TargetLevelOne && CurrentLevelTwo === TargetLevelTwo) {
                    /* Set counter ------------------------------------------------------------------------------------------ */
                    LevelTwoCounter = parseInt(CurrentLevelTwo) + 1;
                    /* Add to Output ---------------------------------------------------------------------------------------- */
                    Output += 'Begin of action "' + CurrentLevelTwoTitle + '" [' + CurrentLevelTwoID + '], ';
                    Output += 'action ' + LevelTwoCounter + ' out of ' + CurrentLevelTwoLength + '.';
                    /* Print Output ----------------------------------------------------------------------------------------- */
                    AddToPrintStack(6, Output, TriggerElement);
                    /* Set and reset values --------------------------------------------------------------------------------- */
                    LevelTwoRunning = true;
                    CurrentLevelThree = 0;
                    /* Go automatically to first step if set so ------------------------------------------------------------- */
                    if (CurrentFlowMode === true) {
                        UxBeginStep(TargetLevelOne, TargetLevelTwo, 0, TriggerElement);
                    }
                    return true;
                } else {
                    AddToPrintStack(5, Output, TriggerElement);
                    return true;
                }
            }
        } else {
            if (LevelThreeRunning) {
                AddToPrintStack(13, Output, TriggerElement);
                return true; 
            } else {
                AddToPrintStack(8, Output, TriggerElement);
                return true;
            }
        }
    } else {
        AddToPrintStack(2, Output, TriggerElement);
        return true;
    }
}

function UxCompleteAction(TargetLevelOne, TargetLevelTwo, TriggerElement) {
    /* Fetch data from JSON ------------------------------------------------------------------------------------------------- */
    FetchLevelTwoData();
    /* Start Output --------------------------------------------------------------------------------------------------------- */
    var Output = 'User interacted with element "' + TriggerElement + '". ';
    /* Control Algorithm ---------------------------------------------------------------------------------------------------- */
    if (LevelOneRunning) {
        if (LevelTwoRunning) {
            if (LevelThreeRunning === false) {
                if (CurrentLevelOne == TargetLevelOne && CurrentLevelTwo == TargetLevelTwo && CurrentLevelThree == CurrentLevelThreeLength) {
                    /* Add to Output ---------------------------------------------------------------------------------------- */
                    Output += 'Completion of action "' + CurrentLevelTwoTitle + '" [' + CurrentLevelTwoID + '], ';
                    Output += 'action ' + LevelTwoCounter + ' out of ' + CurrentLevelTwoLength + '.';
                    /* Print Output ----------------------------------------------------------------------------------------- */
                    AddToPrintStack(9, Output, TriggerElement);
                    /* Set and reset values --------------------------------------------------------------------------------- */
                    LevelTwoRunning = false;
                    CurrentLevelTwo++;
                    /* Go automatically to next level 2 if set so ----------------------------------------------------------- */
                    if (CurrentFlowMode) {
                        if (CurrentLevelTwo < CurrentLevelTwoLength) {
                            UxBeginAction(TargetLevelOne, TargetLevelTwo + 1, TriggerElement);
                        } else if (CurrentLevelTwo === CurrentLevelTwoLength) {
                            UxCompleteUseCase(TargetLevelOne, TriggerElement);
                        }
                    }
                    return true;
                } else {
                    AddToPrintStack(8, Output, TriggerElement);
                    return true;
                }
            } else {
                AddToPrintStack(13, Output, TriggerElement);
                return true;
            }
        } else {
            AddToPrintStack(7, Output, TriggerElement);
            return true;
        }
    } else {
        AddToPrintStack(2, Output, TriggerElement);
        return true;
    }
}