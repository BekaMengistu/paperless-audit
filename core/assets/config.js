// put your config code here
var applicationConfig={name: 'HT Paperless Audit', version: '1.0.0',
	uploadOptions:{uploadUrl:"files/upload.php",fileLocation:"files/uploads/"}

	,mainMenu:[
		{
			label:"Dashboard",icon:"fa-dashboard",sref:"app.dashboard"
		},
		{
		label:"Inventory",icon:"fa-database",sref:"app.inventory",subMenu:
			[
			{label:"Items",sref:"app.inventory.items"}
			,{label:"Movements",sref:"app.inventory.movements"}
			]
		}
		,{label:"Manufacturing" ,icon:"fa-cogs",sref:"app.manufacturing",subMenu:
			[
			{label:"Work Order",sref:"app.manufacturing.workorder"}
			,{label:"Setup",sref:"app.manufacturing.setup"}
			]
		}
		,{label:"Document"}
	]
	}