<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    class ServiceResponse {
        public $statusCode;
        public $message;
        public $data;
        
        public function __construct($statusCode, $message, $data) {
            $this->statusCode = $statusCode;
            $this->message = $message;
            $this->data = $data;
        }

        public function getJSON() {
            return json_encode($this);
        }
    }
?>