#!/bin/sh

# $1 = DATABASE_IP
# $2 = MSSQL_PASSWORD

set -eou pipefail

echo ""                                                     > ./config/env.php
echo "<?php"                                                >> ./config/env.php
echo "  if (!defined('IS_PUBLIC')) {"                       >> ./config/env.php
echo "      header('Location: /');"                         >> ./config/env.php
echo "      die();"                                         >> ./config/env.php
echo "  }"                                                  >> ./config/env.php
echo "  class Env {"                                        >> ./config/env.php
echo "      final public const DATABASE_IP = '${1}';"       >> ./config/env.php
echo "      final public const MSSQL_PASSWORD = '${2}';"    >> ./config/env.php
echo "  }"                                                  >> ./config/env.php
echo "?>"                                                   >> ./config/env.php