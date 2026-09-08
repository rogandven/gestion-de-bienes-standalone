<?php
    define("IS_PUBLIC", true);
    require_once __DIR__ . '/classes/ServiceResponse.php';
    require_once __DIR__ . '/config/configDb.php';

    $response = new ServiceResponse(200, "hola", NULL);

    echo $response->getJSON();
?>