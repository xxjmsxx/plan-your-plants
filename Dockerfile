# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the React development server port
EXPOSE 5173

# Start the React development server
CMD ["npm", "run", "dev"]
