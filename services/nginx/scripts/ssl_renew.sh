
#!/usr/bin/zsh

COMPOSE="/usr/local/bin/docker-compose --no-ansi"
DOCKER="/usr/bin/docker"

cd /home/ubuntu/seesee/
$COMPOSE run certbot renew && $COMPOSE kill -s SIGHUP nginx_server
$DOCKER system prune -af