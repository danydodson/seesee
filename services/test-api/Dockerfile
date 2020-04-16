FROM node:alpine as builder

RUN mkdir -p /home/node/workspace/node_modules && \
  mkdir -p /home/node/workspace/build && \
  chown -R node:node /home/node/workspace

WORKDIR '/home/node/workspace'

COPY ./package.json ./

RUN npm install -s

USER node

COPY --chown=node:node ./ ./

RUN npm run build

CMD ["npm", "run", "start"]