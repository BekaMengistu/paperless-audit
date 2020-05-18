(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "FormBuilderService", function( $q,$http )
	{
		return {
			saveMultipleFieldTemplates  :function(param){return excuteService($q,$http,"api/FormBuilderService/saveMultipleFieldTemplates/", param,"post");}
			
			,readFormTemplates :function(){return excuteService($q,$http,"api/FormTemplateService/readAll/", {},"get");}
    		,readFormTemplateDetail: function(id){return excuteService($q,$http,"api/FormTemplateService/readDetailById/" + id, {},"get");}
    		,saveFormTemplate : function(params){return excuteService($q,$http,"api/FormTemplateService/save/", params,"post");}
    		,deleteFormTemplate: function(id){return excuteService($q,$http,"api/FormTemplateService/delete/" + id, {},"delete");}

			,readFieldTemplate :function(){return excuteService($q,$http,"api/FormFieldTemplateService/readAll/", {},"get");}
			,readFieldTemplateForForm :function(){return excuteService($q,$http,"api/FormFieldTemplateService/readAll/", {},"get");}
    		,readFieldTemplateDetail: function(id){return excuteService($q,$http,"api/FormFieldTemplateService/readDetailById/" + id, {},"get");}
    		,saveFieldTemplate : function(params){return excuteService($q,$http,"api/FormFieldTemplateService/save/", params,"post");}
    		,deleteFieldTemplate: function(id){return excuteService($q,$http,"api/FormFieldTemplateService/delete/" + id, {},"delete");}
			,deleteMultipleFieldTemplates:function(params){return excuteService($q,$http,"api/FormBuilderService/deleteMultipleFieldTemplates/", params,"post");}
			
			
			
			,readFormValue :function(){return excuteService($q,$http,"api/FormValueService/readAll/", {},"get");}
    		,readFormValueDetail: function(id){return excuteService($q,$http,"api/FormValueService/readDetailById/" + id, {},"get");}
    		,saveFormValue : function(params){return excuteService($q,$http,"api/FormValueService/save/", params,"post");}
    		,deleteFormValue: function(id){return excuteService($q,$http,"api/FormValueService/delete/" + id, {},"delete");}
			,saveValueMultiple : function(params){return excuteService($q,$http,"api/FormValueService/saveMultiple/", params,"post");}
			,readFormFieldValues : function(id){return excuteService($q,$http,"api/FormValueService/readFormFieldValues/" + id, {},"get");}
			
			,readFieldValue :function(){return excuteService($q,$http,"api/FormFieldValueService/readAll/", {},"get");}
    		,readFieldValueDetail: function(id){return excuteService($q,$http,"api/FormFieldValueService/readDetailById/" + id, {},"get");}
    		,saveFieldValue : function(params){return excuteService($q,$http,"api/FormFieldValueService/save/", params,"post");}
    		,deleteFieldValue: function(id){return excuteService($q,$http,"api/FormFieldValueService/delete/" + id, {},"delete");}
			
			};
	})		
	
	
	.factory("FormBuilderManager",["FormBuilderService","DataImportExportService","CoreLookupService","$window",
		function(FormBuilderService,dataImportExportService,CoreLookupService,$window){
		
		
		function FormBuilderManager(options)
		{
			this.customLookups=[];
			this.formTemplate={};
			this.fields=[];
			this.treeManager=NewTreeManager();
			this.treeOptions={idField:"form_field_template_id",parentId:"form_template_id",label:"document_name",includeFields:["description","tags"]}
			this.editedAppPermission="";
			this.activeFields=[];
			this.currentSection={sectionId:"",fields:[]};
			this.tableData={};
			this.jsondata={};
		}
		//$scope.customLookupNames=["work_done","comment","issues","management_letter","qualification_point"];
		FormBuilderManager.prototype.exportToExcel=function(flds)
		{
            console.log("---------------------Form Export to excel");
			var sheets=this.formToTable(flds);
			var param={template:"",sheets:sheets};
			dataImportExportService.export("Excel",param)
			.then(function(sr)
			{
				console.log("FormBuilderManager.prototype.exportToExcel",sr);
				$window.location.href=sr.filePath;
				});
		}
		FormBuilderManager.prototype.formToTable=function(flds)
		{
			console.log("FormBuilderManager.prototype.formToTable",flds);
			var tableData={};
			for(var i in flds)
			{
				var fld=flds[i];
				tableData[fld.section_id]={name:fld.section_id,data:[]}
			}
			for(var i in flds)
			{
				var fld=flds[i];
				if(fld.data_type=="grid")
				{
					this.gridToTable(fld,tableData[fld.section_id].data);
				}
				else
				{
					this.objectToTable(fld,tableData[fld.section_id].data);
				}
			}
			this.tableData=tableData;
			return tableData;
		}
		function newTableRow()
		{
			return ["","","","",""];//,"","","","","","",""];
		}
		
            
		FormBuilderManager.prototype.initialize=function()
		{
			this.customLookups=[];
			this.formTemplate={};
			this.fields=[];
			this.treeManager=NewTreeManager();
			this.treeOptions={idField:"form_field_template_id",parentId:"form_template_id",label:"document_name",includeFields:["description","tags"]}
			this.editedAppPermission="";
			this.activeFields=[];
			this.currentSection={sectionId:"",fields:[]};
			this.tableData={};
			this.jsondata={};
		}
		
		FormBuilderManager.prototype.gridToObject=function(fld)
		{
			var objectData= fld.repeating/1 ? [] : {};
			if(fld.repeating/1)
			{
				for(var r in fld.fields[0].value)
				{
					var row={}
					for(var c in fld.fields)
					{
						var col=fld.fields[c];
						if(col)
						{
							if(typeof(col.value)=="object")
							{
								col.value[r].row=r;
								row[col.name]=col.value[r];
							}
						}
					}
					objectData.push(row);
				}
			}
			else
			{
				for(var c in fld.fields)
					{
						var col=fld.fields[c];
						objectData[col.name]=col.value[0];
						var addressedVal={c:c,r:0,value:col.value[0]}
						//objectData[col.name]=addressedVal;
					}
			}
			return objectData;
			
		}
		FormBuilderManager.prototype.formToObject=function(flds)
		{
			console.log("FormBuilderManager.prototype.formToObject",flds);
			var objectData={};
			
			
			for(var i in flds)
			{
				var fld=flds[i];
				if(fld.data_type=="grid" || fld.data_type=="object")
				{
					objectData[fld.name]=this.gridToObject(fld);
				}
				else if(!fld.parent_id/1)
				{
					objectData[fld.name]=fld.repeating/1 ? fld.value:fld.value[0];
				}
			}
			
			return this.fieldValues= objectData;
		}
		
		FormBuilderManager.prototype.loadCustomLookups=function(index)
		{
			var __this=this;
			return CoreLookupService.readAllLookupsByTypes()
			.then(function(sr){return __this.customLookups=sr;});
			
			/*if(index<$scope.customLookupNames.length)
			{
				var lookupName=$scope.customLookupNames[index];
				CoreLookupService.readLookupByType(lookupName)
				.then(function(sr){
					$scope.customLookups[lookupName]=sr;
					$scope.loadCustomLookups(index+1);
					});
			}*/
		}
		FormBuilderManager.prototype.exportToExcel=function(flds)
		{
			var sheets=this.formToTable(flds);
			var param={template:"",sheets:sheets};
			dataImportExportService.export("Excel",param)
			.then(function(sr)
			{
				console.log("FormBuilderManager.prototype.exportToExcel",sr);
				$window.location.href=sr.filePath;
				});
		}
		FormBuilderManager.prototype.formToTable=function(flds)
		{
			console.log("FormBuilderManager.prototype.formToTable",flds);
			var tableData={};
			for(var i in flds)
			{
				var fld=flds[i];
				tableData[fld.section_id]={name:fld.section_id,data:[]}
			}
			for(var i in flds)
			{
				var fld=flds[i];
				if(fld.data_type=="grid")
				{
					this.gridToTable(fld,tableData[fld.section_id].data);
				}
				else
				{
					this.objectToTable(fld,tableData[fld.section_id].data);
				}
			}
			this.tableData=tableData;
			return tableData;
		}
		function newTableRow()
		{
			return ["","","","",""];//,"","","","","","",""];
		}
		
		FormBuilderManager.prototype.objectToTable=function(fld,data)
		{
			console.log("FormBuilderManager.objectToTable",fld,data);
			data.push(newTableRow())
			data.push([fld.label]);
			
			for(var c in fld.fields)
			{
				var valueCol=[""];
				var col=fld.fields[c];
				
				valueCol.push(col.label);
				for(var r in col.value)
				{
					
					valueCol.push(col.value[r].value);
				}
				data.push(valueCol);
			}
			return data;
		}

		FormBuilderManager.prototype.gridToTable=function(fld,data)
		{
			console.log("FormBuilderManager.gridToTable",fld,data);
			data.push(newTableRow())
			data.push([fld.label]);
			var headRow=[""];
			for(var col in fld.fields)
			{
				headRow.push(fld.fields[col].label);
			}
			data.push(headRow);
			for(var r in fld.fields[0].value)
			{
				var row=[""];
				for(var c in fld.fields)
				{
					var col=fld.fields[c];
					row.push(col.value[r].value);
				}
				data.push(row);
			}
			return data;
		}
		
		FormBuilderManager.prototype.saveFieldTemplate=function(fld)
		{
			var fldNames=["label","name","section_id","data_type","placeholder"];
			for(var i in fldNames)
			{
				fld[fldNames[i]]=fld[fldNames[i]]?fld[fldNames[i]]:"";
			}
			
			return FormBuilderService.saveFieldTemplate(fld);
		}
		FormBuilderManager.prototype.saveMultipleFieldTemplates=function(params)
		{
			params=this.reindexFields(params);
			return FormBuilderService.saveMultipleFieldTemplates(params);
		}
		FormBuilderManager.prototype.reindexFields=function(flds)
		{
			for(var i in flds)
			{
				var fld=flds[i];
				fld.display_order=i/1+1;
				if(fld.fields)
				{
					this.reindexFields(fld.fields);
				}
				
			}
			return flds;
		}
		
		FormBuilderManager.prototype.setCurrentSection=function(sec)
		{
			console.info("FormBuilderManager.setCurrentSection",sec);
			this.currentSection.sectionId=sec;
			this.currentSection.fields.splice(0,this.currentSection.fields.length);
			
			
			for(var i in this.fields)
			{
				var fld=this.fields[i];
				if(fld.section_id==sec)
				{
					this.currentSection.fields.push(fld);
				}
			}
		}
		FormBuilderManager.prototype.getFormSections=function(flds)
		{
			this.formSections={};
			this.formSectionsArray=[];
			
			var activeSectionId=this.activeSectionId;
			for(var i in flds)
			{
				var fld=flds[i];
				this.formSections[fld.section_id]=fld.section_id;
				
				if(!activeSectionId)
				{
					activeSectionId=fld.section_id;
				}
			}
			this.setCurrentSection(activeSectionId);
			this.exitDrillDown();
			for(var i in this.formSections)
			{
				this.formSectionsArray.push(this.formSections[i]);
			}
			
			return this.formSections;
		}
		/*FormBuilderManager.prototype.saveFieldTemplates=function(savedFlds)
		{
			var itemArray=[];
			for(var i in savedFlds)
			{
				var fld=savedFlds[i];
				fld.display_order=i+1;
				itemArray.push(fld);
				if(fld.fields)
				{
					for(var j in fld.fields)
					{
						var child=fld.fields[j];
						child.display_order=j+1;
						child.parent_type="form_field_template";
						child.parent_id=i;
						itemArray.push(child);
					}
				}
				
			}
			this.saveFieldTemplate(itemArray,0);
		}*/
		FormBuilderManager.prototype.newField=function(data_type)
		{
			data_type=data_type?data_type:"text";
			var defaultFields={object:{data_type:"object",children:3,fields:[],width:6}
			,grid:{data_type:"grid",children:3,fields:[],width:6,repeating:1}}
			
			var fld={form_template_id:this.formTemplate.form_template_id, name:"new_field",label:"New Field", data_type:data_type, required:"", default_value:"", placeholder:"", parent_id:"", parent_type:"", repeating:"", lookup_id:"", width:4, archived:""};
			
			var fldTemp=defaultFields[data_type];
			if(fldTemp)
			{
				for(var i in fldTemp)
				{
					fld[i]=fldTemp[i];
				}
			}
			if(fld.children)
			{
				for(var i=0;i<fld.children;i++)
				{
					var newfld=this.newField();
					//newfld.parent=fld;
					fld.fields.push(newfld);
				}
			}
			return fld;
			//this.formTemplate=sr;
		}
		FormBuilderManager.prototype.removeField=function(parent,index)
		{
			parent=parent?parent:this;
			parent.fields.splice(index,1);
		}
		
		
		FormBuilderManager.prototype.addField=function(parent,type)
		{
			
			//var parent_id=parent?parent.form_field_template_id:0;
			var real_parent=parent?parent:this;
			
			var arry=real_parent.fields?real_parent.fields:[];
			var _formBuilderManager=this;
			//var fld={form_template_id:this.formTemplate.form_template_id, name:"new_field",label:"New Field", data_type:"", required:"", default_value:"", placeholder:"", parent_id:"", parent_type:"", repeating:"", lookup_id:"", width:4, archived:""};
			
			var fld=this.newField(type);
			if(parent)
			{
				fld.parent_id=parent.form_field_template_id;
				fld.parent_type="form_field_template";
			}
			
			this.setFieldTemplates([fld]);
			this.formTemplate.form_field_templates.push(fld);
			arry.push(fld);
			return fld;
			//this.formTemplate=sr;
		}
		
		FormBuilderManager.prototype.drillDownOnObj=function(fld)
		{
			this.currentObject=fld;
		}
		FormBuilderManager.prototype.exitDrillDown=function(fld)
		{
			this.currentObject={fields:this.fields};
		}
		
		
		
		FormBuilderManager.prototype.deleteMultipleFieldTemplates=function(ids)
		{
			return FormBuilderService.deleteMultipleFieldTemplates(ids);
		}
		
		FormBuilderManager.prototype.deleteFieldTemplate=function(id)
		{
			return FormBuilderService.deleteFieldTemplate(id);
		}
		
		
		
		FormBuilderManager.prototype.setFormTemplateDetail=function(sr)
		{
			var _formBuilderManager=this;
			this.formTemplate=sr;
		}
		FormBuilderManager.prototype.saveFormValue=function()
		{
			
			var _formBuilderManager=this;
			
			var flds=this.formTemplate.form_field_templates;
			
			_formBuilderManager.formData=_formBuilderManager.formToObject(flds);
			
			var params={form_template_id:this.form_template_id,form_value_id:this.form_value_id,values:flds};
			
			return FormBuilderService.saveValueMultiple(params);
		}
		FormBuilderManager.prototype.loadFormValueDetail2=function(form_template_id,form_value_id)
		{
			var _formBuilderManager=this;
			this.form_template_id=form_template_id;
			this.form_value_id=form_value_id;
			
			console.log("FormBuilderManager.loadFormTemplateDetail",form_template_id,form_value_id);
			return this.loadFormTemplateDetail(form_template_id)
			.then(function()
				{
					for(var i in _formBuilderManager.fldsHash)
					{
						var item=_formBuilderManager.fldsHash[i];
						item.value=[{row:0,value:"test"}];//item.default_value];
					}
					if(form_value_id)
					{
						_formBuilderManager.loadFormValue(form_value_id);
					}
				}
			);
		}
		FormBuilderManager.prototype.loadFormValueDetail=function(form_template_id,form_value_id)
		{
			var _formBuilderManager=this;
			this.form_template_id=form_template_id;
			this.form_value_id=form_value_id;
			
			console.log("FormBuilderManager.loadFormTemplateDetail",form_template_id,form_value_id);
			
			
			return this.loadFormTemplateDetail(form_template_id)
			.then(function()
				{
					for(var i in _formBuilderManager.fldsHash)
					{
						var item=_formBuilderManager.fldsHash[i];
						item.value=[{row:0,value:item.default_value}];//item.default_value];
					}
					if(form_value_id)
					{
						return _formBuilderManager.loadFormValue(form_value_id);
					}
				}
			);
		}
		FormBuilderManager.prototype.loadFormValue=function(form_value_id)
		{
			var _formBuilderManager=this;
			
			
			console.log("FormBuilderManager.loadFormValue",form_value_id);
			return FormBuilderService.readFormFieldValues(form_value_id)
			.then(function(sr)
				{
					for(var i in sr)
					{
						var vl=sr[i];
						var item=_formBuilderManager.fldsHash["form_field_template" + vl.form_field_template_id];
						if(item)
						{
							item.form_field_value_id=vl.form_field_value_id;
							item.field_value_str=vl.field_value;//item.default_value];
							item.value=[];
							//eval("item.value=" + vl.field_value);
							
							eval("item.field_values=" + vl.field_value);
							for(var r in item.field_values)
							{
								if(typeof(item.field_values[r])=="object")
								{
									item.value[r]=item.field_values[r];	
								}
								else
								{
									item.value[r]={row:r,value:item.field_values[r]}	
								}
							}
						}
					}
					_formBuilderManager.formToObject(_formBuilderManager.fields)
					return sr;
				}
			);
		}
		
		FormBuilderManager.prototype.loadFormTemplateDetail=function(id)
		{
			var _formBuilderManager=this;
			return FormBuilderService.readFormTemplateDetail(id)
			.then(function(sr){
				_formBuilderManager.formTemplate=sr;
				_formBuilderManager.setFieldTemplates(sr.form_field_templates);
				_formBuilderManager.treeManager=NewTreeManager();
				_formBuilderManager.buildObjectTree();
				_formBuilderManager.getFormSections(_formBuilderManager.fields);
				return _formBuilderManager;
				});
		}
		FormBuilderManager.prototype.buildObjectTree=function()
		{
			var flds=this.formTemplate.form_field_templates;
			for(var i in flds)
			{
				var fld=flds[i];
				var parent_type=fld.parent_type?fld.parent_type:"item";
				fld.parent_id_full=parent_type + fld.parent_id;
			}
			//console.log("FormBuilderManager.buildObjectTree",flds);
			this.fldsHash=this.treeManager.addElements(flds,"form_field_template_id","form_field_template");
			console.log("FormBuilderManager.buildObjectTree",this.fldsHash);
			var treeOptions={parentId:"parent_id_full",children_field:"fields",includeFields:[]}
			this.fields=this.treeManager.buildTree(treeOptions,this.fldsHash);
			console.log("FormBuilderManager.buildObjectTree",this.fields);
		}
		
		FormBuilderManager.prototype.createItem=function(fld)
		{
			if(!fld.repeating)
			{
				return;
			} 
			for(var i in fld.fields)
			{
				var newFld=fld.fields[i];
				var rindex=newFld.value.length;
				newFld.value.push({row:rindex,value:newFld.default_value});
			}
			this.formToObject(this.fields)
			
		}
		FormBuilderManager.prototype.deleteItem=function(fld,index)
		{
			if(!fld.repeating)
			{
				return;
			} 
			if (confirm("Are you sure ? " + index))
			{
				for(var i in fld.fields)
				{
					var delFld=fld.fields[i];
					delFld.value.splice(index,1);
					this.formToObject(this.fields)
				}
			}
		}
		/*
		FormBuilderManager.prototype.saveFieldTemplate=function(flds,index)
		{
			var _FormBuilderManager=this;
			var fields={form_field_template_id:"",form_template_id:"", name:"",label:"", data_type:"", required:"", default_value:"", placeholder:"", parent_id:"", parent_type:"", repeating:"", lookup_id:"", width:"", archived:"",section_id:"",display_order:""};

			var item=flds[index];
			for(var i in fields)
			{
				var fldVal=item[i];
				if(typeof(fldVal)!="undefined")
				{
					fields[i]=fldVal;
				}
			}
			return FormBuilderService.saveFieldTemplate(fields)
			.then(function(sr){
				if(index+1<flds.length)
				{
					_FormBuilderManager.saveFieldTemplate(flds,index+1);
				}
				})
			
		}*/
		
		FormBuilderManager.prototype.setSingleFieldTemplate=function(fld)
		{
			var defaultEditTemplates={other:"default_text.html",textarea:"textarea.html",date:"date.html",datetime:"",checkbox:"checkbox.html",lookup:"lookup.html"}
			
			var fldTemplate=defaultEditTemplates[fld.data_type];
			
			fldTemplate=fldTemplate?fldTemplate:defaultEditTemplates.other;
			
			return fldTemplate;
		}
		
		FormBuilderManager.prototype.setFieldTemplates=function(flds)
		{
			var defaultTemplates={object:"object.html",grid:"box.html",other:"default_fld.html"};
			
			
			var detailTemplate={object:{container:"box.html",field:"object.html"}
					,grid:{container:"box.html",field:"grid.html"}
					,spacer:{container:"spacer.html"}
					,other:{container:"default_fld.html",field:"default_fld.html"}
					}
			
			for(var i in flds)
			{
				var fld=flds[i];
				fld.index=0;
				//fld.form_template_id=1;
				var temp=detailTemplate[fld.data_type]?detailTemplate[fld.data_type]:detailTemplate.other;
				fld.template={container:temp.container,field:temp.field};
				
				if(fld.data_type=="object" && fld.repeating)
				{
					fld.template.field="object-grid.html";
				}

				if(fld.data_type=="object"||fld.data_type=="grid")
				{
					this.setFieldTemplates(fld.fields);
				}
				else
				{
					fld.template.editor=this.setSingleFieldTemplate(fld);
				}
				
			}
			
		}
		
		var FormBuilderManagerFactory={create:function(options){
			var _formBuilderManager = new FormBuilderManager(options);
			_formBuilderManager.initialize();
			return _formBuilderManager;
			
			}};
		//console.log("/n-----------------------------------------------AppPermissionManager Factory");
		return FormBuilderManagerFactory;
		
		}])
             
 }(window.angular));