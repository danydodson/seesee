FROM node:14

RUN mkdir -p /home/node/app/node_modules && \
  chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json /home/node/app/

USER node

RUN yarn install --production

COPY --chown=node:node . .

RUN yarn run build

CMD yarn watch
