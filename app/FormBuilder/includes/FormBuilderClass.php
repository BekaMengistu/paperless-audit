<?php

class FormTemplate
{
	public static function readFormValuesForTemplate($id)
	{
		return searchTableByCriteria("form_value","WHERE form_template_id=\"$id\"");
	}
	
	public static function save($param)
	{
		$saveResult=CrudServiceAdapter::_FormTemplate_save($param);
		
		$saveResult["fields"]=array();
		
		$form_template_id=$saveResult["form_template_id"];
		
		$fields=get_attribute_value($param,"fields",array());
		
		$rootIndex=1;
		foreach($fields as $root)
		{
			$rootFld=get_attribute_value($root,"data");
			if($rootFld)
			{
				$rootFld["form_template_id"]=$form_template_id;
				$rootFld["display_order"]=$rootIndex;
				
				$sr=CrudServiceAdapter::_FormFieldTemplate_save($rootFld);
				$fftid=get_attribute_value($sr,"form_field_template_id");
				$rootIndex++;
				
				$saveResult["fields"]["item$fftid"]=$sr;
				
				$children=get_attribute_value($root,"children",array());
				
				$childIndex=0;
				foreach($children as $child)
				{
					$childFld=get_attribute_value($child,"data");
					if($childFld)
					{
						$childFld["form_template_id"]=$form_template_id;
						$childFld["parent_type"]="form_field_template";
						$childFld["parent_id"]=$fftid;
						$childFld["display_order"]=$childIndex;
						CrudServiceAdapter::_FormFieldTemplate_save($childFld);
						$childIndex++;
					}
				}
			}
		}
		
		return $saveResult;
		
	}
	
	public static function readFormScripts($id)
	{
		$objFields = searchTableByCriteria("form_field_template","WHERE form_template_id=\"$id\" AND !parent_id");
        //echo(json_encode($objFields));
        //return;
		$sep="";
		?>

	var formCalculationHandler={<?php foreach($objFields as $n=>$fld){?>
		<?php echo("\n".$sep.$fld["name"])?>:function(item,form,fieldValues){
		console.log("<?php echo($fld["name"])?> Handler",item,fieldValues);
		<?php echo($fld["custom_script"]."\n")?>
		}
		<?php 
		$sep=",";
		}?>
	}

<?php
		//echo(json_encode($objFields));
	}
}
class FormValue
{
	public static function save($param)
	{
		$custom_data=get_attribute_value($param,"custom_data",array());
		$custom_data=$custom_data?$custom_data:array();
		$param["custom_data"]=json_encode($custom_data);
		
		$saveResult=CrudServiceAdapter::_FormValue_save($param);
		
		$saveResult["fieldValues"]=array();
		
        $form_value_id=get_attribute_value($saveResult,"form_value_id");
        
		//$form_value_id=get_attribute_value($param,"form_value_id");
		//if(!$form_value_id/1) {$form_value_id=get_attribute_value($saveResult,"lastInsertId");}
		
		$fieldValuesHash=get_attribute_value($param,"fieldValuesHash",array());
		
		foreach($fieldValuesHash as $i=>$fldVal)
		{
			$fldVal["form_value_id"]=$form_value_id;
			$field_value=get_attribute_value($fldVal,"field_value",array());
			$fldVal["field_value"]=json_encode($field_value);
			
			$saveResult["fieldValues"][$i]=CrudServiceAdapter::_FormFieldValue_save($fldVal);
		}
		return $saveResult;
	}
	public static function readDetail($id)
	{
		$result=CrudServiceAdapter::_FormValue_readDetailById($id);
		$result=$result?$result:array("description"=>"New Value","custom_data"=>"{}");
		$result["custom_data"]=json_decode($result["custom_data"],true);
		if($result)
		{
			$fieldValues=dbFetchData("readFormFieldValues",array("form_value_id"=>$id));
			foreach($fieldValues as $i=>$v)
			{
				$v["field_value"]=json_decode($v["field_value"],true);
				$fieldValues[$i]=$v;
			}
			$result["fieldValues"]=$fieldValues;
		}
		return $result;
	}
}
//FormBuilderServiceAdapter::mapServiceRoute($sa);
//$dbQueries	=FormBuilderServiceAdapter::registerQueries($dbQueries);

?>