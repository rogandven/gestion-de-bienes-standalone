<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }
    
    require __DIR__ . '/../classes/ServiceResponse.php';

    define('API_BASE', 'http://1.0.0.2:80');

    function callAPI($url) {
        try {
            $response = json_decode(file_get_contents(API_BASE . $url));
            if (!isset($response)) {
                throw new Exception("no response received");
            }
            return new ServiceResponse(
                isset($response->statusCode) ? $response->statusCode : 500,
                isset($response->message) ? $response->message : "Error interno del servidor",
                isset($response->data) ? $response->data : NULL,
            );
        } catch (Exception $e) {
            print_r($e);
            return new ServiceResponse(500, "Error interno del servidor", NULL);
        }
    }
?>
