FROM nginx:mainline-alpine

# remove default conf.d/* files
# then copy local .conf files to image
RUN rm /etc/nginx/conf.d/default.conf
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY conf.d/hello.conf /etc/nginx/conf.d/hello.conf 

# copy html files to image
COPY ./html /usr/share/nginx/html

# copy the react build from the build container
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# set permissions so nginx can serve it
RUN chown -R nginx.nginx /usr/share/nginx/html/

EXPOSE 80