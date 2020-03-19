FROM node:12

COPY {package.json,yarn.lock} /listings-service/

WORKDIR /opt/seesee-platform

RUN yarn

COPY . listings-service/

EXPOSE 80

CMD ["yarn" "start"]