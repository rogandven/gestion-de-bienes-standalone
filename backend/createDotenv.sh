#!/bin/sh

# $1 = DATABASE_IP
# $2 = MSSQL_PASSWORD

set -eou pipefail

ENV_FILE="
<?php
    if (!defined('IS_PUBLIC')) {
        header('Location: /');
        die();
    }    

    class Env {
        final public const DATABASE_IP = \""$1"\";
        final public const MSSQL_PASSWORD = \""$2"\";
    }
?>
"

echo "$ENV_FILE" > ./config/env.php
