FROM node:alpine as builder

WORKDIR '/home/node/app'

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /home/node/app/build/ /usr/share/nginx/html