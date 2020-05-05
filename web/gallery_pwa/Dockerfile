FROM node:alpine as builder

# RUN mkdir -p /home/node/workspace/node_modules && \
#   mkdir -p /home/node/workspace/build && \
#   chown -R node:node /home/node/workspace

WORKDIR /app

COPY package.json .

RUN npm install

# USER node

# COPY --chown=node:node . .
COPY . .

RUN npm run build

FROM nginx

# EXPOSE 3030

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build/ /usr/share/nginx/html