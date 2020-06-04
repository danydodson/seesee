
# Port mapping
~~~
platform_pwa  - - - -  7001  
gateway_client  - - -  3000/tcp, 0.0.0.0:7000->7000/tcp  
nginx_service - - - -  0.0.0.0:80->80/tcp
listings_service - - - 0.0.0.0:7100->7100/tcp  
listings_db - - - - -  0.0.0.0:7200 -> 3306/tcp  
users_service - - - -  0.0.0.0:7101->7101/tcp  
users_db  - - - - - -  0.0.0.0:7201 -> 3306/tcp  
~~~