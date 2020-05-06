
#!/bin/sh

purge=true

if [ $purge ]
then
    echo "[CLEANING] docker-compose down remove orphans"
    docker-compose down --remove-orphans --volumes
fi

if [ $purge ]
then
    echo "[CLEANING] docker prune system"
    yes | docker system prune --all && yes | docker system prune --volumes
fi

if [ $purge ]
then
    echo "[CLEANING] removing all node_modules"
    rm -rf ../gateway/client/node_modules && \
    rm -rf ../gateway/passport/node_modules && \
    rm -rf ../services/gallery/api/node_modules && \
    rm -rf ../services/users/api/node_modules && \
    rm -rf ../subscribers/rabbit_mq/node_modules && \
    rm -rf ../platform/pwa/node_modules
fi