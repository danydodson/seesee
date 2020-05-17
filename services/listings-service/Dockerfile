FROM node:12

# RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn

# RUN yarn build

CMD yarn watch
