#!/usr/bin/zsh

lift=true

if [ ! -z "(docker networks ls -f name=services_network)" ]
then
    echo "[BUILD] building networks"
    docker network create services_network
else
    echo "[BUILD] services_network exists"
fi

set -e

if [ $lift ]
then
    echo "[LIFTING] creating containers"
    docker-compose -f ../../docker-compose.dev.yml build
    docker-compose -f ../../docker-compose.dev.yml up -d db
    sleep 5
    docker-compose -f ../../docker-compose.dev.yml stop db
fi


