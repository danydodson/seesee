FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR '/home/node/app'

COPY ./package*.json ./

RUN npm install
RUN npm run build

USER node

COPY --chown=node:node ./build ./build

ENV PORT 3001
EXPOSE 5000
EXPOSE $PORT

CMD ['npm', 'run', 'watch']
