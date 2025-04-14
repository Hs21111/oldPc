import pandas as pd
import numpy as np
import requests
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error



def fetch_nse_data():
    url = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
    headers = {'User-Agent': 'Mozilla/5.0'}

    session = requests.Session()
    response = session.get(url, headers=headers)

    data = response.json()
    return data['records']['data']


def process_option_data(data):
    df = pd.DataFrame(data)
    df = pd.DataFrame(data)  # or any other way you're defining it

    # Extract relevant columns (e.g., IV, OI, Volume, Greeks)
    df = df[['strikePrice', 'expiryDate', 'CE', 'PE']]

    # Convert Nested Data (CE & PE IV, OI, Volume)
    df['CE_IV'] = df['CE'].apply(lambda x: x.get('impliedVolatility', 0) if x else 0)
    df['PE_IV'] = df['PE'].apply(lambda x: x.get('impliedVolatility', 0) if x else 0)

    df['CE_OI'] = df['CE'].apply(lambda x: x.get('openInterest', 0) if x else 0)
    df['PE_OI'] = df['PE'].apply(lambda x: x.get('openInterest', 0) if x else 0)

    df['CE_Vol'] = df['CE'].apply(lambda x: x.get('totalTradedVolume', 0) if x else 0)
    df['PE_Vol'] = df['PE'].apply(lambda x: x.get('totalTradedVolume', 0) if x else 0)

    # Calculate IV Spread (CE vs PE)
    df['IV_Spread'] = abs(df['CE_IV'] - df['PE_IV'])

    return df[['strikePrice', 'CE_IV', 'PE_IV', 'CE_OI', 'PE_OI', 'CE_Vol', 'PE_Vol', 'IV_Spread']]
# Load historical IV data
try:
    df = pd.read_csv("historical_nifty_iv.csv")
    if df.empty:
        print("Warning: The CSV file is empty!")
except pd.errors.EmptyDataError:
    print("Error: No data found in the file.")

df = pd.DataFrame()  # or any other way you're defining it

# Features & Target
X = df[['CE_OI', 'PE_OI', 'CE_Vol', 'PE_Vol', 'IV_Spread']]
y = df['Next_IV']  # Future IV (Target Variable)

# Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model Training
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict & Evaluate
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
print(f"Model MAE: {mae}")
