# Use a lighter version of Node as a parent imageFROM mhart/alpine-node:8.11.4
FROM mhart/alpine-node:12

# Set the working directory to /seesee-clientWORKDIR /seesee-client
WORKDIR /seesee-client

# copy package.json into the container at /seesee-clientCOPY package*.json /seesee-client/
COPY package*.json /seesee-client/

# install dependenciesRUN npm install
RUN yarn install

# Copy the current directory contents into the container at /seesee-clientCOPY . /seesee-client/
COPY . /seesee-client/

# Make port 3000 available to the world outside this containerEXPOSE 3000
EXPOSE 3000

# Run the app when the container launchesCMD ["npm", "start"]
CMD ["yarn", "start"]