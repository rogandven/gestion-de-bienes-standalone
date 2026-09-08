<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    abstract class GeneralConstants {
        public static const int MIN_ID = 1;
        public static const int MAX_ID = 256;
    }
?>