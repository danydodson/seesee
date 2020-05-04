FROM jwilder/nginx-proxy

# RUN { \
#       echo 'server_tokens off;'; \
#       echo 'client_max_body_size 5m;'; \
#     } > /etc/nginx/conf.d/my_proxy.conf

# FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html/