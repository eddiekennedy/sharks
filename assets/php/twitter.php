<?php
require_once('twitteroauth/twitteroauth/twitteroauth.php');
$key = "rlZxrboPrprkomatHOnmBA";
$key_secret = "CmKseNSFsWNnXolPTs9fxge691ek3eutQGzN4AXoE";
$token = "126074356-JRn99bLnvOhGhOTK4LaK1oFBKJ8Z9b53YlW9V0Js";
$token_secret = "vl1yoVK5jLezg1Znw8bVdIU1LDbKm3wqVnSIapLZAU";
$connection = new TwitterOAuth($key, $key_secret, $token, $token_secret);
$feed = $connection->get('statuses/user_timeline',
	array(
		'screen_name' => 'eddiekennedy', 
		'count' => 5
	));
print_r(json_encode($feed));
?>