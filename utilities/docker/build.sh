#!/bin/sh

if [ ! -z "(docker networks ls -f name=services_network)" ]
then
    echo "[BUILD] Building docker services_network..."
    docker network create services_network
fi

# dir=/home/dany/projects/github/seesee

echo "[BUILD] building and lifting..."
docker-compose -f ../../docker-compose.yml build --no-cache
docker-compose -f ../../docker-compose.yml up -d

# echo "[BUILD] Building users service db..."
# docker-compose -f ../../docker-compose.yml up users_service_db

# echo "[BUILD] Building users service..."
# docker-compose -f ../../docker-compose.yml up users_service

# docker-compose -f ../../docker-compose.dev.yml stop users_data
# docker-compose -f ../../docker-compose.dev.yml stop users_services

# echo "[BUILD] building danydodson/seesee_proxy_tunnel..."
# docker build -t danydodson/seesee_proxy_tunnel "$dir/utilities/tunnel" --build-arg ROOTPW=password

# echo "[BUILD] building danydodson/seesee_gateway_client..."
# docker build --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') -t danydodson/seesee_gateway_client "$working-dir/gateway/client"

# echo "[BUILD] building danydodson/seesee_..."
# docker build -t danydodson/seesee_ "$dir"