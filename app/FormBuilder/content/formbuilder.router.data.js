var bmFbuilderDependencies={
			"bm.formbuilder":[
								"libs/html5-sortable-angularjs-master/lib/html5-sortable.js"
								//,"app/FormBuilder/content/formbuilder.services.js"
								//,'app/FormBuilder/content/FormBuilderController.js'
								
								,"app/FormBuilder/content/form.services.js"
								//,'app/FormBuilder/content/form.controllers.js'
								,'app/FormBuilder/content/form.controllers2.js'
								
							 ]
					};
					
addDependencyToApp(bmFbuilderDependencies);

fbRoutes={
			'app.tools.form':
				{
					url:'/form'
					,templateUrl:"app/FormBuilder/content/forms.main.html"
					,data : { title: 'Form Builder',hideFooter:true,forwardLink:"app.tools.form.list",onLoad:"initializeFormBuilderPage"}
					,controller: 'CustomFormController2'
					,resolve:["bm.formbuilder"]
				}
				,'app.tools.form.list':
				{
					url:'/list'
					,templateUrl:"app/FormBuilder/content/forms.list.html"
					,data : { title: 'Form Builder',onLoad:"initializeFormListPage"}
					,resolve:["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
				}
				,'app.tools.form.design':
				{
					url:'/design'
					,templateUrl:"app/FormBuilder/content/design/form.design.html"
					,data : { title: 'Form Builder',onLoad:"initializeFormDesignPage"}
					,resolve:["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
				}
				,'app.tools.form.design.detail':
				{
					url:'/{form_template_id}'
					//,template:"<div>Design Detail</div>"
					,templateUrl:"app/FormBuilder/content/form.design.detail.html"
					,data : { title: 'Form Builder',onLoad:"initializeFormDesignDetailPage"}
					,controller: 'CustomFormDesignController2'
					,resolve:["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
				}
				,'app.tools.form.fill':
				{
					url:'/fill'
					,templateUrl:"app/FormBuilder/content/fill/form.fill.html"
					,data : { title: 'Form Fill',onLoad:"initializeFormFillPage"}
					,resolve: ["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
					,controller: 'CustomFormFillController2'
				}	
				,'app.tools.form.fill.list':
				{
					url:'/{form_template_id}'
					,templateUrl:"app/FormBuilder/content/fill/form.value.list.html"
					,data : { title: 'Form Fill',onLoad:"initializeFormFillListPage"}
					,resolve: ["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
				}	
				,'app.tools.form.fill.detail':
				{
					url:'/{form_template_id}/{form_value_id}'
					//url:'/{form_value_id}'
					,templateUrl:"app/FormBuilder/content/fill/form.fill.detail.html"
					,data : { title: 'Form Fill',onLoad:"initializeFormFillDetailPage"}
					,resolve: ["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
					//,controller: 'CustomFormFillController2'
				}
                ,'app.tools.form.preview':
				{
					url:'/preview/{form_template_id}/{form_value_id}'
					//url:'/{form_value_id}'
					,templateUrl:"app/FormBuilder/content/form.preview.detail.html"
					,data : { title: 'Form Preview',onLoad:"initializeFormFillDetailPage"}
					,resolve: ["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
					,controller: 'CustomFormFillController2'
				}
                
    /*
			,'app.formbuilder':
				{
					url:'/formbuilder'
					,template:"<div ui-view></div>"
					,data : { title: 'Form Builder'}
					,controller: 'CustomFormController'
					,resolve:[]
				}
			
			,'app.formbuilder.test':
				{
					url:'/test'
					,templateUrl:"app/FormBuilder/content/form.test.html"
					,data : { title: 'Form Test'}
					,resolve: ["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
					,controller: 'CustomFormTestController'
				}	
			,'app.formbuilder.design':
				{
					url:'/design/{form_template_id}'
					,templateUrl:"app/FormBuilder/content/form.design.html"
					,data : { title: 'Form Design',module:"FormBuilder",viewName:"form.design"}
					,resolve: ["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
					,controller: 'CustomFormDesignController'
				}	
			,'app.formbuilder.fill':
				{
					url:'/fill/{form_template_id}/{form_value_id}'
					,templateUrl:"app/FormBuilder/content/form.fill.html"
					,data : { title: 'Form Fill'}
					,resolve: ["bm.formbuilder",'ui.bootstrap','mgcrea.ngStrap']
					,controller: 'CustomFormFillController'
				}		
			*/
			
			};			
   addRoutesToApp(fbRoutes);