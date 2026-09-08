<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require_once __DIR__ . '/../service/campusService.php'; 
    require_once __DIR__ . '/../service/validationService.php'; 

    abstract class CampusController {
        public static function getCampuses($conn) {
            $result = CampusService::getCampuses($conn);
            return $result.getJSON();
        }
    }
?>