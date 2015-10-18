console.log("Sanity Check: JS is working!");

$(document).ready(function(){


 //object constructor to create new post objects 
  function Post(body) {
      this.body = body;
      this.createdAt = new Date();
  }

  $(document).on('click', '#submitNewPost', function(e) {
    e.preventDefault();

   
  });

  function commentSubmitHandler() {
    $('#newComment').submit('click', function(e) {
      e.preventDefault();
      var postComment = $('#postComment').val();
      // var addComment = "<div id='comment'>" + postComment + "</div>";
      $('#finalpush').prepend(postComment + '<br>');
      $('#postComment').val('');
      
    });

  }
  
    //define new post
    var newPost;
    //defines post count
    var postCount = 0;

    //prevent default refresh
     $('#new-blog-post').submit(function(e) {
        e.preventDefault();

        //grabs the posts value and adds it to the html div posts
        var postContent = $('#postContent').val();
        var blogPost = "<p id='posts'>"  + postContent + "</p>";

        // grabs current date, month, year
        var postDate = new Date();
        var postDay = postDate.getDay();
        var postYear = postDate.getFullYear();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        // creates month abbreviations instead of just numbers
        var postMonth = months[postDate.getMonth()];
        var blogDate = postMonth + ' ' + postDay + ', ' + postYear + '<br>' + '<br>';


        // makes sure the comments post to the correct individial post
        var commentBox = "<form id='newComment'><div class='form-group'><textarea name='' id='postComment' cols='30' rows='1' class='form-control'></textarea></div><div class='text-right'><button type='submit' class='btn btn-primary btn-sm'>Add Comment</button></div></form>";
        newPost = new Post(postContent);



        // Detect if postContent is empty
        if ($('#postContent').val()) {
          //adds a post and it's contents
          postCount++;
          $('.finalposts').prepend('Thought ' + postCount + '<br>' + blogPost + '<p id="finalpush"></p>' + commentBox);
          $('#dates').prepend(blogDate);
          $('#postContent').val('');
          console.log(newPost);
        }

        commentSubmitHandler();


     });


});