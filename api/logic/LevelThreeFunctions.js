function UxBeginStep(TargetLevelOne, TargetLevelTwo, TargetLevelThree, TriggerElement) {
    /* Fetch data from JSON ------------------------------------------------------------------------------------------------- */
    FetchLevelThreeData();
    /* Start Output --------------------------------------------------------------------------------------------------------- */
    var Output = 'User interacted with element "' + TriggerElement + '". ';
    /* Control Algorithm ---------------------------------------------------------------------------------------------------- */
    if (LevelOneRunning) {
        if (LevelTwoRunning) {
            if (LevelThreeRunning === false) {
                if (CurrentLevelOne == TargetLevelOne && CurrentLevelTwo == TargetLevelTwo && CurrentLevelThree == TargetLevelThree) {
                    /* Set counter ------------------------------------------------------------------------------------------ */
                    LevelThreeCounter = parseInt(CurrentLevelThree) + 1;
                    /* Add to Output ---------------------------------------------------------------------------------------- */
                    Output += 'Begin of step "' + CurrentLevelThreeTitle + '" [' + CurrentLevelThreeID + '], ';
                    Output += 'step ' + LevelThreeCounter + ' out of ' + CurrentLevelThreeLength + '.';
                    /* Print Output ----------------------------------------------------------------------------------------- */
                    AddToPrintStack(11, Output, TriggerElement);
                    /* Set and reset values --------------------------------------------------------------------------------- */
                    LevelThreeRunning = true;
                    return true;
                } else {
                    AddToPrintStack(10, Output, TriggerElement);
                    return true;
                }
            } else if (LevelThreeRunning) {
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

function UxCompleteStep(TargetLevelOne, TargetLevelTwo, TargetLevelThree, TriggerElement) {
    /* Fetch data from JSON ------------------------------------------------------------------------------------------------- */
    FetchLevelThreeData();
    /* Start Output --------------------------------------------------------------------------------------------------------- */
    var Output = 'User interacted with element "' + TriggerElement + '". ';
    /* Control Algorithm ---------------------------------------------------------------------------------------------------- */
    if (LevelOneRunning) {
        if (LevelTwoRunning) {
            if (LevelThreeRunning) {
                if (CurrentLevelOne == TargetLevelOne && CurrentLevelTwo == TargetLevelTwo && CurrentLevelThree == TargetLevelThree) {
                    /* Add to Output ---------------------------------------------------------------------------------------- */
                    Output += 'Completion of "' + CurrentLevelThreeTitle + '" [' + CurrentLevelThreeID + '], ';
                    Output += 'step ' + LevelThreeCounter + ' out of ' + CurrentLevelThreeLength + '.';
                    /* Print Output ----------------------------------------------------------------------------------------- */
                    AddToPrintStack(14, Output, TriggerElement);
                    /* Set and reset values --------------------------------------------------------------------------------- */
                    LevelThreeRunning = false;
                    CurrentLevelThree++;
                    /* Go automatically to next level 3 if set so ----------------------------------------------------------- */
                    if (CurrentFlowMode === true) {
                        if (CurrentLevelThree < CurrentLevelThreeLength) {
                            UxBeginStep(TargetLevelOne, TargetLevelTwo, TargetLevelThree + 1, TriggerElement);
                        } else if (CurrentLevelThree === CurrentLevelThreeLength) {
                            UxCompleteAction(TargetLevelOne, TargetLevelTwo, TriggerElement);
                        }
                    }
                    return true;
                } else {
                    AddToPrintStack(13, Output, TriggerElement);
                    return true;
                }
            } else {
                AddToPrintStack(12, Output, TriggerElement);
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