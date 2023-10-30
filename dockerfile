# Use the official Node.js image as the base image with Node.js 18.12.1
FROM node:18.12.1

# Setting the working directory in the container
WORKDIR /app

# Copying the package.json and package-lock.json files and installing dependencies
COPY package*.json ./
RUN npm install

# Copying application code into the container
COPY . .

# Exposing the port my Node.js app will run on
EXPOSE 3000

# Defining the command to start my Node.js application
CMD ["npm", "start"]
