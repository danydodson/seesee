#!/bin/sh

nginx_api="../gateway/nginx-proxy"
auth_api="../services/auth/api"
listings_api="../services/listings/api"
users_api="../services/users/api"
redis_api="../services/redis"
web_client="../gateway/web-client"
web_gallery_pwa="../web/gallery-pwa"

image_count=2

valid=true

echo "building $image_count images..."

if [ $valid ]
then
    docker build -t gateway_nginx_proxy $nginx_api && \
    # docker build -t auth_service $auth_api && \
    # docker build -t listings_service $listings_api && \
    docker build -t users_service $users_api && \
    docker build -t redis_service $redis_api && \
    # docker build -t gateway_web_client $web_client && \
    docker build -t web_gallery_pwa $web_gallery_pwa
fi
