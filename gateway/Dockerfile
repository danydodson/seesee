FROM openresty/openresty:alpine-fat

RUN apk add --no-cache git

RUN rm -rf /etc/nginx/* && \
  mkdir -p /etc/nginx/sites-available && \
  mkdir -p /etc/nginx/sites-enabled && \
  mkdir -p /var/log/nginx

# COPY certs/* /etc/ssl/certs

# COPY nginx /etc/nginx
COPY lua /etc/nginx/lua
# COPY lua /usr/local/openresty/nginx/lua

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stdout /var/log/nginx/error.log

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]09