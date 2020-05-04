FROM node:alpine

RUN mkdir -p /home/node/workspace/node_modules && \
  chown -R node:node /home/node/workspace

WORKDIR /home/node/workspace
COPY package.json .
RUN npm install

USER node
COPY --chown=node:node . .

CMD ["npm", "run", "start"]