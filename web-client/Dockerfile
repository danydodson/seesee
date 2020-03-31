FROM node:alpine as builder

WORKDIR '/opt/web-client'

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /opt/web-client/build/ /usr/share/nginx/html