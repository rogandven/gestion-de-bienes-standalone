<?php
    define('IS_PUBLIC', true);
    require __DIR__ . '/configDb.php';
    require __DIR__ . '/../classes/SQLHelper.php';

    $result = SQLHelper::executeQuery($conn, file_get_contents(__DIR__ . "/../sql/CREATE_CAMPUS_TABLE.sql"), NULL);
    $result = SQLHelper::executeQuery($conn, file_get_contents(__DIR__ . "/../sql/CREATE_BODEGA_TABLE.sql"), NULL);
    $result = SQLHelper::executeQuery($conn, file_get_contents(__DIR__ . "/../sql/CREATE_MATERIAL_TABLE.sql"), NULL);
    SQLHelper::closeConnection($conn);
?>