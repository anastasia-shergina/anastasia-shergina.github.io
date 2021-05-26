$(document).ready(function () {

	$(".overlay .close").on("click", function(){

  		var grandpa = $(this).parent().parent();

  		if (grandpa.hasClass('active')) {
        	grandpa.removeClass('active');
        	// grandpa.hide();
  		}
  		return false;
	});

	$(".slider .item .button").on("click", function(){

		var lnk = $(this).attr('href');
		if (lnk && (lnk !="") && (lnk !="#")) { 	

  			var popObj = $(lnk);

  			if (popObj) {
  				if (!popObj.hasClass('active')) 
        			popObj.addClass('active');			
        	}
        }
  		return false;
	});

  $(".overlay").on("click", function(){

      if ($(this).hasClass('active'))
        $(this).removeClass('active');      
  });

});

