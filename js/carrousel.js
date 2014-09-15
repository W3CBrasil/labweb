$(function() {
  var indexUnslider = $('.banner').unslider({
    delay: 8000,
    keys: false,
    dots: false,
    fluid: false
  });

  $(".highlight-arrow").on('click', function(e) {
    e.preventDefault();
    var direction = $(this).data("navigation");
    indexUnslider.data('unslider')[direction]();
  })

  var aboutUnslider = $('.carousel').unslider({
    delay: 4000,
    keys: false,
    dots: true,
    fluid: false
  });

  $(".carousel .button").on('click', function(e) {
    e.preventDefault();
    var direction = $(this).data("navigation");
    aboutUnslider.data('unslider')[direction]();
  })
});
