(function() {
    'use strict';
    angular
        .module('app')
        .controller('ReportToolsController', ReportToolsController)

 		ReportToolsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"ReportToolsService","CRUDManagers"];

      	
/*--------------ReportToolsController------------------*/
		
		function ReportToolsController($scope, $http, $filter,$stateParams,$state ,ReportToolsService,CRUDManagers)
		{
            $scope.report_web_contentManager=ReportToolsService.manager({state:$state});
            
            $scope.report_web_contentManager.detailEditor.url="app.tools.report_toolsEdit";
            $scope.report_web_contentManager.listEditor.url="app.tools.report_tools";
            
            
             $scope.app.onReportToolsListLoad=function()
             {
                 return $scope.report_web_contentManager.loadData("list");
             }
			 $scope.app.onReportToolsDetailLoad=function()
             {
                 $scope.editedReport={title:"Property PE NOte",type:"grid",data:
                    [
                        ["No","Col1","Col2","Col3"]
                        ,["1","{{audit.account.asset.value}}","Val 2","Val 3"]
                        ,["2","Val 1","Val 2","Val 3"]
                    ]
                }
                 
                 var id=$stateParams.web_content_id?$stateParams.web_content_id:"list";
                 $scope.editInfo={};
				//console.log("ReportToolsController",id);
				return $scope.report_web_contentManager.loadData(id)
                 .then(function(sr){
                   // $scope.report_web_contentManager.editedItem.reportData= $scope.editedReport;
                    $scope.editedReport = $scope.report_web_contentManager.editedItem.reportData;
                    })
                 
                 
             }
             $scope.selectCell=function(rindex,cindex,col)
             {
                 $scope.editInfo.selectedIndex={row:rindex,col:cindex};
                 $scope.editInfo.selectedCell=col;
             }
             $scope.addArrayElement=function(arrayData,index,value)
             {
                 var arrayLen=arrayData.length;
                 arrayData.push(value);
                 for(var r=arrayLen;r>index;r--)
                 {
                     arrayData[r]=arrayData[r-1];
                 }
                 arrayData[index+1]=value;
                 
             }
             $scope.addRow=function(index)
             {
                 var addedRow=[];
                for(var c in $scope.editedReport.data[0].columns)
                {
                  addedRow.push({style:"number",type:"number",value:""});       
                }
                 $scope.addArrayElement($scope.editedReport.data,index,{style:"",columns:addedRow}); 
                 
                 
             }
             $scope.deleteRow=function(index)
             {
                 if(confirm("Are you sure?"))
                     {
                        $scope.editedReport.data.splice(index,1); 
                     }
             }
             $scope.addColumn=function(index)
             {
                 //var columnsLen=$scope.editedReport.data[0].length;
                 for(var r in $scope.editedReport.data)
                 {
                      $scope.addArrayElement($scope.editedReport.data[r].columns,index,{style:"number",type:"number",value:""});   
                 }
             }
             $scope.deleteColumn=function(index)
             {
                 if(confirm("Are you sure?"))
                     {
                         for(var r in $scope.editedReport.data)
                        {
                           
                            $scope.editedReport.data[r].columns.splice(index,1); 
                        }
                     }
             }
        }
/*--------------/ReportToolsController------------------*/
		
        
})();

