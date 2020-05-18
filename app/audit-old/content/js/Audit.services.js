//.factory("AuditManager",["AuditEngagementService","DataImportManager","FormBuilderService","AuditService",
//		function(AuditEngagementService,DataImportManager,FormBuilderService,AuditService){
	
            
(function(angular) {
    "use strict";
	
    function AuditFormManager(CustomFormManager)
    {
        var customForm=CustomFormManager.FormManager();
        var createAuditFormManager=function(formOptions)
        {
            var auditForm={forms:{general:{name:"general",label:"General",nextForm:"ifrs"},ifrs:{name:"ifrs",label:"IFRS"}}};
            auditForm.initializeFormManagers=function()
            {
                for(var i in auditForm.forms)
                {
                    var frm= auditForm.forms[i];
                    frm.formManager=CustomFormManager.FormManager({dontLoadScripts:true}).manager; 
                    frm.formManager.FormTemplate.lookupManager=formOptions.LookupManager;
                }
            }
            auditForm.setFormValues=function(fvs)
            {
               // console.log("setFormValues",fvs);
                for(var i in fvs)
                {
                     var fv=fvs[i];   
                    for(var f in auditForm.forms)
                    {
                        var frm= auditForm.forms[f];
                        if(frm.form_template_id==fv.form_template_id)
                        {
                            frm.form_value_id=fv.form_value_id;        
                        }
                    }
                }
                return auditForm.forms;
                
            }
            
            auditForm.loadFormValues=function(settings,auditData)
            {
                
                auditForm.audit_engagement_id=auditData.engagement.audit_engagement_id;
                for(var i in auditForm.forms)
                {
                    var formSetting=settings[i +"_form_template_id"];
                    formSetting=formSetting?formSetting:{};
                    auditForm.forms[i].form_template_id=formSetting.setting_value;     
                }
                return customForm.restService.readValueForParent("Audit",auditData.engagement.audit_engagement_id)
                .then(function(fvs){return auditForm.setFormValues(fvs);})
                
            }
            
            auditForm.createNewFormValue=function(frm)
            {
                var formManager=CustomFormManager.FormManager();
                var formVal=
                    {form_template_id:frm.form_template_id,description:"Audit :" + auditForm.audit_engagement_id,parent_type:"Audit",parent_id:auditForm.audit_engagement_id};
                
			     return formManager.restService.saveFormValue(formVal)
                .then(function(sr){
                     console.log("auditForm.createNewFormValue",sr)
                     frm.form_value_id=sr.form_value_id;
                     return auditForm.loadFormValueDetail(frm);
                 })
            }
            
            auditForm.loadFormValueDetail=function(frm)
            {
                if(!auditForm.audit_engagement_id){return;}
                if(!frm.form_value_id)
                {
                    return auditForm.createNewFormValue(frm)
                    .then(function(sr){})
                }
                
                else
                {
                    return frm.formManager.loadFormValue(frm.form_template_id,frm.form_value_id)
                    .then(function(sr){
                        if(frm.nextForm)
                            {
                                return auditForm.loadFormValueDetail(auditForm.forms[frm.nextForm]);
                            }
                        return sr;
                        
                    })
                }
            }
            auditForm.initializeFormManagers();
            return auditForm;
        }
        return {create:createAuditFormManager};
    }
    AuditFormManager.$inject = ["CustomFormManager"];
    
	angular.module( "app")
    .service ("AuditFormManager",AuditFormManager)
	.service( "AuditService", function( $q,$http )
	{
		return {
            readFolderContent:function(folder){return excuteService($q,$http,"api/appService/readFolderContent/", {folder:folder},"post");}
            
			,searchWebContentByCategory:function(category,content_type)
                {   content_type=content_type?"/" + content_type:"";
                    return excuteService($q,$http,"api/WebContentService/searchByCategory/"+category + content_type, {},"get");}
            
			,readFullAuditDetail:function(id){return excuteService($q,$http,"api/AuditService/readFullAuditDetail/"+id, {},"get");}
			,checkAuditExists:function(customer_id,year){return excuteService($q,$http,"api/AuditService/checkAuditExists/"+customer_id + "/" + year, {},"get");}
			,saveFinding:function(params){return excuteService($q,$http,"api/AuditService/saveFinding/", params,"post");}
			,saveExtraData:function(params){return excuteService($q,$http,"api/AuditService/saveExtraData/", params,"post");}
			,mapTbFromPrevEngagement:function(id){return excuteService($q,$http,"api/AuditService/mapTbFromPrevEngagement/" + id, {},"get");}
			
			//checkAuditExists/:customer/:year
			,readAllAudits:function(archived){ archived=archived?archived:"0";
				return excuteService($q,$http,"api/AuditService/readAllAudits/" + archived, {},"get");
				}
			,readAuditsForCustomer:function(id){return excuteService($q,$http,"api/AuditService/readAuditsForCustomer/"+id, {},"get");}
			,readAuditClientTrialbalance:function(id){return excuteService($q,$http,"api/AuditService/readAuditClientTrialbalance/"+id, {},"get");}
			,readAuditProcedures:function(id){return excuteService($q,$http,"api/AuditProcedureService/readAll/", {},"get");}
			,readAuditFindingCounts:function(id){return excuteService($q,$http,"api/AuditService/readAuditFindingCounts/" + id, {},"get");}
			,readAuditFindingsForAccount:function(params){return excuteService($q,$http,"api/AuditService/readAuditFindingsForAccount/", params,"post");}
			,readAuditFindingForAccountProcedure:function(params){return excuteService($q,$http,"api/AuditService/readAuditFindingForAccountProcedure/", params,"post");}
			,readAuditTransactionCounts:function(id){return excuteService($q,$http,"api/AuditService/readAuditTransactionCounts/" + id, {},"get");}
			
			,readAuditAdjustments:function(id){return excuteService($q,$http,"api/AuditService/readAuditAdjustments/" + id, {},"get");}
			
			,readAuditTransactionsForAccount:function(audit_id,parent_code){
				return excuteService($q,$http,"api/AuditService/readAuditTransactionsForAccount/" + audit_id + "/" + parent_code, {},"get");}
			
			,readAuditCompanyTypes:function(){return excuteService($q,$http,"api/AuditService/readAuditCompanyTypes/", {},"get");}
			
			,readCustomers:function(){return excuteService($q,$http,"api/CustomerService/readAll/", {},"get");}
			
			,readAllGroupingKeys:function(){return excuteService($q,$http,"api/AuditService/readAllGroupingKeys/", {},"get");}
			,readCompanyTypeGroupingKeys:function(){return excuteService($q,$http,"api/AuditService/readCompanyTypeGroupingKeys/", {},"get");}
			
			,saveCompanyTypeGroupingKeys:function(params){return excuteService($q,$http,"api/AuditService/saveCompanyTypeGroupingKeys/", params,"post");}
			,generateQRCode:function(url,requestCode){return excuteService($q,$http,"barcode/qrcode-png.php?url=" + url + "&requestCode=" + requestCode + 
				"&outputFile=../files/uploads/" + requestCode + ".png", {},"get");}
				
			,insertVerficationCodeToFile:function(params){return excuteService($q,$http,"api/AuditService/insertVerficationCodeToFile/", params,"post");}	
			,readGroupingDetailById: function(id){return excuteService($q,$http,"api/AuditAccountGroupingService/readDetailById/" + id, {},"get");}
    		,saveGrouping : function(params){return excuteService($q,$http,"api/AuditAccountGroupingService/save/", params,"post");}
    		,deleteGrouping: function(id){return excuteService($q,$http,"api/AuditAccountGroupingService/delete/" + id, {},"delete");}
			};
	})	
	.factory("AuditManager",["AuditEngagementService","DataImportManager","AuditService","CustomFormManager",
		function(AuditEngagementService,DataImportManager,AuditService,CustomFormManager){
		
		
		function AuditManager(options)
		{
			this.auditList=[{}];
			this.editedAuditEngagement="";
			this.auditProcedures=[];
			this.accountGroupings=[];
			this.currentAudit={};
			this.auditListFilter={status:"1",criteria:"Upto"};
			this.showAction=true;
		}
		AuditManager.prototype.processList=function(auditsList)
		{
			console.log("AuditListController.processList",auditsList);
			for(var i in auditsList)
			{
				var audit=auditsList[i];
				audit.assigned_users=audit.assignee.split(",");
				
				audit.assigned_usersHash={};
				for(var j in audit.assigned_users)
				{
					audit.assigned_usersHash["item"+audit.assigned_users[j]]=audit.assigned_users[j];
				}
				
				
				
				var statusColors=['#F06030','#FCC100','#0cc2aa']
				var color=statusColors[0];
				if(audit.audit_status>=3 && audit.audit_status<=6)
				{
					color=statusColors[1];
				}
				else if(audit.audit_status>=6)
				{
					color=statusColors[2];
				}
				
				audit.progress={percent:audit.audit_status*10,color:color}
			}
		}
		AuditManager.prototype.readAuditDetail=function(audit_id)
		{
			var _thiss=this;
			return AuditService.readFullAuditDetail(audit_id)
			.then(function(sr){
				if(sr)
				{
				_thiss.currentAudit=sr.engagement;
				_thiss.auditProcedures=sr.auditProcedures;
				_thiss.accountGroupings=sr.accountGroupings;
				}
			return sr;})
		}
		
		
		
		
		
		
		
		
		
		
		
		AuditManager.prototype.loadAdjustments=function(audit_id)
		{
		}
		
		AuditManager.prototype.editPath={url:"app.crud.auditEdit",id:"audit_id"};
		AuditManager.prototype.listPath={url:"app.crud.audit"};
		
		AuditManager.prototype.formData={
				 	list:{title:"Audit Engagements",subTitle:"List of Audit Engagements",prefix:"audit",headerStyle:""}
					,detail:{title:"Audit Engagement Detail",subTitle:"Edit Audit Engagement",prefix:"audit",headerStyle:"dker"}
					}
		
		AuditManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditManager.createDigitalDocument=function()
		{
		}
		AuditManager.prototype.createAuditForm=function(item,form_template_id)
		{
            var formManager=CustomFormManager.FormManager();
            var formVal={form_template_id:form_template_id.setting_value,description:"Audit :" + item.customer.customer_name,parent_type:"Audit",parent_id:item.audit_engagement_id};
			return formManager.restService.saveFormValue(formVal);
			
		}
        
        AuditManager.prototype.saveNewItem=function(item,setting)
		{
            var formManager=CustomFormManager.FormManager();
            
            //console.log(formManager.restService.saveFormValue);
            //return;
            //return AuditEngagementService.save(item);
            
			var _this=this;
			item.customer_id=item.customer.customer_id;
			
			return formManager.restService.saveFormValue({form_template_id:setting.form_template_id.setting_value,description:"Audit :" + item.customer.customer_name})
			.then(function(sr)
				{
					item.form_value_id=sr.form_value_id;
					return AuditEngagementService.save(item);
				});
		}
		AuditManager.prototype.saveItem=function(item)
		{
			var _AuditManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
		AuditManager.prototype.loadData=function(id)
		{
			if(id=="list")
				{
					return this.loadList();
				}
				else if(id/1)
				{
					this.loadDetail(id);
				}
				else if(id==0)
				{
					this.newAuditEngagement();
				}
		}
		
		AuditManager.prototype.save=function(item)
		{
			 return AuditEngagementService.save(item);
		}
		
		AuditManager.prototype.newAuditEngagement=function()
		{
			var nowTime=new Date();
			return this.editedAuditEngagement={closing_date_ec:"",assignee:"",schedules_date:nowTime,closing_date:nowTime,company_type:"",closing_date_ec:""
			,client_contact_person:"",client_contact_phone:"",verification_code:"",assignee:""}
		}
		
		AuditManager.prototype.readDetail=function(id)
		{
			return AuditEngagementService.readDetailById(id);
		}
		AuditManager.prototype.loadDetail=function(id)
		{
			var _AuditManager=this;
			return this.readDetail(id)
	 		.then(function(sr){ return _AuditManager.editedAuditEngagement=sr});
		}
		
		AuditManager.prototype.readList=function()
		{
			return AuditService.readAllAudits();
			//return AuditEngagementService.readAll();
		}
		
		AuditManager.prototype.loadList=function()
		{
			//var vm=this;
			//console.log("AuditManager.prototype.loadList");
			var _auditManager=this;
			return this.readList()
	 		.then(function(sr){_auditManager.auditsList=sr; return sr;});
		}
		
		AuditManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditManager=this;
	 		AuditEngagementService.delete(id)
			.then(_AuditManager.readList)
	 		.then(function(sr){_AuditManager.auditsList=sr});
     	}
		var AuditManagerFactory={create:function(options){return new AuditManager(options)}};
		//console.log("/n-----------------------------------------------AuditManager Factory");
		return AuditManagerFactory;
		
		}])
             
 }(window.angular));