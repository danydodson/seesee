FROM openresty/openresty:alpine-fat

ENV openresty /usr/local/openresty

RUN apk add --no-cache git
RUN rm -rf /etc/nginx/* && mkdir -p /var/log/nginx

RUN ${openresty}/luajit/bin/luarocks install lua-resty-jwt
RUN ${openresty}/luajit/bin/luarocks install lua-resty-cookie

COPY conf.d /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/nginx.conf
COPY servers/* /etc/nginx/
COPY lua/* ${openresty}/lualib/

RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]