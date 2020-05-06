#!/bin/sh

clean=true
build=false
lift=false
push=false

if [ $clean ]
then
    echo "[CLEANING] docker-compose down remove orphans"
    cd ../services/nginx/proxy && docker-compose down --remove-orphans --volumes && cd ../../../bin && \
    cd ../services/tunnel && docker-compose down --remove-orphans --volumes && cd ../../bin
    cd ../subscribers/grafana && docker-compose down --remove-orphans --volumes && cd ../../bin
fi

if [ $clean ]
then
    echo "[CLEANING] pruning docker all"
    yes | docker system prune --all
fi

if [ $clean ]
then
    echo "[CLEANING] pruning docker volumes"
    yes | docker system prune --volumes
fi

# if [ $clean ]
# then
#     echo "[CLEANING] Removing all node_modules"
#     rm -rf ../gateway/web_client/node_modules && \
#     rm -rf ../services/auth/api/node_modules && \
#     rm -rf ../services/listings/api/node_modules && \
#     rm -rf ../services/users/api/node_modules && \
#     rm -rf ../subscribers/rabbit_mq/node_modules && \
#     rm -rf ../web/gallery_pwa/node_modules
# fi

# if [ $build ]
# then
#     echo "[BUILD] building docker networks" && \
#     docker network create sevrices_network && \
#     echo "[BUILD] building docker images" && \
#     docker build -t danydodson/seesee_proxy_tunnel "../services/tunnel" --build-arg ROOTPW=root && \
#     docker push danydodson/seesee_proxy_tunnel
# fi

# if [ $lift ]
# then
#     echo "[UP] lifting nginx_proxy, nginx_le, & docker_gen..."
#     docker-compose -f '../services/nginx/proxy/docker-compose.yml' up -d
# fi

# if [ $lift ]
# then
#     echo "[UP] lifting grafana..."
#     docker-compose -f '../subscribers/grafana/docker-compose.yml' up -d
# fi

# if [ $lift ]
# then
#     echo "[UP] lifting proxy_tunnel..."
#     docker-compose -f '../services/tunnel/docker-compose.yml' up -d
# fi

# if [ $push ]
# then
#     echo "[PUSH] pushing images to docker..."
#     docker push danydodson/seesee_nginx_proxy && \
#     docker push danydodson/seesee_users_api && \
#     docker push danydodson/seesee_dev_proxy && \
#     docker push danydodson/seesee_web_client
# fi

# HOST=${WEBSTACK_HOST:-webstack.loc}

# # note: postgres fails if ".gitkeep" is present in mounted-volumes/postgres-main.
# echo "Ensuring data directories exist in ./mounted-volumes"
# mkdir -p ./mounted-volumes/postgres-main
# mkdir -p ./mounted-volumes/rabbitmq-broker
# mkdir -p ./mounted-volumes/redis-main
# mkdir -p ./mounted-volumes/yarn_cache

# if [ -f .env ]; then
#   echo ".env file already exists. Make sure it contains the environment variables listed in example.env"
# else
#    echo "Copying env.development.example to .env"
#    cp env.development.example .env
# fi

# if ! grep -q "$HOST" "/etc/hosts"; then
#   echo "Your /etc/hosts file needs:\n  127.0.0.1 webstack.loc\n  127.0.0.1 ws.webstack.loc"
# fi

# sh -c "sudo chown -R nodeuser mounted-volumes/yarn_cache"
# sh -c "sudo chmod -R 777 /mounted-volumes/yarn_cache"

# echo "Building dev-mode Docker containers for all services..."
# bin/dev.sh build

# echo "Installing dev-mode npm packages for passportjs-auth"
# bin/dev.sh run --no-deps passportjs-auth yarn install
# bin/dev.sh run --no-deps passportjs-auth yarn build:ts

# echo "Installing dev-mode npm packages for websocket-push"
# bin/dev.sh run --no-deps websocket-push yarn install

# echo "Installing dev-mode npm packages for frontend-web"
# bin/dev.sh run --no-deps frontend-web yarn install

# echo "Installing dev-mode ruby gems for backend-api"
# bin/dev.sh run backend-api bundle install

# #!/bin/sh

# valid=true

# if [ $valid ]
# then
#     echo "[LIGHTSAIL] building aws-cli container" && \
#     cd ../services/lightsail && \
#     make aws-cli-run
# fi

# # installing docker-compose
# # sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# # sudo chmod +x /usr/local/bin/docker-compose