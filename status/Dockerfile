FROM node:4.0.0

EXPOSE 80

RUN mkdir /usr/filecheck
ADD . /usr/filecheck
WORKDIR /usr/filecheck

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
