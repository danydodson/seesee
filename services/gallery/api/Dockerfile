FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package*.json .
RUN npm install

USER node

COPY --chown=node:node . .

ENV PORT 3001
EXPOSE 5000
EXPOSE $PORT

CMD ["npm", "run", "start"]