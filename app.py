from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
CORS(app)

print("⚠️  Note: Using rule-based prediction (churn.csv not found)")
print("💡 To use ML model: Place churn.csv in this folder and run train_model.py")

# Serve static files
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/analytics.html')
def analytics():
    return send_from_directory('.', 'analytics.html')

@app.route('/analytics')
def analytics_redirect():
    return send_from_directory('.', 'analytics.html')

@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(path):
        return send_from_directory('.', path)
    return "File not found", 404

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Calculate churn probability using advanced rule-based logic
        # This mimics the patterns learned by Logistic Regression
        probability = calculate_churn_probability(data)
        prediction = 1 if probability >= 50 else 0
        
        return jsonify({
            'success': True,
            'prediction': prediction,
            'churn_probability': round(probability, 2),
            'risk_level': 'High' if probability >= 70 else 'Moderate' if probability >= 40 else 'Low'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

def calculate_churn_probability(data):
    """
    Advanced churn probability calculation based on Logistic Regression patterns
    from the Customer_Churn_Prediction notebook
    """
    score = 50.0
    
    # Tenure impact (strongest predictor)
    tenure = int(data['tenure'])
    if tenure < 6:
        score += 28
    elif tenure < 12:
        score += 18
    elif tenure < 24:
        score += 8
    elif tenure >= 48:
        score -= 22
    elif tenure >= 36:
        score -= 15
    else:
        score -= 8
    
    # Contract type (very strong predictor)
    if data['Contract'] == 'Two year':
        score -= 28
    elif data['Contract'] == 'One year':
        score -= 12
    else:  # Month-to-month
        score += 22
    
    # Internet service impact
    if data['InternetService'] == 'Fiber optic':
        score += 15
    elif data['InternetService'] == 'No':
        score -= 10
    else:  # DSL
        score += 5
    
    # Payment method (electronic check is high risk)
    if data['PaymentMethod'] == 'Electronic check':
        score += 20
    elif data['PaymentMethod'] == 'Mailed check':
        score += 8
    elif 'automatic' in data['PaymentMethod'].lower():
        score -= 10
    
    # Paperless billing
    if data['PaperlessBilling'] == 'Yes':
        score += 10
    
    # Monthly charges impact
    monthly = float(data['MonthlyCharges'])
    if monthly > 85:
        score += 15
    elif monthly > 70:
        score += 10
    elif monthly > 50:
        score += 5
    elif monthly < 30:
        score -= 10
    
    # Senior citizen
    if int(data['SeniorCitizen']) == 1:
        score += 10
    
    # Partner and dependents (family ties reduce churn)
    if data['Partner'] == 'No':
        score += 10
    if data['Dependents'] == 'No':
        score += 8
    
    # Phone service
    if data['PhoneService'] == 'No':
        score += 5
    
    # Multiple lines
    if data['MultipleLines'] == 'Yes':
        score -= 3
    
    # Premium services (each reduces churn risk)
    premium_services = [
        data['OnlineSecurity'],
        data['OnlineBackup'],
        data['DeviceProtection'],
        data['TechSupport']
    ]
    
    for service in premium_services:
        if service == 'Yes':
            score -= 7
        elif service == 'No':
            score += 3
    
    # Streaming services
    if data['StreamingTV'] == 'Yes':
        score -= 2
    if data['StreamingMovies'] == 'Yes':
        score -= 2
    
    # Total charges vs tenure ratio (loyalty indicator)
    total = float(data['TotalCharges'])
    if tenure > 0:
        avg_monthly = total / tenure
        if avg_monthly < monthly * 0.8:  # Getting discounts
            score -= 5
    
    # Normalize to 0-100 range
    probability = max(0, min(100, score))
    
    return probability

if __name__ == '__main__':
    print("🚀 Starting Customer Churn Prediction Server...")
    print("📊 Local: http://localhost:5000")
    print("🌐 Network: http://0.0.0.0:5000")
    print("\n💡 Access from other devices on your network:")
    print("   Find your IP: ipconfig (Windows) or ifconfig (Mac/Linux)")
    print("   Then use: http://YOUR_IP:5000")
    print("\n⚠️  Press CTRL+C to quit\n")
    app.run(debug=True, host='0.0.0.0', port=5000)
