#!/bin/sh

# $1 = BACKEND_IP

set -eou pipefail

ENV_FILE="
<?php
    if (!defined('IS_PUBLIC')) {
        header('Location: /');
        die();
    }    

    class Env {
        final public const BACKEND_IP = \""$1"\";
    }
?>
"

echo "$ENV_FILE" > ./config/env.php
