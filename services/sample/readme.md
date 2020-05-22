## ...


## Generate your key with the openssl command:

sudo openssl dhparam -out /home/ubuntu/seesee/certs/dhparam/dhparam-2048.pem 2048


## Then relaunch nginx_proxy
docker-compose up -d --force-recreate --no-deps nginx_proxy


## Open root crontab file to run the renewal script at a specified interval
sudo crontab -e 

*/5 * * * * /home/ubuntu/node_project/ssl_renew.sh >> /var/log/cron.log 2>&1

tail -f /var/log/cron.log


## https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker