FROM node:14

RUN apt-get update && \
  apt-get upgrade && \
  mkdir -p /home/node/app/node_modules && \
  chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY yarn* /home/node/app/
COPY package* /home/node/app/

USER node

RUN yarn install --production=true

COPY --chown=node:node . /home/node/app/

CMD ["yarn", "watch"]
