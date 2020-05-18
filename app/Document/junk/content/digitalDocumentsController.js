// code style: https://github.com/johnpapa/angular-styleguide 

(function() {
    'use strict';
    angular
        .module('app')
        .controller('DigitalDocumentsController', DigitalDocumentsController);
		
		DigitalDocumentsController.$inject = ['$scope', '$timeout', '$http', '$filter','FileUploader',"CoreDocumentService"];



        function DigitalDocumentsController($scope, $timeout, $http, $filter,FileUploader,CoreDocumentService) {
			
			//$scope.uploadManager={};
			
			
			var uploaderSingle = $scope.uploaderSingle = new FileUploader({
                url: 'files/upload.php'
            });
			
			uploaderSingle.onAfterAddingFile = function(fileItem) {
                console.info('onAfterAddingFile', fileItem);
				fileItem.upload();
            };			
			
			uploaderSingle.onSuccessItem = function(fileItem, response, status, headers) {
                console.info('onSuccessItem', fileItem, response, status, headers);
				$scope.selectedDigitalDocument.document_path=response.fileName;
				$scope.saveDigitalDocument($scope.selectedDigitalDocument);
            };
			
			var uploader = $scope.uploadManager.uploader = new FileUploader({
                url: 'files/upload.php'
            });
			
			
			
			uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
                console.info('onWhenAddingFileFailed', item, filter, options);
            };
            uploader.onAfterAddingFile = function(fileItem) {
				
                
				var nd=$scope.newDocument({folder_id:$scope.selectedDigitalDocument.document_id,document_name:fileItem.file.name,file_path:fileItem.file.name,mime_type:fileItem.file.type});
				fileItem.digitalDocument=nd;
				console.info('onAfterAddingFile', fileItem);
				//$scope.uploadManager.documentQueue.push($scope.newDocument());
            };
            uploader.onAfterAddingAll = function(addedFileItems) {
                console.info('onAfterAddingAll', addedFileItems);
				$scope.uploadManager.showUploads();
            };
            uploader.onBeforeUploadItem = function(item) {
                console.info('onBeforeUploadItem', item);
            };
            uploader.onProgressItem = function(fileItem, progress) {
                console.info('onProgressItem', fileItem, progress);
            };
            uploader.onProgressAll = function(progress) {
                console.info('onProgressAll', progress);
            };
            uploader.onSuccessItem = function(fileItem, response, status, headers) {
				console.info('onSuccessItem',fileItem.digitalDocument);
				
				fileItem.digitalDocument.document_path=response.fileName;
				CoreDocumentService.save(fileItem.digitalDocument)
				.then(function(){
					fileItem.remove();
					if(!$scope.uploadManager.uploader.queue.length)
					{
						$scope.uploadManager.hideUploads();
						$scope.loadListAndSelectBranch(fileItem.digitalDocument.folder_id);
					}
					
					})
				
                //console.info('onSuccessItem', fileItem, response, status, headers);
            };
            uploader.onErrorItem = function(fileItem, response, status, headers) {
                console.info('onErrorItem', fileItem, response, status, headers);
            };
            uploader.onCancelItem = function(fileItem, response, status, headers) {
                console.info('onCancelItem', fileItem, response, status, headers);
            };
            uploader.onCompleteItem = function(fileItem, response, status, headers) {
                console.info('onCompleteItem', fileItem, response, status, headers);
            };
            uploader.onCompleteAll = function() {
                console.info('onCompleteAll');
            };

			
			$scope.showUploads=function()
			{
				$("#modalUploads").modal("show");
		
			}
			
			$scope.uploadButtonClick=function(id)
			{
				id=id?id:"btnUploadDoc";
				$("#"+id).click();
				//document.getElementById("btnUploadDoc").onClick();
			}
			$scope.treeChanged=function()
			{
				console.log("treeChanged");
			}
			
          var tree, treedata_avm, treedata_geography, vm = $scope;
			
			vm.templateDocument=null;
			
		vm.editedDigitalDocument={};
          treedata_avm = [
            {
              label: 'Employee Documents',
              children: [
                {
                  label: 'Dog',
                  data: {
                    description: "man's best friend"
                  }
                }, {
                  label: 'Cat',
                  data: {
                    description: "Felis catus"
                  }
                }, {
                  label: 'Hippopotamus',
                  data: {
                    description: "hungry, hungry"
                  }
                }, {
                  label: 'Chicken',
                  children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                }
              ]
            }, {
              label: 'Vegetable',
              data: {
                definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
                data_can_contain_anything: true
              },
              onSelect: function(branch) {
                return vm.output = "Vegetable: " + branch.data.definition;
              },
              children: [
                {
                  label: 'Oranges'
                }, {
                  label: 'Apples',
                  children: [
                    {
                      label: 'Granny Smith',
                      onSelect: apple_selected
                    }, {
                      label: 'Red Delicous',
                      onSelect: apple_selected
                    }, {
                      label: 'Fuji',
                      onSelect: apple_selected
                    }
                  ]
                }
              ]
            }, {
              label: 'Mineral',
              children: [
                {
                  label: 'Rock',
                  children: ['Igneous', 'Sedimentary', 'Metamorphic']
                }, {
                  label: 'Metal',
                  children: ['Aluminum', 'Steel', 'Copper']
                }, {
                  label: 'Plastic',
                  children: [
                    {
                      label: 'Thermoplastic',
                      children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                    }, {
                      label: 'Thermosetting Polymer',
                      children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                    }
                  ]
                }
              ]
            }
          ];
          treedata_geography = [
            {
              label: 'North America',
              children: [
                {
                  label: 'Canada',
                  children: ['Toronto', 'Vancouver']
                }, {
                  label: 'USA',
                  children: ['New York', 'Los Angeles']
                }, {
                  label: 'Mexico',
                  children: ['Mexico City', 'Guadalajara']
                }
              ]
            }, {
              label: 'South America',
              children: [
                {
                  label: 'Venezuela',
                  children: ['Caracas', 'Maracaibo']
                }, {
                  label: 'Brazil',
                  children: ['Sao Paulo', 'Rio de Janeiro']
                }, {
                  label: 'Argentina',
                  children: ['Buenos Aires', 'Cordoba']
                }
              ]
            }
          ];
			
          vm.my_data =[];// treedata_avm;
          vm.try_changing_the_tree_data = try_changing_the_tree_data;

          vm.my_tree_handler = my_tree_handler;
          vm.my_tree = tree = {};
          vm.try_async_load = try_async_load;
          vm.try_adding_a_branch = try_adding_a_branch;

          function try_changing_the_tree_data() {
            if (vm.my_data === treedata_avm) {
              return vm.my_data = treedata_geography;
            } else {
              return vm.my_data = treedata_avm;
            }
          };

          function try_async_load() {
            vm.my_data = [];
            vm.doing_async = true;
            return $timeout(function() {
              if (Math.random() < 0.5) {
                vm.my_data = treedata_avm;
              } else {
                vm.my_data = treedata_geography;
              }
              vm.doing_async = false;
              return tree.expand_all();
            }, 1000);
          };

          function my_tree_handler(branch) {
			  tree.expand_branch(branch)
			  vm.editedDigitalDocument=null;
			  vm.selectedBranch=branch;
			  vm.selectedDigitalDocument=vm.docsHash["doc_"+branch.document_id];
			  console.log("selected",branch,vm.selectedDigitalDocument);
            var _ref;
            vm.output = "You selected: " + branch.label + branch.document_id;
            if ((_ref = branch.data) != null ? _ref.description : void 0) {
              return vm.output += '(' + branch.data.description + ')';
            }
          };
          function apple_selected(branch) {
            return vm.output = "APPLE! : " + branch.label;
          };

          function try_adding_a_branch() {
            var b;
            b = tree.get_selected_branch();
            return tree.add_branch(b, {
              label: 'New Branch',
              data: {
                something: 42,
                "else": 43
              }
            });
          };
		  
		  vm.docsHash={};
		  $scope.DigitalDocumentList=[];
		  $scope.DigitalDocumentsClone=[];
		  
		  $scope.newDocument=function(attribs)
			{
				var newDoc= {document_name:"",description:"",document_category_id:"",parent_type:"",document_path:"",tags:"",parent_id:"",folder_id:"",mime_type:"",archived:0}
				
				for(var i in attribs)
				{
					newDoc[i]=attribs[i];
				}
				return newDoc;
			}
		  $scope.addChild=function(folder_id,templateDoc)
		  {
			
            var b;
            b = tree.get_selected_branch();
			var newDoc=$scope.newDocument({label: '*New Document',folder_id:folder_id});
			if(templateDoc)
			{
				newDoc.templateDocument=templateDoc;
				newDoc.tags=templateDoc.tags;
				newDoc.document_name=templateDoc.document_name;
				newDoc.description=templateDoc.description;
			}
            var newBranch=tree.add_branch(b, newDoc);
            tree.select_branch(newBranch);
			vm.selectedBranch=newBranch;
			
			vm.docsHash["doc_"+ newDoc.document_id]=newBranch;
			
			$timeout(function(){
					vm.selectedDigitalDocument=newBranch;
					vm.selectedDigitalDocument.edited=true},100);
		  }
		  
		  $scope.addChildFromTemplate=function(folder_id)
		  {
			  $scope.addChild(folder_id,$scope.templateDocument)
		  }
		  
		  $scope.buildDocumentTree=function(docs)
		  {
			  var docsClone=[];
			  for(var i in docs)
			  {
				  var doc=docs[i];
				  var docClone={label:doc.document_name,children:[]};
				  if(doc.isTemplate=="1")
				  {
					  docClone.label="["+doc.document_name+"]";
					  $scope.templateDocument=docClone;
				  }
				  for(var a in doc)
				  {
					  docClone[a]=doc[a];
				  }
				  
				  docsClone.push(docClone);
				  
			  }
			  $scope.DigitalDocumentsClone=docsClone;
			  var docsHash={}
			  var docRoots=[];
			  for(var i in docsClone)
			  {
				  var doc=docsClone[i];
				  docsHash["doc_" + doc.document_id]=doc;
				  if(doc.folder_id=="0")
				  {
					  docRoots.push(doc);
				  }
			  }
			  for(var i in docsClone)
			  {
				  var doc=docsClone[i];
				  var parent=docsHash["doc_" + doc.folder_id];
				  console.log(doc)
				  //console.log("doc",doc)
				  if(parent)
				  {
				  	
				  	parent.children.push(doc);
				  }
				  
			  }
			  var rootBranch={label:"Documents",name:"documents",isRoot:true,document_id:0,children:docRoots}
			  docsHash["doc_0"]=rootBranch;
			  vm.my_data=[rootBranch];
			  vm.docsHash=docsHash;
			  console.log("buildDocumentTree Done",rootBranch);
		  }

	
		$scope.editDigitalDocument=function(doc)
		{
			doc.edited=true;
		}
      $scope.setList=function(sr)
	 {
		 for(var i in sr)
		 {
			 sr[i].isTemplateBool=sr[i].isTemplate=="1"?true:false;
		 }
		 $scope.DigitalDocumentList=sr;
		 $scope.buildDocumentTree(sr);
		 
	 }
     $scope.loadList=function()
     {
	 	return CoreDocumentService.readAll()
	 	.then(function(si){
			console.log("LOad Done",si);
			$scope.setList(si);
			return si;
			});
     }
     $scope.deleteDigitalDocument=function(id)
     {
	 	CoreDocumentService.delete(id)
	 	.then($scope.loadList);
     }
	 $scope.saveDigitalDocumentFromTemplate=function(doc)
	 {
		 var parentId=doc.folder_id;
		 CoreDocumentService.createFromTemplate(doc)
		 .then(function(){$scope.loadListAndSelectBranch(parentId)});
		 /*
		 return CoreDocumentService.createFromTemplate(doc)
			.then( function( si )
			{
				$scope.loadList();
				return si;
			});
			*/
	 }
     $scope.saveDigitalDocument=function(doc)
	{
			doc.isTemplate=doc.isTemplateBool?1:0;
			if(doc.templateDocument)
			{
				return $scope.saveDigitalDocumentFromTemplate(doc)
			}
			return CoreDocumentService.save(doc)
			.then( function( si )
			{
				doc.label=doc.document_name;
				//$scope.loadList();
				if(si.lastInsertId/1)
				{
					doc.document_id=si.lastInsertId;
					$scope.docsHash["doc_"+doc.document_id]=doc;
               // $state.go("app.database.DigitalDocumentEdit",{id:si.lastInsertId/1});
				//$scope.editedDigitalDocument=$scope.loadDigitalDocumentById(si.lastInsertId);
				}
				doc.edited=false;
				$scope.selectedDigitalDocument=doc;
				return si;
			});
		
	}
	$scope.removeTreeBranch=function(branch)
	{
		var parentBranch=tree.get_parent_branch(branch);
		if(parentBranch)
		{
			tree.select_branch(parentBranch);
			for(var i in parentBranch.children)
			{
				var c=parentBranch.children[i];
				if(c.document_id==branch.document_id)
				{
					delete(parentBranch.children[i]);
					return;
				}
			}
		}
	}
	$scope.selectTreeBranch=function(docId)
	{
		tree.select_branch($scope.docsHash["doc_"+docId]);
	}
	$scope.loadListAndSelectBranch=function(parentId)
	{
		$scope.loadList()
		 .then(function(){
			 $timeout(function(){
			 console.log("!-----------loadListAndSelectBranch",parentId);
			 
			 $scope.selectTreeBranch(parentId);},2000);
			 })
	}
	$scope.archiveDigitalDocument=function(doc)
	{
		var parentId=doc.folder_id;
		console.log("-----------archiveDigitalDocument",parentId);
		doc.archived=1;
		 $scope.saveDigitalDocument(doc)
		 .then(function(){$scope.loadListAndSelectBranch(parentId)});
		 /*
		 .then($scope.loadList)
		 .then(function(){
			 $timeout(function(){
			 console.log("!-----------archiveDigitalDocumentDone",parentId);
			 
			 $scope.selectTreeBranch(parentId);},2000);
			 })*/
/*
		 .then(function(){
			 
			 //var b = tree.get_selected_branch();
			 console.log(tree);
			 $scope.removeTreeBranch(doc);
       // tree.remove_branch(b);
			 })*/
		 
	}
     $scope.loadList();
        }
		
		
		
		
})();




