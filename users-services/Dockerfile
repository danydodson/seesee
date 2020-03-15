# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:12

# Set the working directory to /users-service
WORKDIR /users-service

# copy package.json into the container at /users-service
COPY package*.json /users-service/

# install dependencies
RUN yarn install

# Copy the current directory contents into the container at /users-service
COPY . /users-service/

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the app when the container launches
CMD ["yarn", "start"]