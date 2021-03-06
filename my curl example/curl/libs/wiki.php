<?php

 error_reporting(E_ALL);
 ini_set("display_errors", true);
 
$ch = curl_init();
curl_setopt_array(
  $ch,
  array(
    CURLOPT_URL => 'http://api.geonames.org/wikipediaSearchJSON?',
	CURLOPT_POST => true,
	CURLOPT_POSTFIELDS => 'formatted=true&q=london&maxRows=1&username=aaronspiller',
	CURLOPT_RETURNTRANSFER => true
  )
);
$result = curl_exec($ch);
curl_close($ch);
$decode = json_decode($result, true);
$output['data'] = $decode['geonames'];
header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);
?>