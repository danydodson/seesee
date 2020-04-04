FROM node:12

RUN mkdir -p /home/node/users-api/node_modules && chown -R node:node /home/node/users-api

WORKDIR '/home/node/users-api'

COPY package*.json .

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 7100

CMD ['npm', 'run', 'start']