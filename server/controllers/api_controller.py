from flask import request, Blueprint
from flask.json import jsonify
from services.basic_service import BasicService

api = Blueprint('api', __name__)

@api.route('/')
def get():
    
    factionId = request.args.get('ID')

    factionList = []
    if factionId is not None: factionList = factionId.split(',')

    result = BasicService.get(factionList)
    return jsonify(result)