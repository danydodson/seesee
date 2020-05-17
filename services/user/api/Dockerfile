FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --no-progress --ignore-optional

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]