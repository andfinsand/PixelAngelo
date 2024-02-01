FROM python:3.8-slim

WORKDIR /app

# Copy the current directory contents into the container at /app
COPY ./server /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Install Gunicorn
RUN pip install gunicorn

COPY . .

# Make $PORT available
EXPOSE $PORT

# Define environment variable
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run app.py when the container launches
CMD ["gunicorn", "--bind", "0.0.0.0:${PORT}", "server.wsgi:app"]
