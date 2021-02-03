sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("miniApp2.MiniApplication2.controller.ListPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf miniApp2.MiniApplication2.view.ListPage
		 */
		onInit: function () {
         this.oRouter= new sap.ui.core.UIComponent.getRouterFor(this);
		},
		onPressListPage:function(){
			this.oRouter.navTo("RouteLoginPage");
		},
		onListClick:function(oEvent){
			debugger;
			// var listInput= this.getView().byId("idList").getValue();
			var sPath=oEvent.getParameter("listItem").getBindingContextPath();
		
			this.oRouter.navTo("RouteSplitApp",{
			EmpList: sPath.split("/")[sPath.split("/").length-1]
			});
			
			
			

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf miniApp2.MiniApplication2.view.ListPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf miniApp2.MiniApplication2.view.ListPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf miniApp2.MiniApplication2.view.ListPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});