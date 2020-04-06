FROM node:13.12.0

RUN mkdir -p /home/node/app/node_modules && \
  mkdir -p /home/node/app/build && \
  chown -R node:node /home/node/app

WORKDIR '/home/node/app'

COPY package*.json ./

RUN npm install --no-progress --ignore-optional

USER node

COPY --chown=node:node . ./

RUN npm run build

EXPOSE 5000

CMD npm start
