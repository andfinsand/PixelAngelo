# Build client
FROM node:16-alpine AS client

WORKDIR /app

COPY ./client /app

RUN npm install

RUN npm run build

# Build back end
FROM python:3.8-slim AS backend

WORKDIR /backend

COPY ./server /backend

RUN pip install --no-cache-dir -r requirements.txt

# Production image
FROM nginx:stable-alpine

# Copy artifacts
COPY --from=build /app/build /usr/share/nginx/html

COPY --from=backend /backend /backend

WORKDIR /backend

# Install dependencies
RUN pip install gunicorn

RUN pip install -r requirements.txt

# Configure container
ENV PORT=$PORT

EXPOSE $PORT

# Run app.py when the container launches
CMD ["nginx", "-g", "daemon off;", "gunicorn", "--bind", "0.0.0.0:$PORT", "wsgi:app"]
