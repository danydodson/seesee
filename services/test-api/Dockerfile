FROM node

RUN mkdir -p /home/node/workspace/node_modules && \
  mkdir -p /home/node/workspace/build && \
  chown -R node:node /home/node/workspace

WORKDIR '/home/node/workspace'

COPY package.json .

RUN npm install

USER node

COPY --chown=node:node . .

RUN npm run build

# EXPOSE 7000

CMD ["npm", "run", "start"]