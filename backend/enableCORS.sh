#!/bin/sh

set -eou pipefail

echo "<IfModule mod_headers.c>"                                                 >> /etc/apache2/apache2.conf 
echo "      Header set Access-Control-Allow-Origin \"${1}:${2}\""                    >> /etc/apache2/apache2.conf 
echo "      Header set Vary \"Origin\""                                         >> /etc/apache2/apache2.conf 
echo "</IfModule>"                                                              >> /etc/apache2/apache2.conf 