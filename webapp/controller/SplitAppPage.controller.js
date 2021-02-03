sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("miniApp2.MiniApplication2.controller.SplitAppPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf miniApp2.MiniApplication2.view.SplitAppPage
		 */
		onInit: function(){
        this.oRouter= new sap.ui.core.UIComponent.getRouterFor(this);
         this.oRouter.attachRoutePatternMatched(this.onClickList, this);
		},
		
		
		
		
			onClickList:function(oEvent){
			debugger;
			
			this.sPath= oEvent.getParameter("arguments").EmpList;
			this.sPath="/Compnay/"+this.sPath+"/EmployeeDetails";
			var oList= this.getView().byId("idList").bindItems({
				path:this.sPath,
				template: new sap.m.ObjectListItem({
					title:"{EmpName}"
				})
			});
		},
			onClickItems:function(oEvent){
			debugger;
			var listPath= oEvent.getParameter("listItem").getBindingContextPath();
	      	this.getView().byId("idsimpleform").bindElement(listPath);
	
		},
		
	

		onPressBack:function(){
			this.oRouter.navTo("RouteListPage");
		}


		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf miniApp2.MiniApplication2.view.SplitAppPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf miniApp2.MiniApplication2.view.SplitAppPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf miniApp2.MiniApplication2.view.SplitAppPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});