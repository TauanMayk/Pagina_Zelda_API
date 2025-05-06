import requests
import json

def fetch_data(endpoint, filters={}):
    url = f"https://zelda.fanapis.com/api/{endpoint}"
    response = requests.get(url, params=filters)
    
    return response.json() if response.status_code == 200 else None

characters = fetch_data("games", {"limit": 10})

jogos = [
        {"nome": game["name"],
        "imagem": f"./src/images/gamesimages/gamesimages{i+1}.avif",
        "descricao": game["description"],
        "desenvolvedor": game["developer"],
        "publicador": game["publisher"],
         } for i, game in enumerate(characters["data"] if characters else [])
        ]

# Montar o dicionário final
dados = {
    "jogos": jogos
}

# Salvar em JSON
with open("games.json", "w", encoding="utf-8") as file:
    json.dump(dados, file, indent=4, ensure_ascii=False)


# "descricao": game["description"],
# "data_lancamento": game["release_date"],
# "plataformas": game["platforms"],
# "desenvolvedor": game["developer"],
# "publicador": game["publisher"],
