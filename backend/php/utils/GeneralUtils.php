<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    abstract class GeneralUtils {
        public static function coalesceArrayCall($array = [], $key = 0, $default = 0) {
            if (!is_array($array)) {
                return $default;
            }
            if (((string)$key) !== $key) {
                return $default;
            }
            if (!isset($array[$key])) {
                return $default;
            }
            return $array[$key];
        }
    }
?>