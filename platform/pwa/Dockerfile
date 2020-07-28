FROM node:lts-alpine as builder

RUN apk add --update --no-cache \
  bash \
  curl \
  ranger \
  zsh \
  git

RUN mkdir -p /home/node/app/node_modules && \
  chown -R node:node /home/node/app

WORKDIR /home/node

USER node

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

COPY dotfiles/.zshrc .
COPY yarn.lock app
COPY package.json app

WORKDIR /home/node/app

RUN yarn --pure-lockfile

COPY . .

RUN yarn build

FROM nginx:mainline-alpine

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/node/app/build /usr/share/nginx/html