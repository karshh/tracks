import http.client
import json

class _AuthService:
  
  def authenticate(self, key):
    connection = http.client.HTTPSConnection('api.torn.com', 443)
    connection.request('GET', '/user/?key=' + key)
    response = json.loads(connection.getresponse().read().decode())
    if response.get('error') is not None:
      return {'success': False, 'code': 'INCORRECT_KEY'}
    else:
      return { 'player_id': response.get('player_id'), 'success': True, 'name': response.get('name'), 'respect': response.get('respect'), 'last_action': response.get('last_action') }
  
    
AuthService = _AuthService()
