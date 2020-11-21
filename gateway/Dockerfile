FROM openresty/openresty:alpine-fat

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx/* /etc/nginx/conf.d/
COPY lua/* /usr/local/openresty/lualib/conf/

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/conf.d/default.conf"]