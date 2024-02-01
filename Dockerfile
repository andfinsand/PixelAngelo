# Build Stage for Next.js client
FROM node:latest as client-build
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Build Stage for Flask Server
FROM python:3.8-slim as server-build
WORKDIR /server
COPY server/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY server/ .

# Install Gunicorn
RUN pip install gunicorn

# Final Stage
FROM nginx:alpine
# Copy built Next.js files from client-build stage
COPY --from=client-build /app/.next /usr/share/nginx/html
# Set up nginx for client
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
# Copy Flask server from server-build stage
COPY --from=server-build /server /server
WORKDIR /server

# Run Gunicorn for the Flask app
CMD gunicorn --bind 0.0.0.0:5000 app:app
