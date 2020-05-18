(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service ("CustomFormManager",["$q","$http","CRUDService","CRUDManagers","DataImportExportService","$window",function($q,$http,CRUDService,CRUDManagers,DataImportExportService,$window)
		{
           /* var formCalculationHandler={ shareholders:function(item,form,fieldValues){ console.log("shareholders Handler",item,fieldValues); } ,shareholders:function(item,form,fieldValues){ console.log("shareholders Handler",item,fieldValues); } }
            */
           // "DataImportExportService","CoreLookupService","$window",
                
			var createCustomFormManager=function(formOptions)
			{
				//console.log("createCustomFormManager");
                formOptions=formOptions?formOptions:{};
				var custom_form={dontLoadScripts:formOptions.dontLoadScripts};
				custom_form.restService={
								readFormValuesForTemplate :function(id){return excuteService($q,$http,"api/FormTemplateService/readFormValuesForTemplate/" + id, {},"get");}
                                ,saveFormValue : function(params){return excuteService($q,$http,"api/FormValueService/save/", params,"post");}
								,saveMultipleFieldTemplates  :function(param){return excuteService($q,$http,"api/FormBuilderService/saveMultipleFieldTemplates/", param,"post");}
								,searchFormTemplatesByType :function(type){return excuteService($q,$http,"api/FormTemplateService/searchFormTemplatesByType/" + type, {},"get");}
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
                                ,readValueForParent:function(type,id){
                                    
                                    return excuteService($q,$http,"api/FormValueService/readValueForParent/" + type + "/" + id, {},"get");
                                }
				}
				var formTemplateManager=CRUDManagers.FormTemplate({makeHash:true});
				
				var formValueManager=CRUDManagers.FormValue({});
				
				var formFieldTemplateManager=CRUDManagers.FormFieldTemplate({});
			
				
				custom_form.manager={FormTemplate:formTemplateManager,FormValue:formValueManager,FormFieldTemplate:formFieldTemplateManager}
				
				var customFormManager=custom_form.manager;
				
                custom_form.manager.editorTemplate="from.value.editor.html"; 
                
				formTemplateManager.valueEditTemplates={checkbox:"boolean_value_editor.html",lookup:"lookup_value_editor.html",other:"default_value_editor.html"}
				
				formTemplateManager.containerTemplates={object:"box.html",grid:"box.html",checkbox:"boolean_fld.html",readonly:"readonly_fld.html",other:"default_fld.html",spacer:"spacer.html"}
						
				formTemplateManager.editTemplates={object:"object.html",grid:"grid.html",textarea:"textarea.html"
								,date:"date.html",datetime:"",checkbox:"checkbox.html",lookup:"lookup.html",readonly:"readonly_value.html"
                                ,other:"default_text.html"}

                
                customFormManager.exportSectionToExcel=function(section_id)
                {
                    var exportFields=[];
                    var flds=customFormManager.FormTemplate.fields;
                    for(var i in flds)
                    {
                         if(flds[i].data.section_id==section_id)
                             {
                                exportFields.push(flds[i]) 
                             }
                    }
                    customFormManager.exportToExcel(exportFields);
                }
                customFormManager.exportToExcel=function(flds)
                {
                    //flds=customFormManager.FormTemplate.fields;
                    var sheets=customFormManager.formToTable(flds,null,true);
                    var param={template:"",sheets:sheets,outputFiles:"export_form.xlsx"};
                   // console.log("----Form Export",param);
                    
                    //return;
                    
                    DataImportExportService.export("Excel",param)
                    .then(function(sr)
                    {
                        console.log("---------Export DONE",sr);
                        $window.location.href=sr.filePath;
                        });

                }
            customFormManager.formToTableSingleSheet=function(flds,tableData,sheetName)
            {
                sheetName=sheetName?sheetName:"Form";
                var sheetData=tableData[sheetName]?tableData[sheetName]:{data:[]};
                
                var formData=sheetData.data;
                tableData[sheetName]={name:sheetName,data:formData};
                var sectionsData=customFormManager.formToTableMultiple(flds,tableData);
                for(var s in sectionsData)
                {
                    var sectionData=sectionsData[s]; 
                    
                    formData.push([sectionData.name]);
                    for(var r in sectionData.data)
                    {
                        formData.push(sectionData.data[r]);    
                    }
                    
                    formData.push(newTableRow());  
                    formData.push(newTableRow());  
                }
                return tableData;
            }
            customFormManager.formToTableMultiple=function(flds,tableData,singleSheet)
            {
                var sectionData={};
                for(var i in flds)
                 {
                        var fld=flds[i];
                        sectionData[fld.data.section_id]={name:fld.data.section_id,data:[]}
                 }
                for(var i in flds)
                {
                    var fld=flds[i];
                    customFormManager.objectToTable(fld,sectionData[fld.data.section_id].data);
                }
                    //this.tableData=tableData;
                    return sectionData;
            }
            customFormManager.formToTable=function(flds,tableData,singleSheet,sheetName)
		    {
                tableData=tableData?tableData:{};
                
                 if(singleSheet)   
                     {
                         return customFormManager.formToTableSingleSheet(flds,tableData,sheetName);
                     }
			     else
                     {
                        var sectionData=customFormManager.formToTableMultiple(flds,tableData);
                        for(var i in sectionData)
                        {
                            tableData[i]=sectionData[i];    
                        }
                     }
                
                    return tableData;
            }
            
		function newTableRow()
		{
			return ["","","","",""];//,"","","","","","",""];
		}
		
		customFormManager.objectToTable=function(fld,data)
		{
			//console.log("FormBuilderManager.objectToTable",fld,data);
			data.push(newTableRow())
			data.push([fld.data.label]);
            /*
			for(var j in parentFld.children)
						{
							var childFld=parentFld.children[j];
							parentFldVals[childFld.data.name]=childFld.data.value;
						}
            */
            var firstChild=fld.children[0];
			for(var c in fld.children)
			{
				var valueCol=[""];
				var col=fld.children[c].data;
				
				valueCol.push(col.label);
				for(var r in firstChild.data.value)
				{
					
					valueCol.push(col.value[r].value);
				}
				data.push(valueCol);
			}
			return data;
		}
        customFormManager.arrayToTable=function(fld,data)
		{
			console.log("FormBuilderManager.arrayToTable",fld,data);
			data.push(newTableRow())
			data.push([fld.data.label]);
            /*
			for(var j in parentFld.children)
						{
							var childFld=parentFld.children[j];
							parentFldVals[childFld.data.name]=childFld.data.value;
						}
            */
            var labelRow=[""];
            data.push(labelRow);
            for(var c in fld.children)
			{
                var col=fld.children[c].data;
				
				labelRow.push(col.label);
            }
            var firstChild=fld.children[0];
            if(firstChild && firstChild.data)
            {
                
                for(var r in firstChild.data.value)
				{
					var valueRow=[""];
                    for(var c in fld.children)
			        {
				        var col=fld.children[c].data;
                
					   valueRow.push(col.value[r].value);
                    }
                    data.push(valueRow);
				}   
            }
			
			return data;
		}

		customFormManager.gridToTable=function(fld,data)
		{
			console.log("customFormManager.gridToTable",fld,data);
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
        
        custom_form.formToObject=function()
				{
					var containerToObject=function(container,index)
					{
						var contObj={};
						for(var j in container.children)
						{
							var child=container.children[j];
							var childVal="";
							if(child.data.value)
							{
                                child.data.value[index]=child.data.value[index]?child.data.value[index]:{row:index};
								childVal=child.data.value[index];
							}
                            
							contObj[child.data.name]=childVal;
						}
						return contObj;
					}
					
					custom_form.valueObject={};
					custom_form.fieldValues={};
                    
					for(var i in formTemplateManager.fields)
					{
						var parentFld=formTemplateManager.fields[i];
						var parentFldVals={};
						for(var j in parentFld.children)
						{
							var childFld=parentFld.children[j];
							parentFldVals[childFld.data.name]=childFld.data.value;
						}
						custom_form.fieldValues[parentFld.data.name]=parentFldVals;
						
					}
					
					for(var i in formTemplateManager.fields)
					{
						var objFld=formTemplateManager.fields[i]
						var objVal="";
						
						if(objFld.data.repeating*1 || objFld.data.data_type=="grid")
						{
							objVal=[];
							var firstChild=objFld.children[0];
							if(firstChild)
							{
								for(var r in firstChild.data.value)
								{
									objVal.push(containerToObject(objFld,r));
								}
							}
							//
						}
                        else
						{
							objVal=containerToObject(objFld,0);//objFld.data.value;
						}
						custom_form.valueObject[objFld.data.name]=objVal;
					}
					//formValueManager.editedItem.fieldValuesHash
                    
                   // console.log("formToObject",custom_form.fieldValues,custom_form.valueObject)
                    return custom_form.valueObject
				}
				customFormManager.onFormValueChange=function(fld,rowIndex,container,field_name)
				{
                    
				var container=customFormManager.FormTemplate.fieldsHash[fld.parentId];
                    
				//container=formTemplateManager.fieldsHash[fld.parentId];
				
                var contName=container.name;
				var containerValue=custom_form.valueObject[contName];
                var item=containerValue; 
				
                
				/*if(container.repeating*1)
				{
					item=item[rowIndex];
                   for(var i in item)
                        {
                            if(!item[i])
                                {
                                    item[i]={row:rowIndex,value:""};
                                }
                        }
                        
				}*/
               if(container.repeating*1  || container.data_type=="grid")
				{
					item=item[rowIndex];
				}
              
				//console.log("CustomFormController.onFieldValueChange: " + contName,item);
                console.log("----onFieldValueChange  " + contName,{formCalculationHandler:formCalculationHandler,item:item,containerValue:containerValue,fld:fld,rowIndex:rowIndex,container:container});    
                    
				if(formCalculationHandler)
				{
					if(formCalculationHandler[contName])
					{
						formCalculationHandler[contName](item,custom_form.valueObject,custom_form.fieldValues);
					}
					
				}
			}
                
				custom_form.manager.loadTemplateDetail=function(form_template_id)
				{
					return formTemplateManager.loadDetail(form_template_id)
					.then(function(sr){
						var editedItem=formTemplateManager.itemsHash["item" + form_template_id];
						
//						console.log("loadTemplateDetail",formTemplateManager.itemsHash,editedItem);
                        if(editedItem)
                            {
                               editedItem.formValues=formTemplateManager.editedItem.formValues 
                            }
						
						return sr;
						//return inherit(formTemplateManager.itemsHash["item" + sr.form_template_id],sr);
						
						})
				}
				custom_form.manager.loadFormValue=function(form_template_id,form_value_id)
				{
                    //console.log("loadFormValue",form_template_id,form_value_id)
					var loadTemplateFromValue=function(sr)
					{
                        //console.log("loadTemplateFromValue",sr)
                        return custom_form.manager.loadTemplateDetail(sr.form_template_id)
						.then(function(sr2){
							//formValueManager.setFieldValues()
							return formValueManager.loadDetail(form_value_id);;
							 ;})
					}
					if(!form_template_id && !form_value_id)
					{
						return formTemplateManager.loadList();
					}
					if(form_template_id && !form_value_id)
					{
						return formTemplateManager.loadList()
						.then(function(sr){return custom_form.manager.loadTemplateDetail(form_template_id);});
					}
					if(form_template_id && form_value_id)
					{
						//return formTemplateManager.loadDetail(form_template_id)
                        return custom_form.manager.loadTemplateDetail(form_template_id)
						.then(function(sr){
							
							return formValueManager.loadDetail(form_value_id)
							.then(function(sr2){
									if(!(form_value_id*1))
									{
										sr2.form_template_id=form_template_id;
									}
									return sr2;
								})
							
							
							});
					}
					if(!form_template_id && form_value_id)
					{
						return formValueManager.loadDetail(form_value_id) 
						.then(function(sr){return loadTemplateFromValue(sr)
							
							 ;});
					}
					
				}
				
				
				
                
                
				formValueManager.createNew=function(param)
				{
					var defaultVal={description:"New Form Value",form_template_id:formTemplateManager.editedItem.form_template_id}
					if(param)
					{
						inherit(defaultVal,param);
					}
					return defaultVal;
				}

				formValueManager.deleteValueRow=function(fld,index)
				{
					if(confirm("Are you sure?"))
					{
						var flds=[fld];
						if(fld.children.length){flds=fld.children;}
						for(var i in flds)
						{
							flds[i].data.value.splice(index,1);
						}
						custom_form.formToObject();
					}
				}
				
				formValueManager.addValueRow=function(fld)
				{
                    console.log("addValueRow",fld)
					if(fld.children.length)
					{
						for(var i in fld.children)
						{
							formValueManager.addValueRow(fld.children[i]);
						}
					}
					else
					{
						fld.data.value.push({row:fld.data.value.length,value:fld.data.default_value});
					}
					custom_form.formToObject()
				}
				
				formValueManager.initialiseFormValuesOld=function(flds)
				{
					var fieldValuesHash={};
					for(var i in flds)
					{
						var fld=flds[i];
                        var default_value=fld.default_value;
                        var row_values=default_value.split(",");
						var val=[{row:0,value:fld.default_value}];
						var fldVal={form_field_template_id:fld.form_field_template_id,field_value:val}
						
						fieldValuesHash["item"+fld.form_field_template_id]=fldVal;
						
						fld.value=val;
						
					}
					formValueManager.editedItem.fieldValuesHash=fieldValuesHash;
					
				}
				formValueManager.initialiseFormValues=function(flds)
				{
                    //console.log("000000000000000000-initialiseFormValues")
					var fieldValuesHash={};
					for(var i in flds)
					{
						var fld=flds[i];
                        var default_value=fld.default_value;
                        var row_values=default_value.split(",");
                        var val=[];
                        for(var r in row_values)
                            {
                                val.push({row:r,value:row_values[r]})
                            }
						//var val=[{row:0,value:fld.default_value}];
//						var val=[{row:0,value:fld.default_value + "_0"},{row:1,value:fld.default_value+"_1"}];
						var fldVal={form_field_template_id:fld.form_field_template_id,field_value:val}
						
						fieldValuesHash["item"+fld.form_field_template_id]=fldVal;
						
						fld.value=val;
						
					}
					formValueManager.editedItem.fieldValuesHash=fieldValuesHash;
					
				}
				formValueManager.setFieldValues=function(formVal)
				{
					
					formVal=formVal?formVal:formValueManager.editedItem;
					
				//	console.log("formValueManager.setFieldValues",formVal)

					for(var i in formVal.fieldValues)
					{
						var val=formVal.fieldValues[i];
						var fieldValue=formValueManager.editedItem.fieldValuesHash["item"+val.form_field_template_id];
						
						//var fldTemplate=formTemplateManager.fieldsHash["item"+val.form_field_template_id];
						if(fieldValue)
						{
							for(var row in val.field_value)
							{
								var fldRowValue=val.field_value[row];
								if(typeof(fldRowValue)!="object")
								{
									val.field_value[row]={row:row,value:fldRowValue}
								}
								
							}
							inherit(fieldValue,val);
							/*fldTemplate.value=val.field_value;*/
						}
					}
				}
				
				formValueManager.afterDetailLoaded=function(formVal)
				{
					//console.log("formValueManager.afterDetailLoaded",formVal.fieldValues);
					formValueManager.initialiseFormValues(formTemplateManager.editedItem.form_field_templates);
					formValueManager.setFieldValues();
					custom_form.formToObject();
					return formVal;
				};
				
				//form_field_template_id
				
				formTemplateManager.afterDetailLoaded=function(tempDetail)
				{
					
					if(typeof(tempDetail)!="object")
					{
					tempDetail={};
					formTemplateManager.editedItem=tempDetail;
					}
					//console.log("formTemplateManager.afterDetailLoaded");
                    if(!custom_form.dontLoadScripts)
                    {
					loadScript("api/FormBuilderService/readFormScripts/" + tempDetail.form_template_id,"scriptContainer",true);
					}
					return custom_form.restService.readFormValuesForTemplate(tempDetail.form_template_id)
					.then(function(sr){
						tempDetail.formValues=sr;
						formTemplateManager.initialiseForm();
						formTemplateManager.readRequiredLookups();
						formTemplateManager.formDataLoaded=true;
						custom_form.formToObject();
						return sr;
						});
				};
				formTemplateManager.initialiseForm=function(form)
				{
					formTemplateManager.setFieldTemplates(formTemplateManager.editedItem.form_field_templates);
					//formTemplateManager.initialiseFormValues(formTemplateManager.editedItem.form_field_templates);
					
					formTemplateManager.initialiseTree();
                    formTemplateManager.loadUniqueSections();
				}
                formTemplateManager.loadUniqueSections=function()
				{
                    var sectionsHash={}
                    formTemplateManager.formSections=[];
                    //console.log("loadUniqueSections")
                    for(var i in formTemplateManager.fields)
                        {
                            var fld=formTemplateManager.fields[i].data;
                            sectionsHash[fld.section_id]=fld.section_id;
                        }
                    for(var i in sectionsHash)
                        {
                            formTemplateManager.formSections.push(sectionsHash[i]);
                        }
                    custom_form.manager.formSections=formTemplateManager.formSections;
                    //console.log("loadUniqueSections",formTemplateManager.formSections,sectionsHash)
                    
                }
				formTemplateManager.readRequiredLookups=function()
				{
					formTemplateManager.requiredLookups={};
					var lookupsToLoad={};
					var loadLookupRequired=false;
					for(var i in formTemplateManager.editedItem.form_field_templates)
					{
						var fieldTemplate=formTemplateManager.editedItem.form_field_templates[i];
						if(fieldTemplate.lookup_id)
						{
							
							var loaded=formTemplateManager.lookupManager.lookups[fieldTemplate.lookup_id]?true:false;
							if(!loaded)
							{
								lookupsToLoad[fieldTemplate.lookup_id]={name:fieldTemplate.lookup_id};
								loadLookupRequired=true;
							}
							formTemplateManager.requiredLookups[fieldTemplate.lookup_id]={name:fieldTemplate.lookup_id,loaded:loaded};
							
						}
						//formTemplateManager.requiredLookups
					}
					
					//console.log("readRequiredLookups",lookupsToLoad);
					if(lookupsToLoad)
					{
						formTemplateManager.lookupManager.loadRequiredLookups(lookupsToLoad);
					}
				}
				formTemplateManager.initialiseTree=function(form)
				{
					formTemplateManager.treeManager=new TreeManager();
					formTemplateManager.treeOptions={idField:"form_field_template_id",children_field:"fields",parentId:"parent_id",label:"label",includeFields:["description","tags"]}
					formTemplateManager.treeManager.makeTree(formTemplateManager.editedItem.form_field_templates,formTemplateManager.treeOptions);
					formTemplateManager.fields=formTemplateManager.treeManager.tree;
					formTemplateManager.fieldsHash=formTemplateManager.treeManager.objHash;
					
					formTemplateManager.editedItem.fields=formTemplateManager.fields;
										
					//formTemplateManager.setFieldTemplates(formTemplateManager.editedItem.form_field_templates);
				}
				
				
				formTemplateManager.setDesignValueEditor=function(field)
				{
					field.designValueEditor=getAttributeValue(formTemplateManager.valueEditTemplates,field.data_type,formTemplateManager.valueEditTemplates.other);
				//	formTemplateManager.valueEditTemplates,field.data_type
				}
				
				formTemplateManager.setFieldTemplates=function(flds)
				{
					/*
						var defaultContainerTemplates={object:"box.html",grid:"box.html",other:"default_fld.html",spacer:"spacer.html"}
						
						var defaultEditTemplates={object:"object.html",grid:"grid.html",textarea:"textarea.html"
								,date:"date.html",datetime:"",checkbox:"checkbox.html",lookup:"lookup.html",other:"default_text.html"}
						
						var detailTemplate={object:{container:"box.html",field:"object.html"}
						,grid:{container:"box.html",field:"grid.html"}
						,spacer:{container:"spacer.html",field:"spacer.html"}
						,other:{container:"default_fld.html",field:"default_fld.html"}
						}*/
				
						for(var i in flds)
						{
							var fld=flds[i];
							var fldTemplate=getAttributeValue(formTemplateManager.editTemplates,fld.data_type,formTemplateManager.editTemplates.other);
							var containerTemplate=getAttributeValue(formTemplateManager.containerTemplates,fld.data_type,formTemplateManager.containerTemplates.other);
							fld.template={container:containerTemplate,field:fldTemplate}
					
							if(fld.data_type=="object" && fld.repeating/1) { fld.template.field="object-grid.html";}
							if(fld.container_template)
							{
								//fld.template.container=fld.container_template
							}
							if(fld.field_template)
							{
								//fld.template.field=fld.field_template
							}
						}
			
				}
				
				
				formTemplateManager.deleteFieldTemplate=function(fld,index)
				{
                    
					var parentId=fld.parentId;
                    var parentNode = formTemplateManager.treeManager.treeHash[parentId];
					//var parentArray = formTemplateManager.treeManager.treeHash[parentId];
					var parentArray=parentNode?parentNode.children:formTemplateManager.fields;
					
                    //console.log("deleteFieldTemplate",{parentNode:parentNode,fld:fld,index:index})
					if(confirm("Are you sure? "))// + parentId + "-" + parentArray.length))
					{
						formFieldTemplateManager.delete(fld.data.form_field_template_id)
						.then(function(){
							parentArray.splice(index,1);
						})
					}
				}
				formTemplateManager.newFieldTemplateOld=function(type,index,parent_id)
				{
                    parent_id=parent_id?parent_id:0;
                    
					index=index?index:0;
					
					index = index*1 + 1;
								
					var containerField={name:"new_" + type + index,label:"New " + type + index , data_type:type,width:12,children:[1,2,3]};
					var singleField={name:"new_" + type + index,label:"New " + type + index,data_type:type,width:4,children:[]};
					
					var objFields={object:containerField,grid:containerField,other:singleField}
					
					var fldData=getAttributeValue(objFields,type,objFields.other);
                    
                    
					
					var fld={label:fldData.label,data:fldData,children:[] }
					
                    CRUDService.getUniqueId().then(function(sr){
                        fldData.form_field_template_id=fld.id=sr.uniqueId;
                        formTemplateManager.treeManager.treeHash["item"+sr.uniqueId]=fld;
                        fldData.parentId="item"+parent_id;
                        })
                    
					for(var i in fldData.children)
					{
						fld.children.push(formTemplateManager.newFieldTemplate('text',i))
					}
					
					var flds=[fldData];
					formTemplateManager.setFieldTemplates(flds);
					return fld;
				}
                formTemplateManager.newFieldTemplate=function(type,index,parent_id)
				{
                    parent_id=parent_id?parent_id:0;
                    
					index=index?index:0;
					
					index = index*1 + 1;
								
					var objField={name:"new_" + type + index,label:"New " + type + index , data_type:type,width:12,children:[1,2,3]};
                    var gridObject={width:12,children:[1,2,3],repeating:true};
					var singleField={name:"new_" + type + index,label:"New " + type + index,data_type:type,width:4,children:[]};
					
					var objFields={object:objField,grid:gridObject,other:singleField}
					
					var fldData=getAttributeValue(objFields,type,objFields.other);
                    
                    
					
					var fldNode={label:fldData.label,data:fldData,children:[] }
					
                    return CRUDService.getUniqueId().then(function(sr){
                        fldData.form_field_template_id=fldNode.id=sr.uniqueId;
                        fldNode.label=fldData.label=type + " " + sr.uniqueId;
                        fldData.name=type +"_"+ sr.uniqueId;
                        fldData.data_type=type;
                        
                        formTemplateManager.treeManager.treeHash["item"+sr.uniqueId]=fldNode;
                        //fldData.parentId="item"+parent_id;
                        for(var i in fldData.children)
                            {
                                formTemplateManager.addFieldTemplate(fldNode,"text");
                                //fld.children.push(formTemplateManager.newFieldTemplate('text',i))
                            }
                            var flds=[fldData];
					       formTemplateManager.setFieldTemplates(flds);
                            return fldNode;
                        })
                    
					
					
					
				}
				
				formTemplateManager.addFieldTemplateOld=function(container,type)
				{
					var fld=formTemplateManager.newFieldTemplate(type)
					var parentId=container?"item" + container.id:"";
					var parent=container?container.children:formTemplateManager.fields;
					fld.parentId=parentId;
					parent.push(fld);
				}
                formTemplateManager.addFieldTemplate=function(container,type)
				{
					formTemplateManager.newFieldTemplate(type)
                    .then(function(fld)
					{
                        
                        var parentId=container?"item" + container.id:"";
                        var parent=container?container.children:formTemplateManager.fields;
                        fld.parentId=parentId;
                        parent.push(fld);
                    })
				}
				
				if(formOptions)
				{
					inherit(formValueManager,formOptions.FormValue) 
					inherit(formTemplateManager,formOptions.FormTemplate) 
				}
				return custom_form;
			}
			return {FormManager:function(options){return createCustomFormManager(options)}};
			
		}])
	
             
 }(window.angular));