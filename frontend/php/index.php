<?php
    define("IS_PUBLIC", true);
    require __DIR__.'/config/configLoader.php';
    require __DIR__.'/services/APICaller.php';
    $tags = loadJSXComponents("src/main.tsx");
    $APIResponse = callAPI("/");
?>  

<!DOCTYPE HTML>
<html>
    <head>
        <title>Hola Mundo</title>
        <?= $tags->preload ?>
        <?= $tags->css ?>
    </head>
    <body>
        <div>
        <?php
            echo "<p>La fecha es " . date("Y-m-d") . "</p>";
        ?>

        <p><?php
            echo "Código de estado: " . $APIResponse->statusCode;
        ?></p>

        <p><?php
            echo "Mensaje: " . $APIResponse->message;
        ?></p>

        <p><?php
            echo ($APIResponse->data != NULL ? "Hay datos" : "No hay datos");
        ?></p>        

        </div>
        <div id="root"></div>
        <?= $tags->js ?>
    </body>
</html>