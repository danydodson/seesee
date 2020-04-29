FROM node as builder

RUN mkdir -p /home/node/workspace/node_modules && \
  mkdir -p /home/node/workspace/build && \
  chown -R node:node /home/node/workspace

WORKDIR '/home/node/workspace'

COPY package.json .

RUN npm install

USER node

COPY --chown=node:node . .

RUN npm run build

FROM nginx

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 3000

COPY --from=builder /home/node/workspace/build/ /usr/share/nginx/html

