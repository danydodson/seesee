#!/bin/sh

valid=true

if [ $valid ]
then
    echo "[LIGHTSAIL] building aws-cli container" && \
    cd ../services/lightsail && \
    make aws-cli-run
fi

# sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# sudo chmod +x /usr/local/bin/docker-compose