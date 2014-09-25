(function ($, window){
  var Pagination = function () {
    this.$loader = $('.load-more');
    this.category = this.$loader.data('category');
    this.postsUrls = [];

    this.init = function () {
      if (this.$loader.length < 1) {
        return false;
      }

      this.addEventListener();
    };

    this.fetchPosts = function () {
      var that = this,
          urlName = !this.category ? '/projects' : '/projects-' + this.category;

      $.getJSON(urlName + '.json', function (data) {
        that.postsUrls = data['posts'];

        var loadedPosts = 0,
            postCount = $(".posts").children().length,
            callback = function() {
              loadedPosts++;
              var postIndex = postCount + loadedPosts;

              if (postIndex > that.postsUrls.length-1) {
                that.disableFetching();
                return;
              }

              if (loadedPosts < postCount) {
                that.fetchPostWithIndex(postIndex, callback, "dentro do if");
              }
            };

        that.fetchPostWithIndex(postCount + loadedPosts, callback, "primeiro");
      });
    };

    this.fetchPostWithIndex = function (index, callback, msg) {
      var that = this,
          postURL      = this.postsUrls[index],
          isOddProject = (index + 1) % 2 === 0;

      $.ajax({
        url: postURL,
        dataType: 'html',
        success: function(data) {
          if(isOddProject) {
            $(data).find(".project").addClass('omega').appendTo(".posts");
          }
          else {
            $(data).find(".project").appendTo(".posts");
          }
          $('.tooltip').tooltipster({
            position: 'bottom',
            theme: 'tooltip-project',
            contentAsHTML: true,
            interactive: true
          });
          callback();
        }
      });
    };

    this.addEventListener = function () {
      var that = this;

      this.$loader.on('click', function (e) {
        e.preventDefault();

        that.fetchPosts();
      });
    };

    this.disableFetching = function () {
      $(".list-load-more").fadeOut();
      $(".infinite-spinner").fadeOut();
    }

    return this.init();
  };

  new Pagination;
})(jQuery, this);
