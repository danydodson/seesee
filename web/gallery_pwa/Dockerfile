FROM node:alpine as builder

RUN mkdir -p /home/node/workspace/node_modules && \
  mkdir -p /home/node/workspace/build && \
  chown -R node:node /home/node/workspace

WORKDIR '/home/node/workspace'

COPY package.json .

RUN npm install -s

USER node

COPY --chown=node:node . .

RUN npm run build

FROM nginx:stable-alpine

# EXPOSE 3030

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /home/node/workspace/build/ /usr/share/nginx/html