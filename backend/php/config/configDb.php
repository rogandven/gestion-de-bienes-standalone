<?php
    require __DIR__ . '/../classes/DatabaseConnection.php';

    $conn = new DatabaseConnection(
        "1.0.0.1", 
        "sqlexpress", 
        1433, 
        "master", 
        "sa", 
        "ABCD1234****####ROGERVENEGAS"
    );

    $conn->connectDatabase();
?>