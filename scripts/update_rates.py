import requests
import json
from pathlib import Path
import os

API_KEY = os.environ["EXCHANGE_API_KEY"]

script_dir = Path(__file__).resolve().parent
file_path = script_dir.parent / "public" / "data.json"
url = f"https://v6.exchangerate-api.com/v6/{API_KEY}/latest/USD"

response = requests.get(url)
response.raise_for_status()
data = response.json()
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, default=str)
