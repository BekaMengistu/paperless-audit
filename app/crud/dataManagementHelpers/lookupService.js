(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CoreAppSettingService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AppSettingService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AppSettingService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AppSettingService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AppSettingService/delete/" + id, {},"delete");}
			,readSettingByApp: function(id){return excuteService($q,$http,"api/AppSettingService/readSettingByApp/" + id, {},"get");}
			,saveMultiple : function(params){return excuteService($q,$http,"api/AppSettingService/saveMultiple/", params,"post");}
			};
	})
	.service( "CoreLookupService", function( $q,$http )
	{
		return {
			User :function(){return excuteService($q,$http,"api/LookupServices/User/", {},"get");}
			,Customer :function(){return excuteService($q,$http,"api/LookupServices/Customer/", {},"get");}
			,readLookupByType :function(id){return excuteService($q,$http,"api/CustomeLookupService/readLookupByType/" + id, {},"get");}
			,readLookupTypes :function(){return excuteService($q,$http,"api/CustomeLookupService/readLookupTypes/", {},"get");}
			,readAllLookupsByTypes:function(){return excuteService($q,$http,"api/CustomeLookupService/readAllLookupsByTypes/", {},"get");}
			,readAutocompleteValues:function(table,field,value){return excuteService($q,$http,"api/CustomeLookupService/readAutocompleteValues/" + table + "/" + field + "/" + value
				, {},"get");}
			
			};
	}).factory('CoreLookupManager', ["CoreLookupService",function(CoreLookupService){ 
	
	var lookups={};
	var lookupsHash={};
	//AppSettingService/readSettingByApp/Audit
	var buildHash=function(name,data)
	{
		var luHash={};
		for(var i in data)
		{
			luHash[name+data[i].id]=data[i];
		}
		lookups[name]=data;
		lookupsHash[name]=luHash;
	}
	
	var load=function(name)
	{
		
		if(false)//lookups[name] && lookups[name].length)
		{
			return ;
		}
		else if(CoreLookupService[name])
		{
			return CoreLookupService[name]().then(function(sr){buildHash(name,sr)})
		}
		else
		{
			lookups[name]=[];
			lookupsHash[name]={}
		}
	}
	
	
	
	return { 
		buildHash:buildHash
		,load:load
		,lookups:{array:lookups,hash:lookupsHash}
		//,lookupsHash:lookupsHash
		};
}])
             
 }(window.angular));