FROM node:lts-alpine as builder

ENV UID=1000
ENV GID=1000
ENV BUILD_ENV=demo

RUN apk update && \
  apk --no-cache add --update \
  build-base \
  libtool \
  autoconf \
  automake \
  jq \
  openssh \
  python \
  zlib-dev \
  jpeg-dev \
  libpng-dev \
  tiff-dev \
  giflib-dev \
  nasm \
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

# clear extra files we just need build
RUN find . -not -path '**/build/*' -exec rm -f {} + > /dev/null 2>&1 | echo 'OK'

# remove build installs
RUN apk del \
  build-base \
  libtool \
  autoconf \
  automake \
  jq \
  openssh \
  python \
  zlib-dev \
  jpeg-dev \
  libpng-dev \
  tiff-dev \
  giflib-dev \
  nasm && \
  rm -rf /var/cache/apk/*

# production
FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d

COPY default.conf /etc/nginx
COPY --from=builder /home/node/app/dist /usr/share/nginx/html

EXPOSE 80

RUN chown nginx.nginx /usr/share/nginx/html/ -R

# CMD ["nginx", "-g", "daemon off;"]