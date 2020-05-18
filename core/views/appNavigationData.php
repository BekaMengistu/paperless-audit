<?php

$appNavTxt='{
			"Main":{"dashboard":{"ui-sref":"app.dashboard","label":"Dashboard","icon":"fa-dashboard"}
				,"documents":{"ui-sref":"app.documents","label":"Documents","icon":"fa-folder"}
				,"data":{"ui-sref":"app.database","label":"Data","icon":"fa-database"
						,"children":
							{
							"digitalDoc":{"ui-sref":"app.database.DigitalDocument","label":"Digital Documents"}
							,"user":{"ui-sref":"app.database.User","label":"User"}
							}
						}
			}
			,"Sample Apps":{
				"form":
					{"ui-sref":"app.sample","label":"Form","icon":"fa-list-alt"
					,"children":
						{"formUpload":{"ui-sref":"app.sample.FormUpload","label":"File Upload","icon":"fa-cloud-upload"}
						,"tree":{"ui-sref":"app.sample.FormTree","label":"Tree","icon":"fa-tree"}
						,"crop":{"ui-sref":"app.sample.FormCropImage","label":"Crop Image","icon":"fa-crop"}
						
						}
					}
				}
				
		}';
$appNavTxt='{
			"Links":{
				"Documents":{"ui-sref":"app.documents","label":"Documents","icon":"fa-folder"}
				,"Users":{"ui-sref":"app.database.User","label":"User","icon":"fa-users"}
				}
			}';
//echo($appNavTxt);
$appNavigationData=json_decode($appNavTxt,true);

?>