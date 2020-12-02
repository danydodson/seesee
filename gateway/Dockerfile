FROM openresty/openresty:alpine-fat

ENV openresty /usr/local/openresty
ENV luarocks /usr/local/openresty/luajit/bin/luarocks

RUN apk add --no-cache git

RUN rm -rf /etc/nginx/* && mkdir -p /var/log/nginx

COPY conf /etc/nginx/conf
COPY servers/* /etc/nginx/
COPY nginx.conf /etc/nginx/nginx.conf
COPY lua/* ${openresty}/lualib/
COPY html/favicon.ico ${openresty}/nginx/html/favicon.ico

RUN ${luarocks} install lua-resty-jwt
RUN ${luarocks} install lua-resty-cookie
RUN ${luarocks} install luacov

RUN ln -sf /dev/stdout /var/log/nginx/bots.access.log

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]