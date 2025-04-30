# Use official Node.js image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package* .

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 3000

# Start command
CMD [ "npm", "run", "dev" ]