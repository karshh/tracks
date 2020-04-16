from model.FactionBasic import factionbasics
from flask.json import dumps, loads
from utils.JSONEncoder import JSONEncoder

class _BasicService:

    def get(self, IDList):
        if not IDList: return []
        IDListInt = [int(i) for i in IDList]
        pipeline = [
            # {"$match": {"ID": {"$in": IDListInt}}},
            {"$project": {"ID": 1, "name": 1, "respect": 1, "timestamp": { "$dateToString": { "date": "$_id", "format": "%Y-%m-%dT%H:%M:%S"} }}},
            {"$project": {"_id": 0}},
        ]
        cursor = list(factionbasics.objects.aggregate(pipeline))
        return cursor
      

BasicService = _BasicService()