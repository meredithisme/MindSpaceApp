console.log("Sanity Check: JS is working!");

$(document).ready(function(){


 //object constructor to create new post objects 
  function Post(body) {
      this.body = body;
      this.createdAt = new Date();
  }


  $('#newPost').on('submit', function(e) {
    e.preventDefault();
      $.post('/api/posts', $('#newPost').serialize(),function(response) {
        console.log('the response is ', response);
      })

/*    <li id="<%= contents[i]._id %>">
        <div class='thought'>Thought <%= i+1 %>
        </div> <br> <%= contents[i].contents %>
        <div class="pull-right">
            <button class="btn" id="deletePost"><i class="fa fa-minus-square-o"></i></button>
        </div>
      </li>*/
      .done(function(contents) {
         var title = $('li:first').text();
         var number = title[8]+ title[9];
         //prepend title & contents to list
         $('ul').prepend('<li id=\"'+ contents._id + ' \">' + '<div class="thought">'+ 'Thought ' + (parseInt(number)+1) + "</div> <br>" + contents.contents + "<div class='pull-right'>'<button class='btn' id='deletePost'><i class='fa fa-minus-square-o></i></button></div>" + '</li>');
         // clear form contents
         $('#newPost')[0].reset();
         // give focus back to postContent
         $('#submitPost').focus();
       });
    });  
  });

  // Delete Single Posts Unique Id 

  $(document).on('click', '#deletePost', function(e) {
    e.preventDefault();
    console.log("delete icon was clicked!");

    var PostId = $(this).closest('li').attr('id');
    console.log('The post id is ', PostId);
    // post to server

    $.ajax({
      url: "/api/posts/" + PostId,
      type: "DELETE",
    }).done(function(contents) {
      $('#' + PostId).remove();
    });
  });
  // End Delete Post


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
     $('#newPost').submit(function(e) {
        e.preventDefault();

        //grabs the posts value and adds it to the html div posts
        var postContent = $('#postContent').val();
        var blogPost = "<p id='posts'>"  + postContent + "</p>";

        // // grabs current date, month, year
        // var postDate = new Date();
        // var postDay = postDate.getDay();
        // var postYear = postDate.getFullYear();
        // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        // // creates month abbreviations instead of just numbers
        // var postMonth = months[postDate.getMonth()];
        // var blogDate = postMonth + ' ' + postDay + ', ' + postYear + '<br>' + '<br>';


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