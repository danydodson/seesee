# FROM node:10.9.0-alpine as builder
FROM node:10.9.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
# COPY yarn* /usr/src/app

# set prod flag so dev deps aren't installed
RUN yarn install --production=true

COPY . /usr/src/app

# build the production build
RUN yarn build

# EXPOSE 3000

CMD yarn start

# RUN docker cp gateway_testing:/usr/src/app/build/ /home/dany/projects/github/seesee/z/usr/share/nginx/html

# # Start and nginx container
# FROM nginx

# # Set our custom nginx.conf in the container
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copy the react build from the build container
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# # Set permissions so nginx can serve it
# RUN chown nginx.nginx /usr/share/nginx/html/ -R

# EXPOSE 80