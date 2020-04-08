#!/bin/sh

USERS_API='/src/services/users/api/Dockerfile'
USERS_DOCKERFILE='/src/services/users/api/Dockerfile'

docker build -t seesee_users_api .

docker-compose -f 'docker-compose.yml' -f 'docker-compose.override.yml' up -d

