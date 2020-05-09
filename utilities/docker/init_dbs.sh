#!/usr/bin/zsh

echo "[BUILDING DBS] creating database containers"

docker-compose -f ../../docker-compose.dev.yml build

docker-compose -f ../../docker-compose.dev.yml $up -d db

sleep 5

docker-compose -f ../../docker-compose.dev.yml stop db