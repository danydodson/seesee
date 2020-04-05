FROM node:alpine as builder

FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /app/node/app

WORKDIR '/home/node/app'

COPY package*.json .

RUN npm install

USER node

COPY --chown=node:node . .

FROM nginx

RUN npm run build

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html