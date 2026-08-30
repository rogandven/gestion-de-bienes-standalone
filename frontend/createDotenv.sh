#!/bin/sh

# $1 = BACKEND_IP

set -eou pipefail

echo ""                                                     > ./config/env.php
echo "<?php"                                                >> ./config/env.php
echo "  if (!defined('IS_PUBLIC')) {"                       >> ./config/env.php
echo "      header('Location: /');"                         >> ./config/env.php
echo "      die();"                                         >> ./config/env.php
echo "  }"                                                  >> ./config/env.php
echo "  class Env {"                                        >> ./config/env.php
echo "      final public const BACKEND_IP = '${1}';"        >> ./config/env.php
echo "  }"                                                  >> ./config/env.php
echo "?>"                                                   >> ./config/env.php
