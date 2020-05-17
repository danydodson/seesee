#!/bin/sh

if [ ! -z "(docker networks ls -f name=services_network)" ]
then
    echo "[BUILD] Building docker services_network..."
    docker network create services_network
fi

working-dir=/home/dany/projects/github/seesee

echo "[BUILD] Building docker-compose dev..."
# docker-compose -f ../../docker-compose.yml build
docker-compose -f ../../docker-compose.yml up --build

# docker-compose -f ../../docker-compose.dev.yml stop users_data
# docker-compose -f ../../docker-compose.dev.yml stop users_services

# echo "[BUILD] building danydodson/seesee_proxy_tunnel..."
# docker build -t danydodson/seesee_proxy_tunnel "$working-dir/utilities/tunnel" --build-arg ROOTPW=password

# echo "[BUILD] building danydodson/seesee_gateway_client..."
# docker build --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') -t danydodson/seesee_gateway_client "$working-dir/gateway/client"

# echo "[BUILD] building danydodson/seesee_..."
# docker build -t danydodson/seesee_ "$working-dir"