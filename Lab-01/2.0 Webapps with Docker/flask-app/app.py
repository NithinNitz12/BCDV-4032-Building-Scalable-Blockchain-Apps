from flask import Flask, render_template
import random

app = Flask(__name__)

# list of cat images
images = [
   "https://media.tenor.com/7SE3IKEub60AAAAi/shinchan.gif",
    "https://media.tenor.com/eOYXSh5UWZ4AAAAi/crayon-shin-chan-crayon-shin-chan-dance.gif",
    "https://media.tenor.com/Rm4M00jy2QQAAAAi/crayon-shinchan.gif"
    ]

@app.route('/')
def index():
    url = random.choice(images)
    return render_template('index.html', url=url)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
