<?php
require_once (dirname(__FILE__) . '/includes/FormBuilderClass.php');

class FormBuilderServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
		//searchFormTemplatesByType
        $priority=100;
		$sa->mapRoute("get","/FormTemplateService/searchFormTemplatesByType/:type","FormBuilderServiceAdapter::searchFormTemplatesByType",$priority); 

        $sa->mapRoute("get","/FormValueService/readValueForParent/:type/:id","FormBuilderServiceAdapter::readFormValueForParent",$priority); 
		
		$sa->mapRoute("post","/FormTemplateService/save/","FormBuilderServiceAdapter::saveFormTemplate",$priority); 
		
		$sa->mapRoute("delete","/FormFieldTemplateService/delete/:id","FormBuilderServiceAdapter::deleteFormFieldTemplate",$priority); 
		
		$sa->mapRoute("get","/FormBuilderService/readFormScripts/:id","FormBuilderServiceAdapter::readFormScripts",$priority); 
		
		$sa->mapRoute("get","/FormValueService/readDetailById/:id","FormBuilderServiceAdapter::readFormValueDetail",$priority); 
		
		$sa->mapRoute("post","/FormValueService/save/","FormBuilderServiceAdapter::saveFormValue",$priority); 
		
		$sa->mapRoute("get","/FormTemplateService/readFormValuesForTemplate/:id","FormBuilderServiceAdapter::readFormValuesForTemplate",$priority); 
		
		$sa->mapRoute("get","/FormTemplateService/readDetailById/:id","FormBuilderServiceAdapter::readFormTemplateDetail",$priority); 
		
		$sa->mapRoute("get","/FormFieldTemplateService/readFieldTemplateForForm/:id","FormBuilderServiceAdapter::readFieldTemplateForForm",$priority); 
		
		$sa->mapRoute("post","/FormValueService/saveMultiple/","FormBuilderServiceAdapter::saveMultipleValues",$priority); 
		$sa->mapRoute("get","/FormValueService/readFormFieldValues/:id","FormBuilderServiceAdapter::readFormFieldValues",$priority); 
		 
		$sa->mapRoute("post","/FormBuilderService/saveMultipleFieldTemplates/","FormBuilderServiceAdapter::saveMultipleFieldTemplates",$priority);  
		
		$sa->mapRoute("post","/FormBuilderService/deleteMultipleFieldTemplates/","FormBuilderServiceAdapter::deleteMultipleFieldTemplates",$priority);  
	
		 
		 
    	/*$sa->mapRoute("get","/FormFieldTemplateService/readDetailById/:id","CrudServiceAdapter::FormFieldTemplate_readDetailById"); 
   		$sa->mapRoute("delete","/FormFieldTemplateService/delete/:id","CrudServiceAdapter::FormFieldTemplate_delete"); 
   	 	$sa->mapRoute("post","/FormFieldTemplateService/save/","CrudServiceAdapter::FormFieldTemplate_save"); 
    
		
		$sa->mapRoute("get","/FormFieldValueService/readAll/","CrudServiceAdapter::FormFieldValue_readAll"); 
    	$sa->mapRoute("get","/FormFieldValueService/readDetailById/:id","CrudServiceAdapter::FormFieldValue_readDetailById"); 
   		$sa->mapRoute("delete","/FormFieldValueService/delete/:id","CrudServiceAdapter::FormFieldValue_delete"); 
   	 	$sa->mapRoute("post","/FormFieldValueService/save/","CrudServiceAdapter::FormFieldValue_save"); 
    
		
		$sa->mapRoute("get","/FormTemplateService/readAll/","CrudServiceAdapter::FormTemplate_readAll"); 
    	$sa->mapRoute("get","/FormTemplateService/readDetailById/:id","CrudServiceAdapter::FormTemplate_readDetailById"); 
   		$sa->mapRoute("delete","/FormTemplateService/delete/:id","CrudServiceAdapter::FormTemplate_delete"); 
   	 	$sa->mapRoute("post","/FormTemplateService/save/","CrudServiceAdapter::FormTemplate_save"); 
    
		
		$sa->mapRoute("get","/FormValueService/readAll/","CrudServiceAdapter::FormValue_readAll"); 
    	$sa->mapRoute("get","/FormValueService/readDetailById/:id","CrudServiceAdapter::FormValue_readDetailById"); 
   		$sa->mapRoute("delete","/FormValueService/delete/:id","CrudServiceAdapter::FormValue_delete"); 
   	 	$sa->mapRoute("post","/FormValueService/save/","CrudServiceAdapter::FormValue_save"); 
		*/
	}
    

	public static function registerQueries($dbQueries)
	{
        $dbQueries["readFormValueForParent"] = "SELECT * FROM form_value WHERE  parent_type='#parent_type#' AND parent_id='#parent_id#'";

		$dbQueries["searchFormTemplatesByType"] = "SELECT * FROM form_template WHERE  type='#type#' ORDER BY form_template_id DESC";
		
		$dbQueries["readFieldTemplateForForm"] = "SELECT * FROM form_field_template WHERE  form_template_id='#form_template_id#' ORDER BY display_order";
		
		$dbQueries["readFormFieldValues"] = "SELECT * FROM form_field_value WHERE  form_value_id='#form_value_id#'";
		
		$dbQueries["deleteMultipleFieldTemplates"] = "DELETE FROM form_field_template WHERE form_field_template_id in (#ids#)";
		
		$dbQueries["deleteFieldTemplateWithChildren"] = "DELETE FROM form_field_template WHERE form_field_template_id = '#form_field_template_id#' OR parent_id = '#form_field_template_id#' ";
		
			return $dbQueries;
	}
	public static function readFormValueForParent($type,$id)
    {
       serveData("readFormValueForParent",array("parent_type"=>$type,"parent_id"=>$id)); 
    }
	public static function deleteFormFieldTemplate($id)
	{
		//serveData("deleteFieldTemplateWithChildren",array("form_field_template_id"=>$id));
		
		serveData("deleteFieldTemplateWithChildren",array("form_field_template_id"=>$id),QUERY_UPDATE);
	}
	
	public static function searchFormTemplatesByType($type)
	{
		serveData("searchFormTemplatesByType",array("type"=>$type));
	}
	
	public static function saveFormTemplate()
	{
		$params=getPostParams();
		$result=FormTemplate::save($params);
		echo(json_encode($result));
	}
	
	public static function saveFormValue()
	{
		$params=getPostParams();
		$result=FormValue::save($params);
		echo(json_encode($result));
	}
	
	
	public static function readFormScripts($id)
	{
		FormTemplate::readFormScripts($id);
	}

	public static function readFormValueDetail($id)
	{
		$result=FormValue::readDetail($id);
		/*
		$result=CrudServiceAdapter::_FormValue_readDetailById($id);
		$result=$result?$result:array("description"=>"New Value");
		if($result)
		{
			$fieldValues=dbFetchData("readFormFieldValues",array("form_value_id"=>$id));
			foreach($fieldValues as $i=>$v)
			{
				$v["field_value"]=json_decode($v["field_value"],true);
				$fieldValues[$i]=$v;
			}
			$result["fieldValues"]=$fieldValues;
		}*/
		echo(json_encode($result));
	}
	
	public static function readFormValuesForTemplate($id)
	{
		$result=FormTemplate::readFormValuesForTemplate($id);
		echo(json_encode($result));
	}

	public static function deleteMultipleFieldTemplates()
    {
		$params=getPostParams();
		$ids=get_attribute_value($params,"ids");
		
		$ids_str="";
		$sep="";
		
		foreach($ids as $id)
		{
			$ids_str=$ids_str.$sep.$id;
			$sep=",";
		}
    	serveData("deleteMultipleFieldTemplates",array("ids"=>$ids_str));
    } 
	
    public static function readFormFieldValues($id)
    {
    	serveData("readFormFieldValues",array("form_value_id"=>$id));
    } 
	public static function saveMultipleFieldTemplates()
    {
    	$params=getPostParams();
	
		$fields=get_attribute_value($params,"fields");
		
		$result=array("updated"=>0,"added"=>0);
		
		foreach($params as $fld)
		{
		//	$saveResult= addOrUpdateData($fld,"form_field_template_id","addform_field_template","updateform_field_template");
			
			$saveResult= CrudServiceAdapter::_FormFieldTemplate_save($fld);
			
			if($saveResult["lastInsertId"]/1)
			{
				$result["added"]++;
			}
			else
			{
				$result["updated"]++;
			}
			$children=get_attribute_value($fld,"fields");
			if($children && count($children))
			{
				$form_field_template_id = ($saveResult["lastInsertId"]/1)?$saveResult["lastInsertId"]:get_attribute_value($fld,"form_field_template_id");
				foreach($children as $child)
				{
					$child["parent_id"]=$form_field_template_id;
					$child["parent_type"]="form_field_template";
					$saveResult2= addOrUpdateData($child,"form_field_template_id","addform_field_template","updateform_field_template");
					if($saveResult2["lastInsertId"]/1)
					{
						$result["added"]++;
					}
					else
					{
						$result["updated"]++;
					}
				}
			}
			
				
		}
		
		
       
		echo(json_encode($result));
    } 
	
		
	public static function saveMultipleValues()
    {
    	$params=getPostParams();
	
		$form_value_id=get_attribute_value($params,"form_value_id");
	
		$form_template_id=get_attribute_value($params,"form_template_id");

		$values=get_attribute_value($params,"values");
	
		if(!$form_value_id)
		{
			$newFormValue=array("form_template_id"=>$form_template_id, "description"=>"");
			
			$saveResult= addOrUpdateData($newFormValue,"form_value_id","addform_value","updateform_value");
			$form_value_id =$saveResult["lastInsertId"];
		}
		foreach($values as $fldVal)
		{
			$fldVal["form_value_id"]=$form_value_id;
			$valArray=get_attribute_value($fldVal,"value",array());
			$field_value=json_encode($valArray);
			
			$fldVal["field_value"]=$field_value;
			addOrUpdateData($fldVal,"form_field_value_id","addform_field_value","updateform_field_value");
			
		}
		
		
        $result= array("form_value_id"=>$form_value_id);
		echo(json_encode($result));
    } 
	
	
    public static function readFieldTemplateForForm($id)
    {
    	serveData("readFieldTemplateForForm",array("form_template_id"=>$id));
    } 
    
	public static function _readFieldTemplateForForm($id)
    {
    	return dbFetchData("readFieldTemplateForForm",array("form_template_id"=>$id));
    } 
    
	public static function _readFormTemplateDetail($id)
	{
		$result=dbFetchData("readform_templateDetailById",array("form_template_id"=>$id),QUERY_FETCH_ONE);
		
		if($result)
		{
			$result["form_field_templates"]=FormBuilderServiceAdapter::_readFieldTemplateForForm($id);
		}
		return $result;
	}
	public static function readFormTemplateDetail($id)
	{
		$result=FormBuilderServiceAdapter::_readFormTemplateDetail($id);
		echo(json_encode($result));
	}
	
  }
FormBuilderServiceAdapter::mapServiceRoute($sa);
$dbQueries	=FormBuilderServiceAdapter::registerQueries($dbQueries);

?>