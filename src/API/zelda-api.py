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


def fetch_data2(filters={}):
    url = f"https://zelda.fanapis.com/api/monsters"
    response = requests.get(url, params=filters)

    return response.json() if response.status_code == 200 else None


def fetch_detail_from_url(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return None


Monters = fetch_data2({"limit": 10})

monstros = []

if Monters and isinstance(Monters, dict) and "data" in Monters:
    for monster in Monters["data"]:
        aparicoes = []
        for appearance_url in monster.get("appearances", []):
            if isinstance(appearance_url, str) and appearance_url.startswith("http"):
                data = fetch_detail_from_url(appearance_url)
                if data and "data" in data:
                    aparicoes.append(
                        {
                            "nome": data["data"].get("name", "Desconhecido"),
                            "data-de-lancamento": data["data"].get(
                                "released_date", "Desconhecida"
                            ),
                        }
                    )

        monstros.append(
            {
                "nome": monster.get("name", ""),
                "descricao": monster.get("description", ""),
                "aparicoes": aparicoes,
            }
        )

dados2 = {"monstros": monstros}

with open("monsters.json", "w", encoding="utf-8") as file:
    json.dump(dados2, file, indent=4, ensure_ascii=False)
