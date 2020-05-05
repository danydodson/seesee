#!/bin/sh

build=true

if [ $build ]
then
    echo "[BUILD] building docker networks" && \
    docker network create nginx-proxy && \
    echo "[BUILD] building docker images" && \
    docker build -t danydodson/seesee_nginx_proxy "../services/nginx/proxy" && \
    docker build -t danydodson/seesee_users_api "../services/users/api" && \
    docker build -t danydodson/seesee_dev_proxy "../services/tunnel" --build-arg ROOTPW=seesee && \
    docker build -t danydodson/seesee_web_client "../gateway/web_client"
fi
