
#!/usr/bin/bash

push=true

if [ $push ]
then
    echo "[PUSH] pushing to dockerhub"
    docker push danydodson/seesee_proxy_tunnel
fi

if [ $push ]
then
    echo "[LIGHTSAIL] building aws-cli container"
    # cd ../services/lightsail && \
    # make aws-cli-run
fi