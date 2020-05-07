// https://www.youtube.com/watch?v=o6eJ1K_1CKA
$(document).ready(function() {
  $('.slide-section').click(function(e) {

    var linkHref = $(this).attr('href');
    var headerHeight = $('nav').outerHeight();
    console.log(headerHeight);

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();

  });

});


$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
