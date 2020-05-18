(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CustomReportService", CustomReportService)
	
     CustomReportService.$inject = ['$q', '$http','$stateParams','$state',"CRUDManagers"];
    
    function CustomReportService($q, $http,$stateParams,$state,CRUDManagers)
    {
        var restServices={
			searchWebContentByCategory:function(id){return excuteService($q,$http,"api/WebContentService/searchByCategory/"+id, {},"get");}
			};  
        
        var createRestService=function(){
          return restServices;
        };
        
        var readCustomGridData=function(audit)
        {
            
        var customGridData=[
            {style:"report-header",cols:[{},{value:"Closing Data"}]}
            ,{style:"acct-level-1",cols:[{value:"Operating activities"},{value:"0"},{value:"34550"}]}
            ]
        }

        return {gridData:readCustomGridData,restServices:restServices};
    }
    
 }(window.angular));