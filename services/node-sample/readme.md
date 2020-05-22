### https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker

### ...

### Generate your key with the openssl command:

sudo openssl dhparam -out /home/ubuntu/node_project/dhparam/dhparam-2048.pem 2048

### Then relaunch webserver
docker-compose up -d --force-recreate --no-deps webserver


### Open root crontab file to run the renewal script at a specified interval
sudo crontab -e 

*/5 * * * * /home/ubuntu/node_project/ssl_renew.sh >> /var/log/cron.log 2>&1

tail -f /var/log/cron.log

