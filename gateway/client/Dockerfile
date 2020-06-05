FROM node:14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY yarn* /usr/src/app/
COPY package* /usr/src/app/

RUN yarn install

COPY . /usr/src/app/

# EXPOSE 3000

CMD ["yarn", "watch"]
