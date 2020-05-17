#!/usr/bin/zsh

up=true

if [ ! -z "(docker networks ls -f name=services_network)" ]
then
    echo "[BUILD] building networks"
    docker network create services_network
fi

if [ $up ]
then
    echo "[LIFTING] creating containers"
    # docker-compose -f ../../docker-compose.yml build
    docker-compose -f ../../docker-compose.yml up --build
    # docker-compose -f ../../docker-compose.yml up -d
fi


