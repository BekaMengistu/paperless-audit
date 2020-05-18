(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "DigitalDocumentService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/DocumentService/readActiveDocuments/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DocumentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DocumentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DocumentService/delete/" + id, {},"delete");}
			,createFromTemplate:function(params){return excuteService($q,$http,"api/DocumentService/createFromTemplate/", params,"post");}
			
			,readDocumentForEntity: function(entity,id){return excuteService($q,$http,"api/DocumentService/readDocumentForEntity/" + entity + "/" + id, {},"get");}
			
			,readTemplateForEntity: function(entity){return excuteService($q,$http,"api/DocumentService/readTemplateForEntity/" + entity, {},"get");}
			
			,readWholeTree: function(id){return excuteService($q,$http,"api/DocumentService/readWholeTree/" + id, {},"get");}
			};
	})	
	.factory("DocumentManager",["DigitalDocumentService","DataImportManager","FileUploader",
		function(DocumentService,DataImportManager,FileUploader){
		
		
		function DocumentManager(options)
		{
			this.documentList=[{}];
			this.editedDocument="";
			this.selectedDoc="";
			this.uploaderBuilt=false;
			this.canEdit=false;
			
		}
		
		DocumentManager.prototype.documentTreeOptions={idField:"document_id",parentId:"folder_id",label:"document_name",includeFields:["description","tags"]};
		
		DocumentManager.prototype.treeManager=new TreeManager();
		
		
		DocumentManager.prototype.editPath={url:"app.crud.documentEdit",id:"document_id"};
		DocumentManager.prototype.listPath={url:"app.crud.document"};
		
		DocumentManager.prototype.formData={
				 	list:{title:"Documents"
                    		,subTitle:"List of Documents"
                            ,prefix:"document",headerStyle:""}
                            
					,detail:{title:"Document Detail"
                    	,subTitle:"Edit Document"
                        ,prefix:"document",headerStyle:"dker"}
					}
		
		DocumentManager.prototype.uploadOptions={uploadUrl:"files/upload.php",fileLocation:"files/uploads/"}
		
		DocumentManager.prototype.onAfterAddingFile=function(fileItem)
		{
			this.showUploadList();
		}
        DocumentManager.prototype.onAfterSaveFile=function(sr)
        {
            
        }
		DocumentManager.prototype._onSuccessItem=function(fileItem)
		{
		}
		DocumentManager.prototype.onSuccessItem=function(fileItem)
		{
			this._onSuccessItem(fileItem);
			fileItem.remove();
			if(!this.uploader.queue.length)
			{
				$("#modalUploads").modal("hide");
			}
		}
		DocumentManager.prototype.showUploadList=function()
		{
			$("#modalUploads").modal("show");
		}
		DocumentManager.prototype.buildUploader=function()
		{
			var __this=this;
			this.uploaderBuilt=true;
			var uploaderSingle = this.uploader= new FileUploader({url: this.uploadOptions.uploadUrl});
			
			console.info('buildUploader', this.uploader);
			
			uploaderSingle.onAfterAddingFile = function(fileItem) 
			{
                console.info('onAfterAddingFile', fileItem);
				var documentObj=__this.selectedDoc;
				if(__this.selectedDoc.upload_type=="multiple")
				{
					documentObj=__this.newDocument({folder_id:__this.selectedDoc.document_id,document_name:fileItem.file.name});
				}
				fileItem.digitalDocumentData=documentObj;
				__this.onAfterAddingFile(fileItem);
				//fileItem.upload();
            };			
			
			uploaderSingle.onSuccessItem = function(fileItem, response, status, headers) 
			{ 
				console.info('onSuccessItem', fileItem, response); 
				var doc=fileItem.digitalDocumentData;
				doc.document_path=response.fileName;
				__this.onSuccessItem(fileItem);
				__this.saveItem(doc)
                .then(__this.onAfterSaveFile)
                
				
				
			};
		}
		
		DocumentManager.prototype.loadTemplateDetail=function(entityType,templateName,targetName)
		{
		}
		
		DocumentManager.prototype.loadOrCreateEntityDocument=function(entityType,entityId,templateName,targetName,document_name)
		{
			var entityDocs="";
			var __this=this;
			__this.entityDocStatus={documentLoaded:false,doc:"",templateLoaded:false,templateInfo:""};
			__this.readList=function(){return DocumentService.readDocumentForEntity(entityType,entityId)}
				
				__this.loadList()
				.then(function(sr)
				{
					console.log("loadOrCreateEntityDocument",__this.treeManager.tree.length)
					if(!__this.treeManager.tree.length)
					{
						__this.entityDocStatus.documentLoaded=false;
						
						__this.readList=function(){return DocumentService.readTemplateForEntity(entityType)}
						__this.loadList()
						.then(function(esr)
						{
							if(__this.treeManager.tree.length)
							{
								__this.entityDocStatus.templateLoaded=true;
								__this.entityDocStatus.templateInfo={target:__this.selectNodeByName(targetName),template:__this.selectNodeByName(templateName)}
								//__this.template.template=esr;
								if(__this.entityDocStatus.templateInfo.target && __this.entityDocStatus.templateInfo.template)
								{
									var new_attributes={parent_type:entityType,parent_id:entityId,isTemplate:0};
									var root_attributes={folder_id:__this.entityDocStatus.templateInfo.target.data.document_id,document_name:document_name,permission:""}
									
									__this.entityDocStatus.templateInfo.new_attributes=new_attributes;
									__this.entityDocStatus.templateInfo.root_attributes=root_attributes;
									
								}
							}
							
						})
					}
					else
					{
						__this.entityDocStatus.documentLoaded=true;
					}
				})
				
			//DigitalDocumentService.readDocumentForEntity(entityType,entityId)
			/*.then(function(sr){
				if(sr.length)
				{
				}
				})*/
		}
		
		DocumentManager.prototype.onUploadClick=function(doc)
		{
			this.selectedDoc=doc;
			this.selectDocument(doc);
		}
		
		DocumentManager.prototype.deleteDocument=function(node)
		{
			if(confirm("Are you sure?"))
			{
				var _documentManager=this;
				var parentId=node.parent_id;
	 			return DocumentService.delete(node.data.document_id)
				.then( function( si )
						{
							_documentManager.loadList(parentId)
							return si;
						});
			}
		}
		
		DocumentManager.prototype.newDocument=function(opt)
		{
			opt=opt?opt:{};
			var newDoc={document_name:"New Doc",description:"",parent_type:"",document_path:"",tags:"",parent_id:0,folder_id:0,isTemplate:0,upload_type:""
						,mime_type:"",archived:0,permission:"",system_name:""}
						
			for(var i in newDoc)
			{
				if(typeof(opt[i])=="undefined")
				{
					opt[i]=newDoc[i];
				}
			}
			return opt;
		}
		
		DocumentManager.prototype.addDocument=function(node)
		{
			var obj={};
			if(node)
			{
				node.expanded=true;
				obj=node.data?node.data:{};
			}

			var newDoc=this.newDocument({document_name:"New Doc ",folder_id:obj.document_id
										,parent_type:obj.parent_type,parent_id:obj.parent_id,isTemplate:obj.isTemplate});
			
			this.treeManager.addChild(node,newDoc);
			
			newDoc.editing=true;
			this.onDocumentSelect(newDoc);
		}
		
		DocumentManager.prototype.readTemplate=function(template_id)
		{
			var _documentManager=this;
			var newTreeManager=new TreeManager();
			return DocumentService.readWholeTree(template_id)
			.then(function(sr){
				newTreeManager.makeTree(sr,_documentManager.documentTreeOptions);
				
					var templateNode=newTreeManager.treeHash["item"+template_id];
					var template=templateNode?templateNode:{};
					return template;
			});
		}
		
		DocumentManager.prototype.createFromTemplate=function(template_id,root_attributes,new_doc_attributes)
		{
			var _documentManager=this;
			var _createFromTemplate=function(template)
			{
				 var param={template:template,root_attributes:root_attributes,new_doc_attributes:new_doc_attributes};
				return DocumentService.createFromTemplate(param)
						.then( function( si )
						{
							return si;
						});	
			}
			return _documentManager.readTemplate(template_id)
			.then(_createFromTemplate)
			
		}
		DocumentManager.prototype.createFromTemplate3=function(template_id,root_attributes,new_doc_attributes)
		{
			var _documentManager=this;
			var newTreeManager=new TreeManager();
			DocumentService.readWholeTree(template_id)
			.then(function(sr){
				newTreeManager.makeTree(sr,_documentManager.documentTreeOptions);
				
					var templateNode=newTreeManager.treeHash["item"+template_id];
					var template={};
					if(templateNode)
					{
						template=templateNode;
						var param={template:templateNode,root_attributes:root_attributes,new_doc_attributes:new_doc_attributes};
						return DocumentService.createFromTemplate(param)
								.then( function( si )
								{
									return si;
								});				
					}
				})
		}

		
		DocumentManager.prototype.createFromTemplate2=function(template_id,root_attributes,new_doc_attributes)
		{
			var templateNode=this.treeManager.treeHash["item"+template_id];
			var template={};
			var _documentManager=this;
			if(templateNode)
			{
				template=templateNode;
				var param={template:templateNode,root_attributes:root_attributes,new_doc_attributes:new_doc_attributes};
				return DocumentService.createFromTemplate(param)
						.then( function( si )
						{
							_documentManager.loadList(si.lastInsertId/1)
							return si;
						});				
			}
			
		}
			
		
		DocumentManager.prototype.onNodeSelect=function(node)
		{
			this.selectNode(node);
			 //this.selectDocument(node.data)
		}
		
		DocumentManager.prototype.onDocumentSelect=function(doc)
		{
			 this.selectDocument(doc)
		}
		DocumentManager.prototype.buildImportUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.documentsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="document";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		DocumentManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        DocumentManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		DocumentManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		DocumentManager.prototype.saveItem=function(item)
		{
			var _DocumentManager=this;
			var defaultItem=this.newDocument(item);
			
			return this.save(defaultItem)
			.then( function( si )
			{
				if(si.document_id!=item.document_id)
				{
					_DocumentManager.loadList(si.lastInsertId/1)
				}
				return si;
			});
		}
		
		DocumentManager.prototype.loadData=function(id)
		{
				if(id=="list")
				{
					this.loadList();
				}
				else if(id/1)
				{
					this.loadDetail(id);
				}
				else if(id==0)
				{
					this.editNewDocument();
				}
		}
		
		DocumentManager.prototype.save=function(item)
		{
			 return DocumentService.save(item);
		}
		
		DocumentManager.prototype.setNodeViewTemplate=function(node)
		{
			var doc=node.data;
			var previewTemplates={SVG:"imagePreview",PNG:"imagePreview",JPG:"imagePreview",JPEG:"imagePreview",GIF:"imagePreview",PDF:"iframePreview",OTHER:"downloadPreview"};
			if(doc.document_path)
			{
				var fileParts=	doc.document_path.split(".");
				var extension=fileParts[fileParts.length-1].toUpperCase();
				var preview=previewTemplates[extension];
				preview=preview?preview:previewTemplates.OTHER;
				doc.previewTemplate=preview;
			}
			else
			{
				doc.previewTemplate="uploadPreview";
			}
		}
		
		DocumentManager.prototype.setDocumentViewTemplate=function(doc)
		{
			var previewTemplates={SVG:"imagePreview",PNG:"imagePreview",JPG:"imagePreview",JPEG:"imagePreview",GIF:"imagePreview",PDF:"iframePreview",OTHER:"downloadPreview"};
			if(doc.document_path)
			{
				var fileParts=	doc.document_path.split(".");
				var extension=fileParts[fileParts.length-1].toUpperCase();
				var preview=previewTemplates[extension];
				preview=preview?preview:previewTemplates.OTHER;
				doc.previewTemplate=preview;
			}
			else
			{
				doc.previewTemplate="uploadPreview";
			}
		}
		DocumentManager.prototype.selectNode=function(node)
		{
			this.selectedNode=node;
			this.setNodeViewTemplate(node);
			this.selectDocument(node.data);
			return node;
		}
		DocumentManager.prototype.selectDocument=function(doc)
		{
			this.editedDocument=doc;
			this.setDocumentViewTemplate(doc);
			return doc;
		}
		
		DocumentManager.prototype.editNewDocument=function()
		{
			return this.selectDocument(this.newDocument());
		}
		
		DocumentManager.prototype.readDetail=function(id)
		{
			return DocumentService.readDetailById(id);
		}
		DocumentManager.prototype.loadDetail=function(id)
		{
			var _DocumentManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _DocumentManager.selectDocument(sr)});
		}
		
		DocumentManager.prototype.readList=function()
		{
			//return DocumentService.readWholeTree(5);
			return DocumentService.readAll();
		}
		
		DocumentManager.prototype.loadList=function(selectId)
		{
			//var vm=this;
			var _documentManager=this;
			return this.readList()
	 		.then(function(sr){_documentManager.documentsList=sr; 
			_documentManager.buildTree();
			
			if(selectId)
			{
				var node=_documentManager.treeManager.selectNodeById(selectId);
				_documentManager.selectDocument(node.data);
			}
			return sr;});
		}
		DocumentManager.prototype.selectNodeByName=function(name,setRoot)
		{
			if(!name)
			{
				return;
			}
			for(var i in this.treeManager.treeHash)
			{
				var node=this.treeManager.treeHash[i];
				if(node.data.system_name==name)
				{
					var node=this.treeManager.selectNodeById(node.data.document_id);
					this.selectDocument(node.data);
					if(setRoot)
					{
						this.treeManager.tree=[node];
						node.expanded=true;
					}
					return node;
				}
			}
		}
		
		DocumentManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _DocumentManager=this;
	 		DocumentService.delete(id)
			.then(_DocumentManager.readList)
	 		.then(function(sr){_DocumentManager.documentsList=sr});
     	}
		var createDocumentManager=function(options)
		{
			var _documentManager=new DocumentManager(options);
			
			_documentManager.buildUploader();
			_documentManager.buildTree=function()
			{
				_documentManager.treeManager.makeTree(_documentManager.documentsList,_documentManager.documentTreeOptions);
			}
			return _documentManager;
		}
		var DocumentManagerFactory={create:createDocumentManager};
		//console.log("/n-----------------------------------------------DocumentManager Factory");
		return DocumentManagerFactory;
		
		}])
             
 }(window.angular));