<?php
    require __DIR__.'/vendor/autoload.php';
    define('DEBUG', false);
    
    use mindplay\vite\Manifest;

    $vite = new Manifest(
        manifest_path: dirname(__DIR__).'/node/dist/.vite/manifest.json',
        base_path: '/node/dist/',
        dev: DEBUG,
    );

    $tags = $vite->createTags("src/main.tsx");
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
        </div>
        <div id="root"></div>
        <?= $tags->js ?>
    </body>
</html>