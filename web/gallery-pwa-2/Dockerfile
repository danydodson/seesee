FROM node:alpine as builder

WORKDIR '/home/node/workspace'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /home/node/workspace/build/ /usr/share/nginx/html