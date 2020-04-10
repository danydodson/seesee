#
FROM nginx:stable-alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

#
EXPOSE 80

# start app
CMD ["nginx", "-g", "daemon off;"]
