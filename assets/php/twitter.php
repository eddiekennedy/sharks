<?php
require_once('twitteroauth/twitteroauth/twitteroauth.php');
$key = "";
$key_secret = "";
$token = "";
$token_secret = "";
$connection = new TwitterOAuth($key, $key_secret, $token, $token_secret);
$feed = $connection->get('statuses/user_timeline',
	array(
		'screen_name' => 'eddiekennedy', 
		'count' => 5
	));
print_r(json_encode($feed));
?>