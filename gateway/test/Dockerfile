# build environment
FROM node:alpine
# FROM node:alpine as builder

# ARG BUILD_DATE
# ARG BUILD_VERSION

# image labels.
# LABEL maintainer="dany@dany.codes"
# LABEL org.label-schema.schema-version=$BUILD_VERSION
# LABEL org.label-schema.build-date=$BUILD_DATE
# LABEL org.label-schema.name="danydodson/seesee"
# LABEL org.label-schema.description="seesee language runtime"
# LABEL org.label-schema.url="http://seesee.space/"
# LABEL org.label-schema.docker.cmd="docker run -v ~/seesee/packages:/seesee/files -p 9090:9090 -d danydodson/seesee"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json .
RUN npm install
RUN npm install react-scripts -g --silent
COPY . /usr/src/app
RUN npm run build
CMD ["npm", "run", "start"]

# production environment
# FROM nginx:latest
# RUN rm -rf /etc/nginx/conf.d
# COPY nginx/default.conf /etc/nginx
# COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html/
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]

