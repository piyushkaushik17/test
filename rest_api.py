# ---------------------------------------------------
# Flask
# Installation: "pip install flask" 
# basic app:
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()

# ---------------------------------------------------    
# FastAPI
# Installation: "pip install fastapi" 
# basic app:
    
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello World"}
