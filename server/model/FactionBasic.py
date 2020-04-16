from db import db

class factionbasics(db.Document):
  ID: db.IntField()
  respect: db.IntField()
  name: db.StringField()
  