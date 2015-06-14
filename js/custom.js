if ( $(window).width() > 1199) {
	var row = '<div class="row">';
	var rowClose = '</div>';
	$('#parent:nth-child(8)').after(rowClose).after(row);
} else {
  //Add your javascript for small screens here
}

console.log('balls');