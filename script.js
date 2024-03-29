//parallax
$(window).scroll(function(){
	var wScroll= $(this).scrollTop();
		
	$('.section hr').css({
		'transform' :'translate(0px,'+ wScroll/2 +'%)'
	});
				
	$('.jumbotron h4').css({
		'transform' :'translate(0px,'+ wScroll/4 +'%)'
	});

	$('.jumbotron p').css({
		'transform' :'translate(0px,'+ wScroll/4 +'%)'
	});
	
});

//soft translation
jQuery('.project-thumb').addClass("transition");

//scroll page
$('.page-scroll').click(function() {
  // スクロールの速度
  var speed = 400; // ミリ秒で記述
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop: position-100
  }, speed, 'swing');
  return false;
});


//mail
$(document).ready(function(){
    $('.mail').on('click',function(){
       window.location.href = "mailto:michaeljack255@gmail.com"; 
    });
});


// button to go to top
$(document).ready(function(){
  //Hide First
  $('.scroll-top').hide();
  
  $(window).scroll(function(){
    if($(this).scrollTop()>200){ 

      $('.scroll-top').fadeIn();
      $('.fa-chevron-up').animate({bottom:'50px'},400);
    }else{
      $('.scroll-top').fadeOut();
    }
    });
  $('.scroll-top').click(function(){
    $('html,body').animate({scrollTop:0},1000);
  })

});

//Javascript load dialog modal
function loadModal(title, thumb, body, launchLink) {
  // Reference modal elements
	var modalTitle = document.querySelector(".modal-title");
	var modalThumb = document.querySelector(".modal-thumb img");
	var modalBody = document.querySelector(".modal-body");
	var modalFooterLink = document.querySelector(".modal-footer a");

  // Dynamically fill content of modal with function call
  modalTitle.innerHTML = title;
  modalThumb.src = "img/" + thumb;
  modalBody.innerHTML = body;
  modalFooterLink.setAttribute("href", launchLink);
}
