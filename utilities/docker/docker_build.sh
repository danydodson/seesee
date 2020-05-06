#!/bin/sh


if [ ! -z "(docker networks ls -f name=services_network)" ]
then
    echo "[BUILD] building networks"
    docker network create services_network
else
    echo "services_network already exists"
fi

echo "[BUILD] building docker images"

docker build -t danydodson/seesee_proxy_tunnel "utilities/tunnel" --build-arg ROOTPW=root



