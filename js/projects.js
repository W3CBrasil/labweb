$(function() {
  $("li.show-category").on('click', function(e) {
    var $description = $(this).parent().next("p.description");
        hidden = $description.css("visibility") === "hidden";

    if (hidden) {
      $description.css("visibility", "visible");
      $(this).html("[-]");
    } else {
      $description.css("visibility", "hidden");
      $(this).html("[+]");
    }
  });
});
