
from flask import Flask, request, Blueprint
from flask.json import jsonify
from controllers.api_controller import api
from settings import MONGO_URL
from db import initialize_db

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'host': MONGO_URL,
    'connect': False,
}
initialize_db(app)

app.register_blueprint(api, url_prefix='/api')
if __name__ == '__main__':
    app.run()