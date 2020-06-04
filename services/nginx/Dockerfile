# FROM node:14 as builder

# RUN mkdir -p /app
# WORKDIR /app

# RUN git clone https://github.com/danydodson/seesee.git .
# WORKDIR /app/platforms/pwa

# RUN yarn install --production=true && \
#   yarn build

FROM nginx:mainline-alpine

RUN apk --no-cache --virtual add yarn && \
  rm -rf /etc/nginx/default.conf

COPY ./conf/default.conf /etc/nginx/default.conf

WORKDIR /usr/src/app

# COPY --from=builder /app/platforms/pwa/build/output/ /usr/share/nginx/html/
# RUN chown -R nginx.nginx /usr/share/nginx/html/

EXPOSE 80

CMD [ "yarn", "watch" ]