<?php
    define("IS_PUBLIC", true);
    require_once __DIR__ . '/../../controller/bodegaController.php'; 
    require_once __DIR__ . '/../../config/configDb.php'; 

    echo BodegaController::getBodegas($conn, $_GET["campusId"]);
?>