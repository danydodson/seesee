#!/bin/sh

lift=true

if [ $lift ]
then
    echo "[UP] lifting nginx_proxy, nginx_le, & docker_gen..."
    docker-compose -f '../services/nginx/proxy/docker-compose.yml' up -d
fi

if [ $lift ]
then
    echo "[UP] lifting grafana..."
    docker-compose -f '../subscribers/grafana/docker-compose.yml' up -d
fi

if [ $lift ]
then
    echo "[UP] lifting proxy_tunnel..."
    docker-compose -f '../services/tunnel/docker-compose.yml' up -d
fi
