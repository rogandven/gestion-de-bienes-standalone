#! /bin/bash
set -euo pipefail

if [[ "$(whoami)" != "root" ]]; then
    echo "apt-key: command must be ran as root";
    exit 1
fi

if [[ "$1" != "add" ]]; then
    echo "apt-key: unknown command: $1"
    exit 1
fi

if [[ "$2" == "" ]]; then
    echo "apt-key: invalid key"
    exit 1
fi

if [[ ! -d /usr/share/keyrings ]]; then
    echo "[apt-key] Directory does not exist! Creating it..."
    mkdir -p /usr/share/keyrings
fi

if !(gpg --version > /dev/null 2>&1); then
    echo "[apt-key] GPG is not installed! Installing it..."
    apt install gpg -y > /dev/null 2>&1
fi

(cat "$2" | gpg --dearmor --yes) >> /usr/share/keyrings/legacy.keyring.gpg