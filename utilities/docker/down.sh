
#!/usr/bin/bash

clean=true

if [ $clean ]
then
    echo "[CLEAN] docker-compose down remove orphans"
    docker-compose down --remove-orphans --volumes
fi

if [ $clean ]
then
    echo "[CLEAN] docker prune system"
    yes | docker system prune --all && \
    yes | docker system prune --volumes
fi

if [ $clean ]
then
    echo "[CLEAN] removing all node_modules"
    #
    rm -rf ../../gateway/client/node_modules && \
    rm -rf ../../gateway/client/dist && \
    # 
    rm -rf ../../platforms/gallery-pwa/node_modules && \
    rm -rf ../../platforms/gallery-pwa/dist && \
    rm -rf ../../platforms/gallery-pwa/.cache && \
    rm -rf ../../platforms/gallery-pwa/yarn.lock
    #
    # rm -rf ../gateway/passport/node_modules && \
    # rm -rf ../gateway/passport/build && \
    #
    # rm -rf ../platforms/pwa/node_modules && \
    # rm -rf ../platforms/pwa/build && \
    #
    # rm -rf ../services/gallery/api/node_modules && \
    # rm -rf ../services/gallery/api/build && \
    #
    # rm -rf ../services/gallery/db/node_modules && \
    # rm -rf ../services/gallery/db/build && \
    #
    # rm -rf ../services/users/api/node_modules && \
    # rm -rf ../services/users/api/build && \
    #
    # rm -rf ../services/users/db/node_modules && \
    # rm -rf ../services/users/db/build && \
    #
    # rm -rf ../subscribers/rabbitmq/node_modules && \
    # rm -rf ../subscribers/rabbitmq/build && \
    #
    # rm -rf ../subscribers/websocket/node_modules && \
    # rm -rf ../subscribers/websocket/build && \
fi