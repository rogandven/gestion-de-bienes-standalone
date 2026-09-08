<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    abstract class GeneralConstants {
        public const int MIN_ID = 1;
        public const int MAX_ID = 256;
    }
?>