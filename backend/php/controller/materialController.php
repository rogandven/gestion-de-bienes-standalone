<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require __DIR__ . '/../service/materialService.php'; 
    require __DIR__ . '/../service/validationService.php'; 
    require __DIR__ . '/../constants/generalConstants.php'; 

    abstract class MaterialController {
        public static function getMateriales($conn, $bodegaId) {
            $result = ValidationService::validateInt($bodegaId, GeneralConstants::MIN_ID, GeneralConstants::MAX_ID, "BODEGA_ID");
            if ($result.isNegative()) {
                return $result.getJSON();
            }
            $result = MaterialService::getMateriales($conn, $bodegaId);
            return $result.getJSON();
        }   
    }
?>