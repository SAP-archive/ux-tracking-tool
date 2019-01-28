sap.ui.define([
    'sap/m/MessagePopover',
    'sap/m/MessagePopoverItem',
    'jquery.sap.global',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/Popover',
    'sap/m/Button',
    'sap/m/CheckBox'
], function(MessagePopover, MessagePopoverItem, jQuery, Fragment, Controller, JSONModel, Popover, Button, CheckBox) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.TalentManagement", {

        onCheck: function() {
            sap.m.MessageToast.show("API key included in the subscription.");
            /* User research tracking tool for behavioral analysis ---------------------------------------------------------- */
            UxCompleteStep(0, 1, 2, 'Radio button for API key');
            /* End tracking ------------------------------------------------------------------------------------------------- */
        },
        onPress: function() {
            sap.m.MessageToast.show("You are now subscribed to the API.");
            /* User research tracking tool for behavioral analysis ---------------------------------------------------------- */
            UxCompleteStep(0, 1, 3, 'Subscribe button');
            /* End tracking ------------------------------------------------------------------------------------------------- */
        },
        onExport: function() {
            sap.m.MessageToast.show("The API has been exported.");
        }
    });

    return Controller;

});