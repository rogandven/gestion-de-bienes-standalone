<?php
    define('IS_PUBLIC', true);
    require __DIR__ . '/configDb.php';
    require __DIR__ . '/../classes/SQLHelper.php';

    $result = SQLHelper::fetchQuery($conn, "SELECT * FROM MSreplication_options");
    SQLHelper::closeConnection($conn);

    print_r($result);
?>