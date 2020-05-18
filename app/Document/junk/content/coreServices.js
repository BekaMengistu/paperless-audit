(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CoreLookupService", function( $q,$http )
	{
		return {
		readUsersLookup :function(){return excuteService($q,$http,"api/lookupService/users/", {},"get");}
		}
	})
.service( "CoreCustomerService", function( $q,$http )
	{
		return {
			readAllClients :function(){return excuteService($q,$http,"api/clientAppService/readAll/", {},"get");}
			,readCustomerTasks:function(id){return excuteService($q,$http,"api/CoreAppService/readTasksForEntity/Customer/" + id, {},"get");}
			,logout:function(){return excuteService($q,$http,"api/UsersService/logout/", {},"get");}
			,signIn:function(params){return excuteService($q,$http,"api/UsersService/signIn/", params,"post");}
			,readDetailById:function(id){return excuteService($q,$http,"api/UsersService/readDetailById/" + id, {},"get");}
			};
	})	
.service( "CoreDocumentService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/DocumentService/readActiveDocuments/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DocumentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DocumentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DocumentService/delete/" + id, {},"delete");}
			,createFromTemplate: function(params){return excuteService($q,$http,"api/DocumentService/createFromTemplate/", params,"post");}
			};
	})	
	
 }(window.angular));