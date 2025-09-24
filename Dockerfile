# Use Node.js 18 base image with specific SHA
FROM node@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e

# Set working directory
WORKDIR /app

# Copy frontend package files
COPY frontend/package*.json ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy frontend source
COPY frontend/ ./

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]