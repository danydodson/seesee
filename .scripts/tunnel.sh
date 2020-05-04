#!/bin/sh

valid=true

if [ $valid ]
then
    echo "[TUNNEL] running danydodson/seesee_dev_proxy" && \
    docker run -d -P 80:80 -p 2222:22 danydodson/seesee_dev_proxy
fi
