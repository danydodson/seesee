FROM node:14 as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package.json /home/node/app

RUN apt-get update && apt-get upgrade \
  && yarn add node-gyp node-pre-gyp

USER node

RUN yarn

COPY --chown=node:node . /home/node/app/

FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --from=builder /home/node/app /home/node/app

USER node

EXPOSE 7101

CMD ["yarn", "watch"]