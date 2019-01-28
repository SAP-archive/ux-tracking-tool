sap.ui.define([
    'sap/m/MessagePopover',
    'sap/m/MessagePopoverItem',
    'jquery.sap.global',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/Popover',
    'sap/m/Link',
    'sap/m/Button'
], function(MessagePopover, MessagePopoverItem, jQuery, Fragment, Controller, JSONModel, ResponsivePopover, Link, Button) {
    "use strict";

    var CController = Controller.extend("UI5FioriForTools.controller.rootApp", {
        model: new sap.ui.model.json.JSONModel(),
        data: {
            navigation: [{
                title: 'Home',
                icon: 'sap-icon://home',
                key: 'home'
            }, {
                title: 'Catalog',
                icon: 'sap-icon://education',
                expanded: false,
                key: 'catalog'
            }],
            fixedNavigation: [{
                title: 'Important Links',
                icon: 'sap-icon://chain-link',
                key: 'ImportantLinks'
            }]
        },

        onInit: function() {
            this.model.setData(this.data);
            this.getView().setModel(this.model);
            this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);

            /* User research tracking tool for behavioral analysis ---------------------------------------------------------- */
            UxBeginUseCase(0, 'App initial load');
            /* End tracking ------------------------------------------------------------------------------------------------- */
        },

        /**
         * Convenience method for accessing the router.
         * @public
         * @returns {sap.ui.core.routing.Router} the router for this component
         */
        getRouter: function() {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onItemSelect: function(oEvent) {
            var oItem = oEvent.getParameter('item');
            var sKey = oItem.getKey();
            this.getRouter().navTo(sKey);

            if (oItem.sId == '__item1-__list0-0') { //Home clicked

            } else if (oItem.sId == '__item1-__list0-1') { //Catalog clicked
                /* User research tracking tool for behavioral analysis ------------------------------------------------------ */
                UxCompleteStep(0, 1, 0, 'Side navigation - Catalog item');
                /* End tracking --------------------------------------------------------------------------------------------- */
            }
        },

        // This handles the user menu
        handleUserNamePress: function(event) {
            var popover = new ResponsivePopover({
                showHeader: false,
                placement: sap.m.PlacementType.Bottom,
                content: [
                    new Button({
                        text: 'Logout',
                        type: sap.m.ButtonType.Transparent
                    })
                ]
            }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

            popover.openBy(event.getSource());

        },

        onSideNavButtonPress: function() {
            var sViewId = this.getView().getId();
            var oToolPage = sap.ui.getCore().byId(sViewId + "--rootApp");
            var bSideExpanded = oToolPage.getSideExpanded();
            this._setToggleButtonTooltip(bSideExpanded);
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());

        },

        _setToggleButtonTooltip: function(bLarge) {
            var oToggleButton = this.getView().byId('sideNavigationToggleButton');
            if (bLarge) {
                oToggleButton.setTooltip('Large Size Navigation');
            } else {
                oToggleButton.setTooltip('Small Size Navigation');
            }
        }
    });
    return CController;
});