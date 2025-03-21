# Build stage
FROM node:18.17.0 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY ./client/package.json ./client/package-lock.json* ./
RUN npm install

# Copy the rest of the app and build
COPY ./client/ .
RUN npm run build

# Production stage
FROM node:18.17.0

WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Ensure the app listens on the correct host and port
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the port (Railway uses 3000 by default)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]