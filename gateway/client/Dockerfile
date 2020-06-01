FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

USER node

RUN yarn

COPY --chown=node:node . .

RUN yarn run build

EXPOSE 3000

CMD yarn watch

# FROM node:14

# WORKDIR /usr/src/app

# COPY package.json .

# RUN yarn

# COPY . .

# RUN yarn run build

# EXPOSE 3000

# CMD yarn watch
