
from flask import Flask, request, Blueprint
from flask.json import jsonify
from controllers.api_controller import api
from controllers.auth_controller import auth
from settings import MONGO_URL
from db import initialize_db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MONGODB_SETTINGS'] = {
    'host': MONGO_URL,
    'connect': False,
}
initialize_db(app)

app.register_blueprint(api, url_prefix='/api')
app.register_blueprint(auth, url_prefix='/auth')

if __name__ == '__main__':
    app.run()