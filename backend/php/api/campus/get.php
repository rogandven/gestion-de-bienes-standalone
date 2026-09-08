<?php
    define("IS_PUBLIC", true);
    require_once __DIR__ . '/../../controller/campusController.php'; 
    require_once __DIR__ . '/../../config/configDb.php';

    echo CampusController::getCampuses($conn);
?>