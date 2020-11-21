FROM openresty/openresty:alpine-fat

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx/* /etc/nginx/conf.d/
COPY lua/* /usr/local/openresty/lualib/conf/

COPY ssl/seesee.space/certificate.crt /etc/ssl/certificate.crt
COPY ssl/seesee.space/private.key /etc/ssl/private.key

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/conf.d/default.conf"]