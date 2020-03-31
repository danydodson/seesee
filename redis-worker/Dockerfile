FROM node:alpine

WORKDIR "/opt/redis-worker"

COPY package.json .

RUN yarn

COPY . .

CMD yarn start