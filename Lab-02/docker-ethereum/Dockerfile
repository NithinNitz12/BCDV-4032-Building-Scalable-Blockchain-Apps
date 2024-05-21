# Using node alpine as base image
FROM node:8.12-alpine

# Working directory
WORKDIR /app

# Install the prerequisites
RUN apk update && apk upgrade && apk add bash git openssh
RUN apk add --update python2 krb5 krb5-libs gcc make g++ krb5-dev

RUN git config --global url."https://".insteadOf git://

# Copy the package.json
COPY ./package.json .

# Install the dependencies
RUN npm install

# Copy the server and ethereum module
COPY . .

# Set the environment variable for the port
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Set the default command
CMD ["npm", "start"]
