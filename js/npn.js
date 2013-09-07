
<script>
	$(".contain-hide").accordion({
		collapsible: true, 
		active: false
	});
	
	$('h2').hover(function(){
		$(this).addClass('hilight');
	}, function(){
		$(this).removeClass('hilight');
	});
</script>



<script>


  // function slideMenu {}
    $('#menu-tools').click(function(){
      $('#cm1').slideToggle('slow');
  });
  $('#menu-about').click(function(){
    $('#cm2').slideToggle('slow');
  })(jQuery);

/*  $('#menu-tools').click(slideMenu);
  $('#menu-about').click(slideMenu);*/
  </script>