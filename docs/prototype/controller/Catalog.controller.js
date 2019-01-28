sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/json/JSONModel'
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel) {
    "use strict";

    var CController = Controller.extend("UI5FioriForTools.controller.Catalog", {

        onInit: function() {
            this.getSplitAppObj().setHomeIcon({
                'phone': 'phone-icon.png',
                'tablet': 'tablet-icon.png',
                'icon': 'desktop.ico'
            });
        },

        onOrientationChange: function(oEvent) {
            var bLandscapeOrientation = oEvent.getParameter("landscape"),
                sMsg = "Orientation now is: " + (bLandscapeOrientation ? "Landscape" : "Portrait");
            MessageToast.show(sMsg, { duration: 5000 });
        },

        onPressDetailBack: function() {
            this.getSplitAppObj().backDetail();
        },

        onPressMasterBack: function() {
            this.getSplitAppObj().backMaster();
        },

        onPressGoToMaster: function() {
            this.getSplitAppObj().toMaster(this.createId("master2"));
        },

        onListItemPress: function(oEvent) {
            var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

            this.getSplitAppObj().toDetail(this.createId(sToPageId));

            if (sToPageId == 'detailPage1') {

            } else if (sToPageId == 'detailPage9') {
                /* User research tracking tool for behavioral analysis ------------------------------------------------------ */
                UxCompleteStep(0, 1, 1, 'Master list item for Talent Management API');
                /* End tracking --------------------------------------------------------------------------------------------- */
            } else {

            }
        },

        getSplitAppObj: function() {
            var result = this.byId("SplitAppDemo");
            if (!result) {
                jQuery.sap.log.info("SplitApp object can't be found");
            }
            return result;
        }

    });


    return CController;

});