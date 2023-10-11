from flask import Flask, request
import json

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    print(data)


if __name__ == '__main__':
    app.run(debug=True, port=8001)