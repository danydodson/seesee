
#!/bin/bash

COMPOSE="/usr/local/bin/docker-compose --no-ansi"
DOCKER="/usr/bin/docker"

cd /home/ubuntu/seesee/
# $COMPOSE run certbot renew --dry-run && $COMPOSE kill -s SIGHUP nginx_proxy
$COMPOSE run certbot renew && $COMPOSE kill -s SIGHUP nginx_proxy
$DOCKER system prune -af