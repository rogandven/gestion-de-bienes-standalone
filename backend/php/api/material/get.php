<?php
    define("IS_PUBLIC", true);
    require_once __DIR__ . '/../../controller/materialController.php'; 
    require_once __DIR__ . '/../../config/configDb.php'; 

    echo MaterialController::getMateriales($conn, $_GET["bodegaId"]);
?>