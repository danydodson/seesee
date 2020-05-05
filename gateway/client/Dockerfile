FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

RUN yarn build

CMD yarn watch
