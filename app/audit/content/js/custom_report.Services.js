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
            
        var cash_flow_grid=[
            {style:"report-header",columns:[
                    {},{value:audit.closing_date},{value:audit.comparative_date},{value:audit.comparative_date2}
                    ]}
            ,{style:"acct-level-1",columns:[{value:"Operating activities"},{value:"0"},{value:"34550"}]}
            ]
        var changes_in_equity_grid=[
            {style:"report-header",columns:[{},{value:"Closing Data"}]}
            ,{style:"acct-level-1",columns:[{value:"Operating activities"},{value:"0"},{value:"34550"}]}
            ]
            return {changes_in_equity_grid:{name:"changes_in_equity_grid", data:changes_in_equity_grid}
                    ,cash_flow_grid:{data:cash_flow_grid}
                    }
            
        }

        return {gridData:readCustomGridData,restServices:restServices};
    }
    
 }(window.angular));

