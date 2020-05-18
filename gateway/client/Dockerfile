FROM node:14

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 3000

CMD yarn watch
