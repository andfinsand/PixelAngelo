# Build frontend
FROM node:18.17.0 AS builder
WORKDIR /app
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install
COPY ./client/ .
RUN npm run build

# Build backend
FROM python:3.9-slim-buster

# Install Nginx
RUN apt-get update && apt-get install -y nginx supervisor

# Copy Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/sites-available/default

# Copy Supervisor configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory inside the container
WORKDIR /backend

# Copy Next.js build from previous stage
COPY --from=builder /app/.next /var/www/html/.next
COPY --from=builder /app/public /var/www/html/public

# Copy the backend code
COPY ./server /backend

# Install pip dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Install Gunicorn
RUN pip install gunicorn

# Supervisor to manage processes
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose ports for Nginx and Gunicorn
EXPOSE 80
EXPOSE 3000

# Run Supervisor
CMD ["/usr/bin/supervisord"]
