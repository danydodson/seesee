#!/bin/sh

valid=true

echo "deploying docker-compose files..."

if [ $valid ]
then
    docker-compose -f '../docker-compose.yml' up -d
    # docker-compose -f 'docker-compose.yml' -f 'docker-compose.override.yml' up -d && \
fi
