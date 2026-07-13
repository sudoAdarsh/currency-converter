import requests
import json
from pathlib import Path

script_dir = Path(__file__).resolve().parent
file_path = script_dir.parent / "public" / "data.json"
url = "https://v6.exchangerate-api.com/v6/4dee1d18e33acf01991a3c7e/latest/USD"

response = requests.get(url)
response.raise_for_status()
data = response.json()
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, default=str)
