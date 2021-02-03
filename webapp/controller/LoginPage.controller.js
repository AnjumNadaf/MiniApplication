sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("miniApp2.MiniApplication2.controller.LoginPage", {
		onInit: function () {
       this.oRouter= new sap.ui.core.UIComponent.getRouterFor(this);
		},
		onPress:function(){
			debugger;
		var adminUsername= this.getView().byId("idUsername").getValue();
		var adminPassword= this.getView().byId("idPassword").getValue();
		 if(adminUsername==="Admin" && adminPassword==="Admin123"){
		 	this.oRouter.navTo("RouteListPage");
		 }
		
		}
	});
});