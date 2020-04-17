from flask import request, Blueprint, jsonify
auth = Blueprint('auth', __name__)
from services.auth_service import AuthService
from flask_cors import cross_origin

@auth.route('/', methods = ['POST'])
@cross_origin()
def login():
    data = request.get_json()
    key = data.get('key')
    if key is None: return {'success': False, 'error': 'NULL_KEY'}, 400
    return AuthService.authenticate(key)
  