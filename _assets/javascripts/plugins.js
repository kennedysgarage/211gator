//= require vendor/ss-standard
//= require vendor/ss-social
//= require vendor/flexslider

// http://mailto.ninja/


$(document).ready(function(){

    // Flexslider
    $(window).load(function() {
      $('.flexslider').flexslider();
    });
    
    // http://codepen.io/cssjockey/pen/jGzuK
  	$('ul.tabs li').click(function(){
  		var tab_id = $(this).attr('data-tab');

  		$('ul.tabs li').removeClass('current');
  		$('.tab-content').removeClass('current');

  		$(this).addClass('current');
  		$("#"+tab_id).addClass('current');
  	})

});
