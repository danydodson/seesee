FROM node:latest

USER root

RUN apt-get update && apt-get install -y ranger vim

USER node

RUN mkdir -p /home/node/api-gateway && chown -R node:node /home/node/api-gateway

WORKDIR /home/node/api-gateway

COPY . .

RUN yarn install --production

EXPOSE 3000

CMD yarn start