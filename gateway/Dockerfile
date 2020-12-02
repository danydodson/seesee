FROM openresty/openresty:alpine-fat

RUN apk add --no-cache git openssl

RUN echo $'[req] \n\
distinguished_name = req_distinguished_name \n\
x509_extensions = v3_req \n\
prompt = no \n\
[req_distinguished_name] \n\
CN = *.localhost \n\
[v3_req] \n\
keyUsage = keyEncipherment, dataEncipherment \n\
extendedKeyUsage = serverAuth \n\
subjectAltName = @alt_names \n\
[alt_names] \n\
DNS.1 = *.localhost \n\
DNS.2 = localhost' > openssl.cnf

RUN rm -rf /etc/nginx/* && \
  mkdir -p /var/log/nginx && \
  mkdir -p /run/secrets/
 
RUN openssl req -new -newkey rsa:2048 -sha1 -days 3650 -nodes -x509 -keyout /run/secrets/seesee.space.key -out /run/secrets/seesee.space.crt -config openssl.cnf

COPY conf /etc/nginx/conf
COPY servers/* /etc/nginx/
COPY nginx.conf /etc/nginx/nginx.conf
COPY lua/* /usr/local/openresty/lualib/
COPY html/favicon.ico /usr/local/openresty/nginx/html/favicon.ico

# COPY ssl/seesee.space/seesee.space.crt /etc/ssl/seesee.space.crt
# COPY ssl/seesee.space/seesee.space.key /etc/ssl/seesee.space.key

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie
RUN /usr/local/openresty/luajit/bin/luarocks install luacov

RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log
RUN rm openssl.cnf
RUN apk del openssl

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]