var bmReferenceDependencies={
			"bm.reference":[
                        'app/References/content/ReferenceController.js'
						
						]
					};
					
addDependencyToApp(bmReferenceDependencies);

bmReferenceRoutes={
			'app.references':
				{
					url: '/references'
					,data : { title: 'References',onLoad:"referenceOnPageLoad"}
					,templateUrl: 'app/References/content/list.php'
					,resolve: ["bm.reference"]
					,controller: 'ReferenceController'
				}
			};	

					
  addRoutesToApp(bmReferenceRoutes);

