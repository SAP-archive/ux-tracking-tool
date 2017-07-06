function UxBeginUseCase(TargetLevelOne, TriggerElement) {
    /* Fetch data from JSON ------------------------------------------------------------------------------------------------- */
    FetchLevelOneData();
    /* Start Output --------------------------------------------------------------------------------------------------------- */
    var Output = 'User interacted with element "' + TriggerElement + '". ';
    /* Control Algorithm ---------------------------------------------------------------------------------------------------- */
    if (LevelOneRunning === false) {
        if (LevelTwoRunning === false) {
            if (LevelThreeRunning === false) {
                if (CurrentLevelOne == TargetLevelOne) {
                    /* Set counter ------------------------------------------------------------------------------------------ */
                    LevelOneCounter = parseInt(CurrentLevelOne) + 1;
                    /* Add to Output ---------------------------------------------------------------------------------------- */
                    Output += 'Begin of use case "' + CurrentLevelOneTitle + '" [' + CurrentLevelOneID + '], ';
                    Output += 'use case ' + LevelOneCounter + ' out of ' + CurrentLevelOneLength + '.';
                    /* Print Output ----------------------------------------------------------------------------------------- */
                    AddToPrintStack(1, Output, TriggerElement);
                    /* Set and reset values --------------------------------------------------------------------------------- */
                    LevelOneRunning = true;
                    CurrentLevelTwo = 0;
                    /* Go automatically to first action if set so ----------------------------------------------------------- */
                    if (CurrentFlowMode === true) {
                        UxBeginAction(TargetLevelOne, 0, TriggerElement);
                    }
                    return true;
                } else {
                    AddToPrintStack(0, Output, TriggerElement);
                    return true;
                }
            }
        }
    } else {
        if (LevelTwoRunning) {
            if (LevelThreeRunning) {
                AddToPrintStack(13, Output, TriggerElement);
                return true;
            } else {
                AddToPrintStack(8, Output, TriggerElement);
                return true;   
            }
        } else {
            AddToPrintStack(3, Output, TriggerElement);
            return true;
        }
    }
}

function UxCompleteUseCase(TargetLevelOne, TriggerElement) {
    /* Fetch data from JSON ------------------------------------------------------------------------------------------------- */
    FetchLevelOneData();
    /* Start Output --------------------------------------------------------------------------------------------------------- */
    var Output = 'User interacted with element "' + TriggerElement + '". ';
    /* Control Algorithm ---------------------------------------------------------------------------------------------------- */
    if (LevelOneRunning) {
        if (LevelTwoRunning === false) {
             if (LevelThreeRunning === false) {
                if (CurrentLevelOne === TargetLevelOne && CurrentLevelTwo === CurrentLevelTwoLength){
                    /* Add to Output ---------------------------------------------------------------------------------------- */
                    Output += 'Completion of use case "' + CurrentLevelOneTitle + '" [' + CurrentLevelOneID + '], ';
                    Output += 'use case ' + LevelOneCounter + ' out of ' + CurrentLevelOneLength + '.';
                    /* Print Output ----------------------------------------------------------------------------------------- */
                    AddToPrintStack(4, Output, TriggerElement);
                    /* Set and reset values --------------------------------------------------------------------------------- */
                    LevelOneRunning = false;
                    CurrentLevelOne++;
                    /* Go automatically to next level one if set so --------------------------------------------------------- */
                    if (CurrentFlowMode) {
                        if (CurrentLevelOne < CurrentLevelOneLength) {
                            UxBeginUseCase(TargetLevelOne + 1, TriggerElement);
                        } else if (CurrentLevelOne == CurrentLevelOneLength){
                            UxCompleteSession();
                        }
                    } else {    
                        if (CurrentLevelOne == CurrentLevelOneLength){
                            UxCompleteSession();
                        }
                    }
                    return true;
                } else {
                    AddToPrintStack(3, Output, TriggerElement);
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