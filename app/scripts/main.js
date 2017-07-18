

jQuery(function($){
  // HEADER
  var sections = $('section'), nav = $('.nav'), nav_height = (nav).outerHeight();
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
      var top = $(this).offset().top - nav_height, bottom = top + $(this).outerHeight();
    });
    //HEADER FIXED
    if ($('header').offset().top > 50) {
      $('header').addClass('fixed-header');
      // $('.up-to-top').fadeIn(300);
    } else {
      $('header').removeClass('fixed-header');
      // $('.up-to-top').fadeOut(300);
    }
  });
  /*PAGE SCROLL*/
  $('.nav a, a.page-scroll').bind('click', function () {
    var $el = $(this);
    var id = $el.attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top - 100//- nav_height
    }, 800);

    return false;
  });

  /*OWL*/
  $("#owl-comunidad").owlCarousel({
    items : 2,
    lazyLoad : true,
    navigation : true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
  $("#owl-busqueda").owlCarousel({
    items : 3,
    lazyLoad : true,
    navigation : true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
  $("#owl-sugerencias").owlCarousel({
    items : 3,
    lazyLoad : true,
    navigation : true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });

  $(window).on('load', function() {
    var H = 0;
    $(".truck").each(function(i){
      var h = $(".truck").eq(i).height();
      if(h > H) H = h;
    });
    $(".truck").height(H);
  });

});
