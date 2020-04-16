from flask import request, Blueprint
from flask.json import jsonify
from services.basic_service import BasicService

api = Blueprint('api', __name__)

@api.route('/')
def get():
    
    factionId = request.args.get('id')
    from_date = request.args.get('from')
    to_date = request.args.get('to')
    types = request.args.get('types')

    factionList = []
    if factionId is not None: factionList = factionId.split(',')

    result = BasicService.get(factionList)
    return jsonify(result)