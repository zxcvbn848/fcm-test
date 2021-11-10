from flask import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("fcm.html")

app.run(port=8000, debug=True)
