# Build backend
FROM python:3.13.0-slim

# Set working directory inside the container
WORKDIR /backend

# Establish port for Flask
ENV PORT 5000

# Copy the server directory to the container directory
COPY ./server /backend

# Install dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends nginx gunicorn \
    && pip install --no-cache-dir -r requirements.txt \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# Expose the port
EXPOSE $PORT

# Run app.py when the container launches
CMD ["gunicorn", "--bind", "0.0.0.0:$PORT", "wsgi:app"]
