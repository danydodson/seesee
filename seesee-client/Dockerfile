FROM node:12

WORKDIR /opt/seesee-platform

COPY {package.json,yarn.lock} seesee-client/

RUN yarn

COPY . seesee-client/

EXPOSE 3000

CMD ["yarn" "start"]