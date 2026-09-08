<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require_once __DIR__ . '/../classes/DatabaseConnection.php';
    require_once __DIR__ . '/env.php';

    $conn = new DatabaseConnection(
        Env::DATABASE_IP, 
        "sqlexpress", 
        1433, 
        "master", 
        "sa", 
        Env::MSSQL_PASSWORD
    );

    $conn = $conn->connectDatabase() or die("No se pudo conectar con la base de datos");
?>