
function toggleImageActionDelete(src) {
	var id = $(src).attr('data-iad-file-id');
	// Toggle "real" delete checkbox
	var $el = $('input[name="delete_' + id + '"]');
	$el.prop('checked', $el.prop('checked') != true);
	// Call same code as
	imgActionDelete_SetInputfieldFileStatus($el);

	// The code for this method was literally copied from InputfieldFile.js
	// Wrapped inside delete function for now to avoid polluting namespace
	function imgActionDelete_SetInputfieldFileStatus($t) {
		var $info = $t.parents('.InputfieldFileInfo');	
		// collapsed=items that have no description or tags, so need no visible InputfieldFileData container
		var collapsed = $t.closest('.InputfieldFile').hasClass('InputfieldItemListCollapse');
		if($t.is(":checked")) {
			// not an error, but we want to highlight it in the same manner
			$info.addClass("ui-state-error");
			if(!collapsed) $info.siblings(".InputfieldFileData").slideUp("fast");
	
		} else {
			$info.removeClass("ui-state-error");
			if(!collapsed) $info.siblings(".InputfieldFileData").slideDown("fast");
		}	
	}
}
