FROM nginx:mainline-alpine

# replace nginx default.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY conf.d/default.conf /etc/nginx/default.conf 
# or ... ???
# COPY conf.d/default.conf /etc/nginx/conf.d/nginx.conf

# copy the react build from the build container
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# set permissions so nginx can serve it
# RUN chown nginx.nginx /usr/share/nginx/html/ -R

EXPOSE 80