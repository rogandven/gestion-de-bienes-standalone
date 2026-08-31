<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    class DatabaseConnection {
        public $serverName;
        public $instanceName;
        public $portNumber;
        public $databaseName;
        public $username;
        public $password;
        
        public function __construct($serverName, $instanceName, $portNumber, $databaseName, $username, $password) {
            $this->serverName = $serverName;
            $this->instanceName = $instanceName;
            $this->portNumber = $portNumber;
            $this->databaseName = $databaseName;
            $this->username = $username;
            $this->password = $password;
        }

        private function getProps() {
            return array(
                "1" => "{$this->serverName}\\{$this->instanceName}, {$this->portNumber}",
                "2" => array(
                    "Database" => $this->databaseName,
                    "UID" => $this->username,
                    "PWD" => $this->password
                )
            );
        }

        public function connectDatabase() {
            $props = $this->getProps();
            $conn = sqlsrv_connect($props["1"], $props["2"]);
            if (!$conn) {
                die(print_r(sqlsrv_errors(), true));
            }
            return $conn;
        }
    }
?>