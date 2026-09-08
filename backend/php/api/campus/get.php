<?php
    define("IS_PUBLIC", true);
    require __DIR__ . '/../../controller/campusController.php'; 
    require __DIR__ . '/../../config/configDb.php'; 

    echo CampusController::getCampuses($conn);
?>