
#!/usr/bin/bash

# if [ ! -z "(docker networks ls -f name=services_network)" ]
# then
    # echo "[BUILD] Building docker services_network..."
    # docker network create services_network
# fi

echo "[BUILD] building and lifting..."
docker-compose -f ../../docker-compose.yml build --no-cache
docker-compose -f ../../docker-compose.yml up -d