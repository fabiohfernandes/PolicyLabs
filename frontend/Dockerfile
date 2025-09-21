# Frontend Dockerfile - Next.js Development
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Create .next directory with proper permissions
RUN mkdir -p .next && chown -R node:node /app

# Switch to non-root user
USER node

# Expose port
EXPOSE 3000

# Development command with hot reload
CMD ["npm", "run", "dev"]