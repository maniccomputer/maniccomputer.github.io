$(function(){
	console.log("hello world");
    
	
});

function navSlide() {
  //var scroll_top = $(window).scrollTop();
  var contentTop = $("#content").position().top, scrollTop = $(window).scrollTop(), offsetVal = 70, $navbarInverse = $(".navbar-inverse");
  //console.log(scrollTop);
  contentTop -= offsetVal;
  if (contentTop <= scrollTop) {
    $navbarInverse.addClass('navbar-inverse-change');
  } else {
    $navbarInverse.removeClass('navbar-inverse-change');
  }
}

$(window).scroll(navSlide);