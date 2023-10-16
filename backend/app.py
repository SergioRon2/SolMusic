from flask import Flask, render_template
from flask import request, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Frontend/index.html')


if __name__ == '__main__':
    app.run(debug=True)


