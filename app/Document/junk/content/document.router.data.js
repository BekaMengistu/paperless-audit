
documentRoutes={
			'app.document':
				{
					url: '/document'
					,data : { title: 'Digital Documents' }
					,templateUrl: 'app/Document/content/mainPage.php'
					,resolve: ['angularBootstrapNavTree', "app/Document/content/coreServices.js",'app/Document/content/DigitalDocumentsController.js']
					,controller: 'DigitalDocumentsController'
				}
			,'app.document2':
				{
					url: '/document2'
					,data : { title: 'Digital Documents' }
					,templateUrl: 'app/Document/content2/documentTree.php'
					,resolve: ['angularBootstrapNavTree','ui.tree.grid', "app/crud/document/content/Document.services.js",'app/Document/content2/DocumentController.js']
					,controller: 'DocumentController'
				}
			
			};			
   addRoutesToApp(documentRoutes);