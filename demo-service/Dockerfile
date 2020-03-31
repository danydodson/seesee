FROM node:alpine

WORKDIR "/opt/demo-service"

COPY package.json .

RUN yarn

COPY . .

CMD yarn start