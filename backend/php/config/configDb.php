<?php
    require __DIR__ . '/../classes/DatabaseConnection.php';
    require __DIR__ . '/env.php';

    $conn = new DatabaseConnection(
        Env::DATABASE_IP, 
        "sqlexpress", 
        1433, 
        "master", 
        "sa", 
        Env::MSSQL_PASSWORD
    );

    $conn->connectDatabase();
?>