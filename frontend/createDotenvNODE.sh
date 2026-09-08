#!/bin/sh

# $1 = BACKEND_IP

if [ "$1" = "" ]; then
    echo "PARAMETER NOT SET" && exit 1
fi

echo ""                                                     > ./.env
echo "VITE_API_URL = $1"                                    >> ./.env
echo "API_URL = $1"                                         >> ./.env
