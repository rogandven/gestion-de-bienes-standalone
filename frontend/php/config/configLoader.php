<?php
    if (!defined('IS_PUBLIC')) {
        header("Location: /");
        die();
    }

    require __DIR__.'/../vendor/autoload.php';
    use mindplay\vite\Manifest;

    function loadJSXComponents($fileName) {
        define('DEBUG', false);

        $vite = new Manifest(
            manifest_path: dirname(__DIR__).'/../node/dist/.vite/manifest.json',
            base_path: '/node/dist/',
            dev: DEBUG,
        );

        $tags = $vite->createTags($fileName);

        return $tags;
    }
?>