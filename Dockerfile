# Use official Node.js
FROM node:21.7.1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json if you are using them
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of your app's source code to the container
COPY . .

# Expose the app port (optional, based on your app configuration)
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]