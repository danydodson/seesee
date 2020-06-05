FROM node:14

RUN mkdir -p /usr/src/app/node_modules
COPY . /usr/src/app/

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY yarn* /usr/src/app/
COPY package* /usr/src/app/

RUN yarn install

# EXPOSE 3000

CMD ["yarn", "watch"]
