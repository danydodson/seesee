FROM nginx:mainline-alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY conf.d/* /etc/nginx/conf.d/

