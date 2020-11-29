  $(document).ready(function() {
  	dd();
    ee1();
    uu();
    gg();
    ee2();
    ll();



  });  

  function dd(){
  	$('.d')
  	.animate({
  		top: '-=35px',
      height: '+=160px', 
      width: '70px'
  	}, 1200, "", function(){
  		$(this)
  		.animate({
  			top: '+=35px',
        height: '-=70px',
        width: '70px'

  		}, 1200, "", function(){
  		dd();
  	});
  	});
  } 
  function ee2(){
    $('.e2')
    .animate({
      height: '+=160px', 
      top: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
        height: '-=70px',
        top: '+=35px'

      }, 1200, "", function(){
      ee2();
    });
    });
  } 
  function uu(){
    $('.u')
    .animate({
      height: '+=160px', 
      top: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
        height: '-=70px',
        top: '+=35px'

      }, 1200, "", function(){
      uu();
    });
    });
  } 
   function gg(){
  	$('.g')
  	.animate({
  		width: '+=70px', 
  		left: '-=35px'
  	}, 1200, "", function(){
  		$(this)
  		.animate({
  			width: '-=70px',
  			left: '+=35px'

  		}, 1200, "", function(){
  		gg();
  	});
  	});
  } 
  function ee1(){
    $('.e1')
    .animate({
      width: '+=70px', 
      left: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
        width: '-=70px',
        left: '+=35px'

      }, 1200, "", function(){
      ee1();
    });
    });
  } 
  function ll(){
    $('.l')
    .animate({
      width: '+=70px', 
      left: '-=35px'
    }, 1200, "", function(){
      $(this)
      .animate({
        width: '-=70px',
        left: '+=35px'

      }, 1200, "", function(){
      ll();
    });
    });
  } 

