
# start the reverse proxy container
sudo docker run --detach \
    --name nginx-proxy \
    --publish 80:80 \
    --publish 443:443 \
    --volume /etc/nginx/certs \
    --volume /etc/nginx/vhost.d \
    --volume /usr/share/nginx/html \
    --volume /var/run/docker.sock:/tmp/docker.sock:ro \
    jwilder/nginx-proxy



# start the letsencrypt companion
sudo docker run --detach \
    --name nginx-proxy-letsencrypt \
    --volumes-from nginx-proxy \
    --volume /var/run/docker.sock:/var/run/docker.sock:ro \
    --env "DEFAULT_EMAIL=YOUREMAILHERE" \
    jrcs/letsencrypt-nginx-proxy-companion



# start a demo web server under a subdomain
sudo docker run --detach \
    --name nginx \
    --env "VIRTUAL_HOST=test.EXAMPLE.COM" \
    --env "LETSENCRYPT_HOST=test.EXAMPLE.COM" \
    nginx