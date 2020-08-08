
docker-compose down --remove-orphans --volumes && \

yes | docker system prune --volumes && yes | docker system prune --all