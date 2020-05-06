#!/bin/sh

lift=true

if [ ! -z "(docker networks ls -f name=services_network)" ]
then
    echo "[BUILD] building networks"
    docker network create services_network
else
    echo "services_network exists"
fi

if [ $lift ]
then
    echo "[LIFTING] creating containers"
    docker-compose up -d
fi