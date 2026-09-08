<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require_once __DIR__ . '/../service/bodegaService.php'; 
    require_once __DIR__ . '/../service/validationService.php';
    require_once __DIR__ . '/../constants/generalConstants.php'; 

    abstract class BodegaController {
        public static function getBodegas($conn, $campusId) {
            $result = ValidationService::validateInt($campusId, GeneralConstants::MIN_ID, GeneralConstants::MAX_ID, "CAMPUS_ID");
            if ($result.isNegative()) {
                return $result.getJSON();
            }
            $result = BodegaService::getBodegas($conn, $campusId);
            return $result.getJSON();
        }   
    }
?>