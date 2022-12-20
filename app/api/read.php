<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
include_once '../config/database.php';
 
$ch = curl_init();
 
$source = isset($_GET['sources']) && !empty($_GET['sources']) ? $_GET['sources'] : '';
$category = isset($_GET['categories']) && !empty($_GET['categories']) ? $_GET['categories'] : '';
$country = isset($_GET['countries']) && !empty($_GET['countries']) ? $_GET['countries'] : '';
 
$apiUrl = 'https://api.mediastack.com/v1/news?access_key=e51b8819364d71188fbdfc28e7a9777a&limit=100&languages=en&date=' . date("Y-m-d");
if (!empty($country)) {
    $apiUrl .= '&countries=' . $country;
}
if (!empty($source)) {
    $apiUrl .= '&sources=' . $source;
}
if (!empty($category)) {
    $apiUrl .= '&categories=' . $category;
}
 
curl_setopt($ch, CURLOPT_URL, $apiUrl);
 
$result = curl_exec($ch);
 
curl_close($ch);
