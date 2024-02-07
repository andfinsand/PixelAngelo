# Build backend
FROM python:3.10-slim-buster

# Set working directory inside the container
WORKDIR /backend

# Set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Copy the backend code
COPY ./server /backend

# Install pip dependencies
RUN pip install -r requirements.txt

# Install Gunicorn
RUN pip install gunicorn

# Run Supervisor
CMD ["gunicorn", "wsgi:app"]
