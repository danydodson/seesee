FROM node:lts-alpine

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
  mkdir -p /home/node/app/dist && \
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

CMD [ "yarn", "start" ]

# clear extra files we just need build
# RUN find . -not -path '**/dist/*' -exec rm -f {} + > /dev/null 2>&1 | echo 'OK'

# USER root

# # remove build installs
# RUN apk del \
#   build-base \
#   libtool \
#   autoconf \
#   automake \
#   jq \
#   openssh \
#   python \
#   zlib-dev \
#   jpeg-dev \
#   libpng-dev \
#   tiff-dev \
#   giflib-dev \
#   nasm && \
#   rm -rf /var/cache/apk/*

# USER node