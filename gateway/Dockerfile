FROM openresty/openresty:alpine-fat

RUN apk add --no-cache git

RUN rm -rf /etc/nginx/* && \
  mkdir -p /var/log/nginx && \
  mkdir -p /etc/ssl/seesee.space && \
  mkdir -p /etc/ssl/vouch.seesee.space

COPY certs/seesee.space/* /etc/ssl/seesee.space/
COPY certs/vouch.seesee.space/* /etc/ssl/vouch.seesee.space/

COPY nginx /etc/nginx
COPY lua /usr/local/openresty/nginx/lua

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie
RUN /usr/local/openresty/luajit/bin/luarocks install luacov

RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log

# EXPOSE 80

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]09