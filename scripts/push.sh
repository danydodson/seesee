#!/bin/sh

push=true

if [ $push ]
then
    echo "[PUSH] pushing images to docker..."
    docker push danydodson/seesee_nginx_proxy && \
    docker push danydodson/seesee_users_api && \
    docker push danydodson/seesee_web_client
fi
