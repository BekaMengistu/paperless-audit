var bmDocumentDependencies={
			"bm.document":[
						'app/Document/content/Document.services.js'
						,'app/Document/content/digitalDocumentsController.js'
						,'app/Document/content/css/digital.document.css'
						
						]
					};
					
addDependencyToApp(bmDocumentDependencies);

var documentRoutes={
			'app.document':
				{
					url: '/document'
					,data : { title: 'Digital Documents',hideFooter:true }
					,templates: "<div>Document<div ui-view></div></div>"
					,templateUrl: 'app/Document/content/document.window.html'
					,resolve: ["bm.document"]
					,controller: 'DigitalDocumentsController'
				}
			,'app.document2':
				{
					url: '/document2'
					,data : { title: 'Digital Documents',hideFooter:true }
					,templates: "<div>Document<div ui-view></div></div>"
					,templateUrl: 'app/Document/content/document.window-2.html'
					,resolve: ["bm.document"]
					,controller: 'DigitalDocumentsController'
				}	
			,'app.document3':
				{
					url: '/document3'
					,data : { title: 'Digital Documents' }
					,templateUrl: 'app/Document/content2/documentTree.php'
					,resolve: ['angularBootstrapNavTree','ui.tree.grid', "app/crud/document/content/Document.services.js",'app/Document/content2/DocumentController.js']
					,controller: 'DocumentController'
				}
			
			};			
   addRoutesToApp(documentRoutes);