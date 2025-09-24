# Use Node.js 18 LTS instead of alpine
FROM node:18-slim

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