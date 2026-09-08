<?php
    define("IS_PUBLIC", true);
    require __DIR__ . '/../../controller/materialController.php'; 
    require __DIR__ . '/../../config/configDb.php'; 

    echo MaterialController::getMateriales($conn, $_GET["bodegaId"]);
?>