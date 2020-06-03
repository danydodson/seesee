FROM node:10.9.0-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
# COPY yarn* /usr/src/app/

#! install the build requirements for bcrypt
RUN apk update && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
  && yarn add node-gyp node-pre-gyp

# install dependencies
RUN yarn install --production=true

# copy testing service files over
COPY . /usr/src/app/

FROM node:10.9.0-alpine

# create and set the working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the testing service from the build container
COPY --from=builder /usr/src/app /usr/src/app

# EXPOSE 7201

CMD ["node", "server.js"]