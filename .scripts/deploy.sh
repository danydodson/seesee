#!/bin/sh

valid=true

echo "deploying docker-compose files..."

if [ $valid ]
then
    echo "[BUILD] building docker networks" && \
    docker network create nginx-proxy && \
    docker-compose -f '../docker-compose.yml' up
    # docker-compose -f 'docker-compose.yml' -f 'docker-compose.override.yml' up -d && \
fi
