FROM node:12

COPY {package.json,yarn.lock} /opt/seesee-platform/api-gateway

WORKDIR /opt/seesee-platform

RUN yarn

COPY . api-gateway/

EXPOSE 3000

CMD ["yarn" "watch"]