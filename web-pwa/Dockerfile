FROM node:14.15.1-alpine

RUN mkdir -p /home/node/app/node_modules && \
  chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY package.json .
COPY yarn.lock .

RUN yarn --pure-lockfile

COPY . .

CMD [ "yarn", "start" ]