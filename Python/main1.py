import requests

def fetch_nse_data():
    url = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
    headers = {'User-Agent': 'Mozilla/5.0'}

    session = requests.Session()
    response = session.get(url, headers=headers)

    data = response.json()
    return data['records']['data']

fetch_nse_data()
