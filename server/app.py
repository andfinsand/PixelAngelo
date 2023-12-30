from flask import Flask, request
from flask_cors import CORS
import os
import uuid

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
