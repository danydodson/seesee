FROM openresty/openresty:alpine-fat

# ENV RESTY_OPENSSL_VERSION=1.1.0j
# ENV RESTY_PCRE_VERSION=8.42
# ENV RESTY_VERSION=1.13.6.2

RUN apk add --no-cache git openssl

ENV openresty /usr/local/openresty

RUN ${openresty}/luajit/bin/luarocks install lua-resty-jwt
RUN ${openresty}/luajit/bin/luarocks install lua-resty-cookie

COPY nginx.conf ${openresty}/nginx/conf/nginx.conf
COPY lua/* ${openresty}/lualib/
COPY servers/* /etc/nginx/
COPY conf.d/* /etc/nginx/conf.d/

# RUN mkdir -p /run/secrets/
# RUN openssl req -new -newkey rsa:2048 -sha1 -days 3650 -nodes -x509 -keyout /run/secrets/cert.key -out /run/secrets/cert.crt -config openssl.cnf

ENV seesee_certs /etc/ssl

COPY ssl/seesee.space/certificate.crt $seesee_certs/certificate.crt
COPY ssl/seesee.space/private.key $seesee_certs/private.key
# COPY ssl/seesee.space/seesee.pem $seesee_certs/seesee.pem

# RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log
# RUN rm openssl.cnf
RUN apk del git openssl

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]