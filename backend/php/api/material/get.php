<?php
    define("IS_PUBLIC", true);
    require_once __DIR__ . '/../../controller/materialController.php'; 
    require_once __DIR__ . '/../../config/configDb.php'; 
    require_once __DIR__ . '/../../utils/GeneralUtils.php'; 

    echo MaterialController::getMateriales($conn, GeneralUtils::coalesceArrayCall($_GET, "bodegaId", -1));
?>