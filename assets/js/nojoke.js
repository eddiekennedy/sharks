(function( $ ){
  // *
	// Define twitter feed
    var twitterFeed =  window.location.href + 'assets/php/twitter.php';
    // Grab tweets
   	$.getJSON( twitterFeed, function( tweets ) {
      // Define the list
      var $tweetUl = $('<ul class="vertical tight tweet-list" />');
      // Loop over tweets
      $.each( tweets, function( i, tweet) {
        // Define list items and append to list
        console.log( tweet)
        var $tweetLi = [
          '<li>',
            tweet.text,
            ' <span class="date">[ ',
              '<a href="#">',
                tweet.created_at,
              '</a> ]',
            '</span>',
          '</li>'
        ].join('');
        //var $tweetLi = $('<li/>').html( $liContent );
        $tweetUl.append( $tweetLi );
      });
      // Remove loading message
      $('p.loading').remove();
      // Append list to the pge
      $('.section.twitter').append( $tweetUl );
    });
}( jQuery ));