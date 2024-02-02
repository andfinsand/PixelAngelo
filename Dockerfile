# Build frontend
FROM node:18.17.0 AS builder
WORKDIR /app
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install
COPY ./client/ .
RUN npm run build

# Build backend
FROM python:3.9-slim-buster

# Install npm
RUN apt-get update && apt-get install -y npm

# Set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory inside the container
WORKDIR /backend

# Copy the frontend and backend code
COPY --from=builder /app/public ./client
COPY ./server /backend

# Install pip dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Install Gunicorn
RUN pip install gunicorn

# Expose ports
EXPOSE 3000

# Run app
CMD ["bash", "-c", "npm start && gunicorn wsgi:app"]
