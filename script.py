import requests

r = requests.get('https://api.thecatapi.com/v1/images/search?format=json')
chat = r.json()[0]
# chat est un dictionnaire
print (chat['url'])