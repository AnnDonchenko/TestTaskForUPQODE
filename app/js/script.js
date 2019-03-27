$(document).ready(function() {
  var sections = $('.sectionScroll')
  var nav = $('.navbar-nav>.nav-item')
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function() {
  var scroll_position = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - nav_height - 50;
    var bottom = 100 + top + $(this).outerHeight();
      if (scroll_position < 400) {
        nav.find('.nav-link').removeClass('active');
        sections.removeClass('active');  
      } else { 
        if (scroll_position >= top && scroll_position <= bottom) {
          nav.find('.nav-link').removeClass('active');
          nav.find('.nav-link[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      }
    });
  });
});