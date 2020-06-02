
#!/usr/bin/zsh

up=true

# if [ ! -z "(docker networks ls -f name=services_network)" ]
# then
#     echo "[BUILD] building networks"
#     docker network create services_network
# fi

if [ $up ]
then
    echo "[LIFTING] creating containers"
    # docker-compose -f ../../docker-compose.yml build
    docker-compose -f ../../docker-compose.yml up --build
    # docker-compose -f ../../docker-compose.yml up -d
fi


##########################################################################
# script to check if the jwilder proxy container is already running
# and if the ngnix-proxy network exists
# run before "docker-compose up -d" if you use nginx-proxy for several projects
# see https://github.com/docker/compose/issues/2075
##########################################################################

# if [ ! "$(docker network ls | grep nginx-proxy)" ]; then
#     echo "Creating nginx-proxy network ..."
#     docker network create nginx-proxy
# else
#     echo "nginx-proxy network exists."
# fi

# if [ ! "$(docker ps | grep nginx-proxy)" ]; then
#     if [ "$(docker ps -aq -f name=nginx-proxy)" ]; then
#         # cleanup
#         echo "Cleaning Nginx Proxy ..."
#         docker rm nginx-proxy
#     fi
#     # run your container in our global network shared by different projects
#     echo "Running Nginx Proxy in global nginx-proxy network ..."
#     docker run -d --name nginx-proxy -p 80:80 --network=nginx-proxy -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
# else
#     echo "Nginx Proxy already running."
# fi