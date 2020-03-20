FROM node:latest

USER root

RUN apt-get update && apt-get install -y ranger vim

USER node

RUN mkdir -p /home/node/listings-service && chown -R node:node /home/node/listings-service

WORKDIR /home/node/listings-service

COPY . .

RUN yarn install --production

# EXPOSE 3000

CMD yarn start