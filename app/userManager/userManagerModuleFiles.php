<script src="content/user.router.data.js"></script>
<script src="content/user.management/UserManagementController.js"></script>
<script src="content/permission/permissionServices.js"></script>
<script src="content/permission/CorePermissionController.js"></script>
<script src="content/User.services.js"></script>

<script src="directive.bm.ui.permission-v2.js"></script>


<?php
include("restServer.php");

include("content/user.management/UserListDetail.php");
include("content/user.management/UserEdit.php");
include("content/user.management/UserListSide.php");

include("content/user.profile.php");
include("content/accountManagement.php");
include("content/user.document.html");


include2("content/permission/corePermissionView.php");
include2("content/permission/permissionTree.html");
include2("content/permission/popoverEditPermission.html");

include("appConfig.php");
?>


<script src="directive.bm.ui.permission.js"></script>
