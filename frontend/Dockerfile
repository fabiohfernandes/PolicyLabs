# Frontend Dockerfile - Next.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Create .next directory with proper permissions
RUN mkdir -p .next && chown -R node:node /app

# Switch to non-root user
USER node

# Expose port
EXPOSE 3000

# Development command
CMD ["npm", "run", "dev"]