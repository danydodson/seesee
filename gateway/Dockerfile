FROM openresty/openresty:alpine-fat

RUN apk add --no-cache git

RUN rm -rf /etc/nginx/* && mkdir -p /var/log/nginx

# COPY certs/seesee.space.crt /etc/ssl/seesee.space.crt
# COPY certs/seesee.space.key /etc/ssl/seesee.space.key

COPY nginx /etc/nginx
COPY lua/* /usr/local/openresty/lualib/

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie
RUN /usr/local/openresty/luajit/bin/luarocks install luacov

RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log

# EXPOSE 80

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]