
<script src="content/Audit.services.js"></script>

<script src="content/audit.router.data.js"></script>

<script src="content/AuditController.js"></script>

<!-- -->
<?php
include("restServer.php");

include2("content/setup/setup.grouping.html");
include2("content/setup/AuditAccountGroupingEdit.php");

include("content/audit.printables.html");
include2("content/printables/popover.printable.config.html");


include2("content/printables/letterhead.html");
include2("content/printables/footer.html");
include("content/printables/footer-qr.html");

include2("content/printables/draft.html"); 
include2("content/printables/cover/cover.html");

include2("content/printables/multipage_doc.html");
include2("content/printables/letter-footer.html");

include2("content/printables/license.html");




include("content/printables/opinion/opinion.html");

/*
include2("content/printables/letter.html");
include2("content/printables/engagement.html");

include2("content/printables/mg.rep.letter.html");

include2("content/printables/opinion/1-clean.html");
include2("content/printables/opinion/2-qualified.html");
include2("content/printables/opinion/3-disclaimer.html");
include2("content/printables/opinion/4-adverse.html");

include2("content/printables/networth.html");
*/

include2("content/blocks/aside_extra_data.html");

include2("content/printables/opinion/basis_of_opinion.html");

include2("content/printables/fs/auditFSModuleFiles.php");




include2("content/audit.files.html");
include2("content/audit.document.list.detail.html");
include2("content/audit.inputdoc.detail.html");

include2("content/blocks/create_account_modal.html");
include2("content/blocks/client_account_fields.html");


include2("content/audit.discussion.html");
/*-------------Audit List--------*/
include("content/audit.list.html");

include2("content/blocks/create_audit_modal.html");
includes2("content/blocks/popoverAuditAssignment.html");
/*-------------/Audit List--------*/


/*-------------Audit Setup--------*/

include2("content/setup/setup.main.html");
include2("content/setup/setup.sidemenu.html");

include2("content/setup/setup.grouping.html");

include2("content/setup/audit.app.setting.html");

/*-------------/Audit Setup--------*/

/*-------------Audit Finding--------*/
include("content/blocks/audit_finding_modal.html");
include("content/blocks/audit_work.html");
include("content/blocks/audit_mgt_ltr.html");
/*-------------/Audit Finding--------*/




include2("content/blocks/modal_regroup.html");

include2("content/adjustment/AuditAdjustmentList.html");

include2("content/adjustment/audit_adjustment_list_editor.html");

include2("content/blocks/adjustment_modal.html");


include("content/audit.detail2.html");

include2("content/audit.detail.edit.html");
include2("content/audit.sidemenu.html");



include2("content/audit.form.data.html");

include("content/crud/AuditEngagementEdit.php");

include("content/tb.mapping.html");



include2("content/blocks/popover_tree_filter.html");

include2("content/substantive.audit/audit.substantive.html");

include("content/blocks/tree_grid.html");

include2("content/blocks/audit_procedures.html");

include2("content/blocks/aside_procedures.html");

include("content/blocks/audit_finding_modal.html");


//--------------Summary-----------------//
include2("content/audit.summary.html");
include2("content/summary/audit.qualification.point.html");
include2("content/summary/audit.disclosure.notes.html");

include2("content/summary/audit.management.letter.html");
include2("content/summary/audit.applied.procedures.html");



include("content/summary/groupedTB.html");

include2("content/summary/AuditAdjustmentList.html");
include2("content/summary/audit.finding.lits.html");
include("content/summary/client.tb.summary.html");


?>



<!--
<script src="content/AuditController-old.js"></script>


<script src="../crud/AuditTransaction/content/AuditTransaction.Services.js"></script>
<script src="../crud/AuditTransaction/content/AuditTransactionController.js"></script>

<script src="../crud/AuditAccountGrouping/content/AuditAccountGrouping.Services.js"></script>
<script src="../crud/AuditAccountGrouping/content/AuditAccountGroupingController.js"></script>
  
//includes("content/audit.list.html");
  $("#modalMessages").modal("show");
  -->