<script src="core.services.js"></script>
<script src="content/core.router.data.js"></script>

<?php
include("appConfig.php");

include2("../../appEngine.php");

include2("templates/page.layout.html");
include("../../appNavigation2.php");
include("views/blocks/header.4.html");
include("views/blocks/signin.html");


include("content/layouts/ui.blocks.html");
include("content/layouts/page.multi.col.php");
include("content/layouts/list.detail.layout.php");

//list.detail.layout.php

include2("restServer.php");

include("templates/page.multi.col.html");
include2("templates/page.fixed.title.html");
include2("templates/list-detail.html");




include("templates/hooked_views.html");

include("templates/tab-header.html");

include("views/layout/layout.4.php");
include("views/layout/layout.php");
include("views/blocks/footer.1.html");
?>