#!/bin/sh

build=true

if [ $build ]
then
    echo "[BUILD] building docker networks" && \
    docker network create sevrices_network && \
    echo "[BUILD] building docker images" && \
    docker build -t danydodson/seesee_proxy_tunnel "../services/tunnel" --build-arg ROOTPW=root && \
    docker push danydodson/seesee_proxy_tunnel
fi

# docker run command
# docker run -d -P 80:80 -p 2222:22 danydodson/seesee_dev_proxy

# ssh cmd to connect to dev proxy
# ssh -NR :80:localhost:3000 -p 2222 root@dev.seesee.space