(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "ToolsService", function( $q,$http )
	{
		return {
			readFile :function(){return excuteService($q,$http,"api/DiscussionService/readAll/", {},"get");}
    		
			,readDetailById: function(id){return excuteService($q,$http,"api/MessagingService/readDiscussionDetailById/" + id, {},"get");}

			,readDiscussionForEntity: function(param){return excuteService($q,$http,"api/MessagingService/readDiscussionForEntity/", param,"post");}
			
    		,save : function(params){return excuteService($q,$http,"api/DiscussionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DiscussionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	
             
 }(window.angular));