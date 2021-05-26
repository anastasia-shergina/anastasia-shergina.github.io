$(document).ready(function () {

	$(".answer .button").on("click", function(){

		var lnk = $(this).attr('href');
		if (lnk && (lnk !="") && (lnk !="#")) { 	

  			var nextObj = $(lnk);
        var granpa = $(this).parent().parent();
    if (granpa.hasClass('active'))
        granpa.removeClass('active');     

  	if (nextObj) {
  			if (!nextObj.hasClass('active')) 
        		nextObj.addClass('active');			
        	}
        }
  	return false;
	});
});

