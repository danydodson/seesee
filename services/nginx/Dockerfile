FROM nginx:mainline-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY conf.d/default.conf /etc/nginx/nginx.conf

# Copy the react build from the build container
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Set permissions so nginx can serve it
RUN chown nginx.nginx /usr/share/nginx/html/ -R

EXPOSE 80