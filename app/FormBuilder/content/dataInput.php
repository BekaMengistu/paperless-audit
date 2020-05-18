
<div class="padding">
	<div class="row">
    	<div class="col-md-2">
        	<div ng-repeat="section in formManager.formSections" ng-click="formManager.setCurrentSection(section)">
        		{{section}}
            </div>
        </div>
        <div class="col-md-10">
        	<div class="row">
                <div class="pull-right">
                    <button class="btn btn-primary" ng-click="formManager.saveFormValue()"> <i class="fa fa-floppy-o"></i> </button>
                    <button class="btn btn-primary"  ng-click="onPageLoad()"> <i class="fa fa-refresh"></i> </button>
                    <button class="btn btn-primary"  ng-click="formManager.exportToExcel(formManager.fields)"> <i class="fa fa-file-excel-o"></i> </button>
                    <button class="btn btn-primary"  ng-click="formToObject(formManager.fields)"> <i class="fa fa-file-code-o"></i> </button>
                    
                    
                </div>
                <h3>{{formManager.formTemplate.label}} <span style="font-size:.7em;"> [{{formManager.currentSection.sectionId}}]</span></h3>
								
                <small>{{formManager.formTemplate.name}} | {{formManager.formTemplate.description}} </small>
								
								{{formManager.formTemplate.script_path}}
								<div ng-if="formManager.formTemplate.script_path" ng-include="formManager.formTemplate.script_path"></div>
								
								<br/>
								
                <div>{{formManager.fieldValues___}}</div>    
                <button class="btn btn-default" ng-click="formManager.fieldValues.summary.auditor_name.value='Beka Mengistu'" >Populate</button>
            </div>
            <?php include("field_templates.html")?>
            <div ng-include="'app/FormBuilder/content/fields_data.html'"></div>
        </div>
        
        
        
        Table data
        <div ng-repeat="section in formManager.tableData">
        	{{section.name}}
            <table class="table">
            	<tr ng-repeat="row in section.data track by $index">
                	<td ng-repeat="col in row track by $index">{{col}}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
