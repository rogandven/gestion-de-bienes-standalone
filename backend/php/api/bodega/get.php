<?php
    define("IS_PUBLIC", true);
    require __DIR__ . '/../../controller/bodegaController.php'; 
    require __DIR__ . '/../../config/configDb.php'; 

    echo BodegaController::getBodegas($conn, $_GET["campusId"]);
?>