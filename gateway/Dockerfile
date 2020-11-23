FROM openresty/openresty:1.19.3.1-focal

# RUN apk add --no-cache git openssl

RUN rm -rf /etc/nginx/*

COPY nginx/* /etc/nginx/conf.d/
COPY lua/* /usr/local/openresty/lualib/conf/

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
# RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie
# RUN /usr/local/openresty/luajit/bin/luarocks install resty-mongol --server=http://rocks.moonscript.org

# ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/conf.d/default.conf"]