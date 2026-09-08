<?php
    define("IS_PUBLIC", true);
    require_once __DIR__ . '/../../controller/bodegaController.php'; 
    require_once __DIR__ . '/../../config/configDb.php';
    require_once __DIR__ . '/../../utils/GeneralUtils.php'; 

    echo BodegaController::getBodegas($conn, GeneralUtils::coalesceArrayCall($_GET, "campusId", -1));
?>