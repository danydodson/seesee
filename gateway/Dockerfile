FROM openresty/openresty:alpine-fat

RUN apk add --no-cache git openssl

RUN rm -rf /etc/nginx/* && \
  mkdir -p /var/log/nginx

# COPY ssl/seesee.space/seesee.space.crt /etc/ssl/seesee.space.crt
# COPY ssl/seesee.space/seesee.space.key /etc/ssl/seesee.space.key

COPY conf /etc/nginx/conf
COPY servers/* /etc/nginx/
COPY nginx.conf /etc/nginx/nginx.conf
COPY lua/* /usr/local/openresty/lualib/
COPY html/favicon.ico /usr/local/openresty/nginx/html/favicon.ico

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie
RUN /usr/local/openresty/luajit/bin/luarocks install luacov

RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]