(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "ReportToolsService", ReportToolsService)
	
     ReportToolsService.$inject = ['$q', '$http','$stateParams','$state',"CRUDManagers"];
    
    function ReportToolsService($q, $http,$stateParams,$state,CRUDManagers)
    {
        var restServices={
			searchWebContentByCategory:function(id){return excuteService($q,$http,"api/WebContentService/searchByCategory/"+id, {},"get");}
			};  
        
        var createRestService=function(){
          return restServices;
        };
        
        var createManager=function(options)
        {
            var reportManager=CRUDManagers.WebContent(options);
            reportManager.restService=restServices;
            
            reportManager.readList=function()
            {
                return restServices.searchWebContentByCategory("financial_report_data");
            }
            reportManager.afterDetailLoaded=function(sr)
            {
                reportManager.editedItem.reportData={};
                var reportData=JSON.parse(sr.content);
                var version=reportData.version;
                if(!version)
                {
                    var reportDataV2={version:"2",data:[]};
                   for(var r in reportData.data)
                    {
                        var row= reportData.data[r]; 
                        var row2={style:"",columns:[]};
                        for(var c in row)
                        {
                            row2.columns.push({style:"",value:row[c]});
                            
                        }
                        reportDataV2.data.push(row2);
                    } 
                    reportData=reportDataV2;
                }
                
                reportManager.editedItem.reportData=reportData;
                 return reportManager.editedItem;
            }
            reportManager.onBeforeSave=function(item)
            {
                item.content=JSON.stringify(item.reportData);
                return item;
            }
            return reportManager;
        }
        return {manager:createManager,restServices:restServices};
    }
    
 }(window.angular));



