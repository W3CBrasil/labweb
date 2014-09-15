(function($, window){
  var ListingMode = function() {
    this.element       = $('[data-listing-mode]');
    this.listingChange = this.element.find('[data-listing-change]');
    this.wrapperProjects = $('[data-projects-wrapper]');

    var that = this;

    this.init = function() {
      this.wrapperProjects.addClass('image');
      this.element.find('[data-listing-change="image"]').addClass('active');
      this.addEventListener();
    };

    this.controlModes = function(valueChange) {
      this.wrapperProjects.removeClass('list image');
      this.wrapperProjects.addClass(valueChange);
    };

    this.changeClasses = function(target, valueChange) {
      this.listingChange.each(function(index, el) {
        $(el).removeClass('active');
      });
      $(target).addClass('active');
    };

    this.addEventListener = function() {
      that.listingChange.on('click', function(e){
        var valueChange = $(e.target).data('listing-change');
        that.controlModes(valueChange);
        that.changeClasses(e.target, valueChange);
      });
    };

    this.init();
  };

  new ListingMode;
})(jQuery, this);
