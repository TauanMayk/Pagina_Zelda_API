import requests
import json

# def fetch_data(endpoint, filters={}):
#     url = f"https://zelda.fanapis.com/api/{endpoint}"
#     response = requests.get(url, params=filters)
    
#     return response.json() if response.status_code == 200 else None

# characters = fetch_data("games", {"limit": 10})

# jogos = [
#         {"nome": game["name"],
#         "imagem": f"./src/images/gamesimages/gamesimages{i+1}.avif",
#         "descricao": game["description"],
#         "desenvolvedor": game["developer"],
#         "publicador": game["publisher"],
#          } for i, game in enumerate(characters["data"] if characters else [])
#         ]

# # Montar o dicionário final
# dados = {
#     "jogos": jogos
# }

# # Salvar em JSON
# with open("games.json", "w", encoding="utf-8") as file:
#     json.dump(dados, file, indent=4, ensure_ascii=False)


def fetch_data2(endpoint, filters={}):
    url = f"https://zelda.fanapis.com/api/{endpoint}"
    response = requests.get(url, params=filters)
    
    return response.json() if response.status_code == 200 else None

Monters = fetch_data2("monster", {"limit": 10})

monstros = []

if Monters and "data" in Monters:
    monstros = [
    {
        "nome": monster["name"],
        "descricao": monster["description"],
        "aparicoes": [
            {
                "nome": appearance["name"],
                "data-de-lancamento": appearance["release_date"]
            }
            for appearance in monster.get("appearances", [])
        ]
    } for monster in Monters["data"]
]


dados2 = {
    "monstros": monstros
}

print(Monters)

with open("monsters.json", "w", encoding="utf-8") as file:
    json.dump(dados2, file, indent=4, ensure_ascii=False)