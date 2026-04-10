from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Serve static files
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/analytics.html')
def analytics():
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
        
        # Create feature vector matching the model's training data
        features = {
            'SeniorCitizen': int(data['seniorCitizen']),
            'tenure': int(data['tenure']),
            'MonthlyCharges': float(data['monthlyCharges']),
            'TotalCharges': float(data['totalCharges']),
            'gender_Male': 1 if data['gender'] == 'Male' else 0,
            'Partner_Yes': 1 if data['partner'] == 'Yes' else 0,
            'Dependents_Yes': 1 if data['dependents'] == 'Yes' else 0,
            'PhoneService_Yes': 1 if data['phoneService'] == 'Yes' else 0,
            'MultipleLines_No phone service': 1 if data['multipleLines'] == 'No phone service' else 0,
            'MultipleLines_Yes': 1 if data['multipleLines'] == 'Yes' else 0,
            'InternetService_Fiber optic': 1 if data['internetService'] == 'Fiber optic' else 0,
            'InternetService_No': 1 if data['internetService'] == 'No' else 0,
            'OnlineSecurity_No internet service': 1 if data['onlineSecurity'] == 'No internet service' else 0,
            'OnlineSecurity_Yes': 1 if data['onlineSecurity'] == 'Yes' else 0,
            'OnlineBackup_No internet service': 1 if data['onlineBackup'] == 'No internet service' else 0,
            'OnlineBackup_Yes': 1 if data['onlineBackup'] == 'Yes' else 0,
            'DeviceProtection_No internet service': 1 if data['deviceProtection'] == 'No internet service' else 0,
            'DeviceProtection_Yes': 1 if data['deviceProtection'] == 'Yes' else 0,
            'TechSupport_No internet service': 1 if data['techSupport'] == 'No internet service' else 0,
            'TechSupport_Yes': 1 if data['techSupport'] == 'Yes' else 0,
            'StreamingTV_No internet service': 1 if data['streamingTV'] == 'No internet service' else 0,
            'StreamingTV_Yes': 1 if data['streamingTV'] == 'Yes' else 0,
            'StreamingMovies_No internet service': 1 if data['streamingMovies'] == 'No internet service' else 0,
            'StreamingMovies_Yes': 1 if data['streamingMovies'] == 'Yes' else 0,
            'Contract_One year': 1 if data['contract'] == 'One year' else 0,
            'Contract_Two year': 1 if data['contract'] == 'Two year' else 0,
            'PaperlessBilling_Yes': 1 if data['paperlessBilling'] == 'Yes' else 0,
            'PaymentMethod_Credit card (automatic)': 1 if data['paymentMethod'] == 'Credit card (automatic)' else 0,
            'PaymentMethod_Electronic check': 1 if data['paymentMethod'] == 'Electronic check' else 0,
            'PaymentMethod_Mailed check': 1 if data['paymentMethod'] == 'Mailed check' else 0,
        }
        
        # Calculate churn probability using rule-based logic
        # (Replace this with actual model prediction if model file is available)
        probability = calculate_churn_probability(features, data)
        
        return jsonify({
            'success': True,
            'churn_probability': round(probability, 2),
            'risk_level': 'High' if probability >= 70 else 'Moderate' if probability >= 40 else 'Low'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

def calculate_churn_probability(features, raw_data):
    """Calculate churn probability based on features"""
    score = 50
    
    # Tenure impact
    tenure = features['tenure']
    if tenure < 6:
        score += 25
    elif tenure < 12:
        score += 15
    elif tenure < 24:
        score += 5
    elif tenure >= 48:
        score -= 20
    else:
        score -= 10
    
    # Contract type
    if features['Contract_Two year']:
        score -= 25
    elif features['Contract_One year']:
        score -= 5
    else:  # Month-to-month
        score += 20
    
    # Internet service
    if features['InternetService_Fiber optic']:
        score += 12
    elif features['InternetService_No']:
        score -= 8
    else:
        score += 3
    
    # Payment method
    if features['PaymentMethod_Electronic check']:
        score += 18
    elif features['PaymentMethod_Mailed check']:
        score += 5
    else:
        score -= 8
    
    # Paperless billing
    if features['PaperlessBilling_Yes']:
        score += 8
    
    # Monthly charges
    monthly = features['MonthlyCharges']
    if monthly > 80:
        score += 12
    elif monthly > 60:
        score += 6
    elif monthly < 30:
        score -= 8
    
    # Senior citizen
    if features['SeniorCitizen']:
        score += 8
    
    # Partner and dependents
    if not features['Partner_Yes']:
        score += 8
    if not features['Dependents_Yes']:
        score += 6
    
    # Premium services
    premium_count = sum([
        features['OnlineSecurity_Yes'],
        features['OnlineBackup_Yes'],
        features['DeviceProtection_Yes'],
        features['TechSupport_Yes']
    ])
    score -= premium_count * 6
    
    # Streaming services
    if features['StreamingTV_Yes']:
        score -= 3
    if features['StreamingMovies_Yes']:
        score -= 3
    
    # Normalize to 0-100
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
