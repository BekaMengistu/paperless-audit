(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "DataImportExportService", function( $q,$http )
	{
		return {
			import :function(fileType,param){return excuteService($q,$http,"api/DataImportExportService/import/" + fileType + "/", param,"post");}
			,export :function(fileType,param){return excuteService($q,$http,"api/DataImportExportService/export/" + fileType + "/", param,"post");}
			
			};
	}).factory("DataImportManager",["DataImportExportService","FileUploader",
		function(DataImportExportService,FileUploader){
		
		
		function DataImportManager(options)
		{
			this.importParams={};
			this.windowVisible=false;
		}
		DataImportManager.prototype.importOptions={
				fileButtonId:"btnImportFileUploader"
				,templatePath:"app/crud/dataManagementHelpers/data_import.html"
				,dataTable:"",eraseExisting:false,fileType:"Excel",filePath:""
				,uploadUrl:'files/upload.php'
				,fieldsList:[]
				,fileLocation:"files/uploads/"
				,importService:DataImportExportService.import
		};
		
		DataImportManager.prototype.buildUploader=function()
		{
			var __this=this;
			var uploaderSingle = this.uploader= new FileUploader({url: this.importOptions.uploadUrl});
			
			uploaderSingle.onAfterAddingFile = function(fileItem) 
			{
				__this.canImport=false;
                console.info('onAfterAddingFile', fileItem);
				fileItem.upload();
            };			
			
			uploaderSingle.onSuccessItem = function(fileItem, response, status, headers) 
			{ 
				console.info('onSuccessItem', fileItem, response); 
				__this.importOptions.filePath=__this.importOptions.fileLocation + response.fileName;
				__this.canImport=true;
			};
		}
		DataImportManager.prototype.afterImportDone=function()
		{
		}
		DataImportManager.prototype.buildImportRequestParams=function(param)
		{
			return param;
		}
		
		DataImportManager.prototype.getImportRequestParams=function()
		{
			//var ioptions=this.importOptions
			var params={dataTable:"",eraseExisting:"",fileType:"Excel",filePath:""};
			for(var i in params)
			{
				var pv=this.importOptions[i];
				if(pv)
				{
					params[i]=pv;
				}
			}
			return this.buildImportRequestParams(params)
		}
		
		
		DataImportManager.prototype.importFile=function()
		{
			var _this=this;
			var params=this.getImportRequestParams();
			
			return this.importOptions.importService(this.importOptions.fileType,params)
			.then(function (sr)
					{
					_this.afterImportDone(sr);
					return sr;
					});
		}
		
		
		DataImportManager.prototype.showImportWindow=function(fileType)
		{
			console.log("DataImportManager.prototype.showImportWindow",fileType);
			this.importOptions.filePath="";
			if(fileType)
			{
				this.importOptions.fileType=fileType;
			}
			this.windowVisible=true;
		}
		DataImportManager.prototype.uploadButtonClick=function(id)
			{
				id=id?id:this.importOptions.fileButtonId;
				console.log("DataImportManager.prototype.uploadButtonClick",id);
				$("#"+id).click();
				//document.getElementById("btnUploadDoc").onClick();
			}
		
        
		var DataImportManagerFactory={create:function(options){return new DataImportManager(options)}};
		//console.log("/n-----------------------------------------------AppPermissionManager Factory");
		return DataImportManagerFactory;
		
		}
		]).factory("DataExportManager",["DataImportExportService","FileUploader",
			function(DataImportExportService,FileUploader)
			{
			function DataExportManager(options)
			{
				this.importParams={};
				this.windowVisible=false;
			}
		DataExportManager.prototype.importOptions={
				fileButtonId:"btnImportFileUploader"
				,templatePath:"app/crud/dataManagementHelpers/data_import.html"
				,dataTable:"",eraseExisting:false,fileType:"Excel",filePath:""
				,uploadUrl:'files/upload.php'
				,fileLocation:"files/uploads/"
				,importService:DataImportExportService.import
		};
		
		
		DataExportManager.prototype.afterExportDone=function()
		{
		}
		
        
		var DataExportManagerFactory={create:function(options){return new DataExportManager(options)}};
		//console.log("/n-----------------------------------------------AppPermissionManager Factory");
		return DataExportManagerFactory;
		
		}])
             
 }(window.angular));