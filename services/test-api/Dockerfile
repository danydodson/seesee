# create base image with all packages, proper entrypoint, and directories created
FROM node:erbium AS base

# install any packages we need from apt here
RUN apt-get update &&
  apt-get install dumb-init

# set entrypoint to `dumb-init` as it handles being pid 1 and forwarding signals
# so that you dont need to bake that logic into your node app
ENTRYPOINT ["dumb-init", "--"]

# all of our code will live in `/app`
WORKDIR /app

# using the base image, create an image containing all of our files
# and dependencies installed, devDeps and test directory included
FROM base AS dependencies

COPY package*.json ./
RUN npm set progress=false &&
  npm config set depth 0 &&
  npm i
COPY ./config-overrides.js ./
COPY ./public ./public
COPY ./src ./src

# if you have any build scripts to run, like for the `templated-site` flavor
# uncomment and possibly modify the following RUN command:
# RUN npm run build
# keeping all of the bash commands you can within a single RUN is generally important,
# but for this case it's likely that we want to use the cache from the prune which will
# change infrequently.

# test running image using all of the files and devDeps
FROM dependencies AS test
USER node
ENV NODE_ENV=test
# use `sh -c` so we can chain test commands using `&&`
CMD ["npm", "test"]

FROM dependencies AS development

# expose port 3000 from in the container to the outside world
# this is the default port defined in server/manifest.js, and
# will need to be updated if you change the default port
EXPOSE 3000
CMD ["npm", "start"]

# release ready image, devDeps are pruned and tests removed for size control
FROM development AS release

RUN npm prune --production \
  rm -rf lib/**/*.spec.js
