<?php
    require __DIR__ . '/../classes/DatabaseConnection.php';

    $conn = new DatabaseConnection(
        "SQLExpress", 
        "sqlexpress", 
        1433, 
        "master", 
        "sa", 
        "ABCD1234****####ROGERVENEGAS"
    );

    $conn->connectDatabase();
?>