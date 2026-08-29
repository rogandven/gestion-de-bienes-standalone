<?php
    define("IS_PUBLIC", true);
    require __DIR__ . '/classes/ServiceResponse.php';
    require __DIR__ . '/config/configDb.php';

    $response = new ServiceResponse(200, "hola", NULL);

    echo $response->getJSON();
?>