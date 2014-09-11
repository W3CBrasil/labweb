(function($, window){
  var Prices = function() {
    this.element = $('[data-listing-mode]');

  };

  window.App.site.Prices = new Prices;
})(jQuery, this);
