FROM openresty/openresty:alpine-fat

RUN apk add --no-cache git openssl

RUN rm -rf /etc/nginx/* && \
  mkdir -p /var/log/nginx && \
  mkdir -p /run/secrets

RUN echo $'[req] \n\
distinguished_name = req_distinguished_name \n\
x509_extensions = v3_req \n\
prompt = no \n\
[req_distinguished_name] \n\
CN = *.seesee.space \n\
countryName = US \n\
stateOrProvinceName = Indiana \n\
localityName = Evansville \n\
0.organizationName = SeeSee \n\
[v3_req] \n\
keyUsage = keyEncipherment, dataEncipherment \n\
extendedKeyUsage = serverAuth \n\
subjectAltName = @alt_names \n\
[alt_names] \n\
DNS.1 = *.seesee.space \n\
DNS.2 = seesee.space' > openssl.cnf
 
RUN openssl req -new -newkey rsa:2048 -sha1 -days 3650 -nodes -x509 -keyout /run/secrets/cert.key -out /run/secrets/cert.crt -config openssl.cnf

COPY conf /etc/nginx/conf
COPY servers/* /etc/nginx/
COPY nginx.conf /etc/nginx/nginx.conf
COPY lua/* /usr/local/openresty/lualib/
COPY html/favicon.ico /usr/local/openresty/nginx/html/favicon.ico

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie
RUN /usr/local/openresty/luajit/bin/luarocks install luacov

RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log
RUN rm openssl.cnf
RUN apk del openssl

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]