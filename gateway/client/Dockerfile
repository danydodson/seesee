FROM node:14

RUN apt-get update && \
  apt-get upgrade 

WORKDIR /usr/src/app

COPY yarn* /usr/src/app/
COPY package* /usr/src/app/

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "watch"]
