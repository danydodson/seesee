FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /app/node/app

WORKDIR '/home/node/app'

COPY package*.json .

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 7000

CMD ['npm', 'run', 'start']