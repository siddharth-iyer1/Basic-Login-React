from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    print(data)
    return jsonify({"message": "Signup successful!"}), 200

@app.route("/signin", methods=["POST"])
def signin():
    data = request.get_json()
    print(data)
    # TODO: Verify the user's credentials from the database.
    return jsonify({"message": "Signin successful!"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=8001)
