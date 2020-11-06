FROM openresty/openresty:alpine-fat

COPY certs/certificate.crt /etc/ssl/certificate.crt
COPY certs/private.key /etc/ssl/private.key

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/nginx.conf"]