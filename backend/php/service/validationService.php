<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require_once __DIR__ . '/../classes/ServiceResponse.php'; 

    abstract class ValidationService {
        public static function validateInt($value, $min, $max, $FIELD_NAME) {
            if ($value != (int)$value) {
                return new ServiceResponse(400, $FIELD_NAME . " debe ser un número", NULL);
            }
            $value = (int)$value;
            if ($min !== NULL && $value < $min) {
                return new ServiceResponse(400, $FIELD_NAME . " debe ser menor que " . $min, NULL);
            }
            if ($max !== NULL && $value > $max) {
                return new ServiceResponse(400, $FIELD_NAME . " debe ser mayor que " . $max, NULL);
            }
            return new ServiceResponse(200, "", $value);
        }

        public static function validateString($value, $max, $FIELD_NAME) {
            $value = trim((string)$value);
            $value = (string)preg_replace('/[^a-zA-Z0-9 -]/s', '', $value);
            if (strlen($value) <= 0) {
                return new ServiceResponse(400, $FIELD_NAME . " no puede ser vací@", NULL);
            }
            if ($max !== NULL && strlen($value) > $max) {
                return new ServiceResponse(400, $FIELD_NAME . " debe tener menos de " . $max . " caracteres", NULL);
            }
            return new ServiceResponse(200,"", $value);
        }
    }
?>