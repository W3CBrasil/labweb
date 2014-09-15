$(function() {

  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $(".posts").children().length,
      loadNewPostsThreshold = 3000;

  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function(data) {
    postURLs = data["posts"];

    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad)
      disableFetching();
  });

  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false;

  $(".load_more").click(function(e) {
    e.preventDefault()

    if (!shouldFetchPosts || isFetchingPosts) return;

    fetchPosts();
  });

  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;

    isFetchingPosts = true;

    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $(".posts").children().length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;

          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }

          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
          }
        };

    fetchPostWithIndex(postCount + loadedPosts, callback);
  }

  function fetchPostWithIndex(index, callback) {
    var postURL      = postURLs[index],
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
  }

  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;

    $(".load_more").fadeOut();
    $(".infinite-spinner").fadeOut();
  }

});
