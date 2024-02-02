# Build backend
FROM python:3.9-slim-buster

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory inside the container
WORKDIR /backend

# Copy the server directory to the container directory
COPY ./server /backend

# Install pip dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Install Gunicorn
RUN pip install gunicorn

# Run app with gunicorn using Python 3.9 explicitly
CMD ["/usr/local/bin/gunicorn", "wsgi:app"]
