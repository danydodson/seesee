#!/bin/sh

valid=true

if [ $valid ]
then
    echo "[REVERSE_PROXY] building dev-proxy image" && \
    docker build -t {DOCKERUSER}/dev-proxy . --build-arg ROOTPW={PASSWORD} && \
    echo "[REVERSE_PROXY] running danydodson/dev/dev-proxy" && \
    docker run -d -P 80:80 -p 2222:22 {DOCKERUSER}/dev-proxy
    
fi
