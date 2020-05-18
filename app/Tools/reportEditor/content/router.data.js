var bmReportToolsDependencies={
			"bm.report_tools":[
						'app/Tools/reportEditor/content/report.Services.js'
                        ,'app/Tools/reportEditor/content/ReportsController.js'
						]
					};
					
addDependencyToApp(bmReportToolsDependencies);

reportToolRoutes={
			'app.tools.report_tools':
				{
					url: '/report_tools'
					,data : { title: 'Report Tools',onLoad:"onReportToolsListLoad"}
					//,template:"<div>This is report tools</div>"
					,templateUrl: 'app/tools/reportEditor/content/reportList.html'
					,resolve: ["bm.report_tools"]
					,controller: 'ReportToolsController'
				}
    
			,'app.tools.report_toolsEdit': 
            	{url: '/report_tools/{web_content_id}'
            	,controller: 'ReportToolsController'
            	,resolve: ["bm.report_tools"]
            	,data : { title: 'Report Tools',onLoad:"onReportToolsDetailLoad"}
                ,templateUrl: 'app/tools/reportEditor/content/editor.grid.html'
                }

			};	
					
   addRoutesToApp(reportToolRoutes);