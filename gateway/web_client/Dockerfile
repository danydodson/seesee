FROM node:alpine as builder

WORKDIR usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder usr/src/app/build/ /usr/share/nginx/html
# EXPOSE 3000 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]