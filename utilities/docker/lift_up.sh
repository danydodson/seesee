#!/usr/bin/zsh

set -e

# up=true

if [ ! -z "(docker networks ls -f name=services_network)" ]
then
    echo "[BUILD] building networks"
    docker network create services_network
else
    echo "[BUILD] services_network exists"
fi

if [ $up ]
then
    echo "[LIFTING] creating containers"
    docker-compose -f ../../docker-compose.dev.yml build
    docker-compose -f ../../docker-compose.dev.yml $up -d auth_data
    docker-compose -f ../../docker-compose.dev.yml $up -d users_data
    docker-compose -f ../../docker-compose.dev.yml $up -d gallery_data
    sleep 5
    docker-compose -f ../../docker-compose.dev.yml stop auth_data
    docker-compose -f ../../docker-compose.dev.yml stop users_data
    docker-compose -f ../../docker-compose.dev.yml stop gallery_data
fi


