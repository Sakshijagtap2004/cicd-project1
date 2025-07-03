# Use an official Node runtime as base
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
