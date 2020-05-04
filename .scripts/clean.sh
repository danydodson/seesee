#!/bin/sh

clean_docker=true
clean_node=true
clean_build=true

if [ $clean_docker ]
then
    echo "[CLEANING] docker-compose down remove orphans"
    cd ../ && docker-compose down --remove-orphans --volumes && cd .scripts
fi

if [ $clean_docker ]
then
    echo "[CLEANING] pruning docker all"
    yes | docker system prune --all
fi

if [ $clean_docker ]
then
    echo "[CLEANING] pruning docker volumes"
    yes | docker system prune --volumes
fi

if [ $clean_node ]
then
    echo "[CLEANING] Removing all node_modules"
    rm -rf ../gateway/web_client/node_modules && \
    rm -rf ../services/auth/api/node_modules && \
    rm -rf ../services/listings/api/node_modules && \
    rm -rf ../services/redis/node_modules && \
    rm -rf ../services/users/api/node_modules && \
    rm -rf ../subscribers/rabbit_mq/node_modules && \
    rm -rf ../web/gallery_pwa/node_modules
fi