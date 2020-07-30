FROM nginx:mainline-alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY services/* /etc/nginx/conf.d/
