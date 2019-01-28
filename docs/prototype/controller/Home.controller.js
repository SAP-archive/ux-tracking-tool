sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/Popover',
    'sap/m/Button'
], function(jQuery, Fragment, Controller, JSONModel, Popover, Button) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.Home", {

        onAfterRendering: function() {
            // NAVIGATE FROM CELL1
            var cellNavigation = function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("ApiManagement");                
            };
            this.byId("cell1").attachBrowserEvent("click", cellNavigation.bind(this));

            // NAVIGATE FROM CELL2
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("CloudforCustomer");
            };
            this.byId("cell2").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL3
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("CloudforFinance");
            };
            this.byId("cell3").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL4
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("CloudPlatform");
            };
            this.byId("cell4").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL5
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("GoalsManagement");
                /* User research tracking tool for behavioral analysis ------------------------------------------------------ */
                UxCompleteStep(0, 0, 0, 'Goals Management cell');
                /* End tracking --------------------------------------------------------------------------------------------- */
            };
            this.byId("cell5").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL6
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("MarketingCloud");
            };
            this.byId("cell6").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL7
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("ODataAPI");
            };
            this.byId("cell7").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL8
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("ProductContent");
            };
            this.byId("cell8").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL9
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("TalentManagement");
            };
            this.byId("cell9").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL10
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("TimeRecordingAPI");
            };
            this.byId("cell10").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL11
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("TranslationHub");
            };
            this.byId("cell11").attachBrowserEvent("click", cellNavigation2.bind(this));
            // NAVIGATE FROM CELL12
            var cellNavigation2 = function() {
                var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter2.navTo("VehiclesNetwork");
            };
            this.byId("cell12").attachBrowserEvent("click", cellNavigation2.bind(this));
        }

    });
    return Controller;
});