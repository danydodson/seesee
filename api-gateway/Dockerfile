FROM node:latest

USER root

RUN apt-get update && apt-get install -y ranger vim

USER node

RUN mkdir -p /home/node/seesee-platform && chown -R node:node /home/node/seesee-platform

WORKDIR /home/node/seesee-platform

COPY . .

RUN yarn install --production

EXPOSE 7000

CMD yarn start