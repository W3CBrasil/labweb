(function ($, window){
  var Pagination = function () {
    this.$loader = $('.load-more');
    this.postsUrls = [];

    this.init = function () {
      if (this.$loader.length < 1) {
        return false;
      }

      this.addEventListener();
    };

    this.fetchPosts = function () {
      var that = this,
          postsToLoad = $(".posts").children().length;

      $.getJSON('/all-posts.json', function (data) {
        that.postsUrls = data['posts'];

        var loadedPosts = 0,
            postCount = $(".posts").children().length,
            callback = function() {
              loadedPosts++;
              var postIndex = postCount + loadedPosts;

              if (postIndex > postURLs.length-1) {
                // disableFetching();
                return;
              }

              if (loadedPosts < that.postsToLoad) {
                that.fetchPostWithIndex(postIndex, callback);
              } else {
                isFetchingPosts = false;
              }
            };

          that.fetchPostWithIndex(postCount + loadedPosts, callback);
      });
    };

    this.fetchPostWithIndex = function (index, callback) {
      var that = this,
          postURL      = this.postsUrls[index],
          isOddProject = (index + 1) % 2 === 0;

      $.ajax({
        url: that.postURL,
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

    return this.init();
  };

  new Pagination;
})(jQuery, this);
