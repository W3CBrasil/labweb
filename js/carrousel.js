$(function() {
  var unslider = $('.banner').unslider({
    delay: 8000,
    keys: false,
    dots: false,
    fluid: false
  });

  var unslider = $('.carousel').unslider({
    delay: 4000,
    keys: false,
    dots: true,
    fluid: false
  });

  $(".highlight-arrow").on('click', function(e) {
    e.preventDefault();

    var direction = $(this).data("navigation");

    unslider.data('unslider')[direction]();
  })
});
