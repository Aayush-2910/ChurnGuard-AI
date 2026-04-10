# 🎯 Customer Churn Prediction System

AI-powered customer churn prediction using Logistic Regression model trained on telecom customer data.

## ✨ Features

- **Complete Feature Set**: All 19 features from the original dataset
- **Real-time Predictions**: Instant churn probability calculation
- **Smart Recommendations**: Actionable retention strategies based on customer profile
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Risk Classification**: High/Moderate/Low risk categorization
- **Visual Analytics**: Progress bars and color-coded risk indicators

## 📊 Model Features

The prediction model uses the following customer attributes:

### Demographics
- Gender
- Senior Citizen status
- Partner status
- Dependents

### Account Information
- Tenure (months with company)
- Contract type (Month-to-month, One year, Two year)
- Payment method
- Paperless billing
- Monthly charges
- Total charges

### Services
- Phone service
- Multiple lines
- Internet service (DSL, Fiber optic, None)
- Online security
- Online backup
- Device protection
- Tech support
- Streaming TV
- Streaming movies

## 🚀 Quick Start

### Option 1: Static HTML (No Backend)

Simply open `index.html` in your browser. The prediction runs entirely in JavaScript.

```bash
# Open in default browser
start index.html
```

### Option 2: Flask Backend (Python)

For production use with actual model integration:

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the Flask server:
```bash
python app.py
```

3. Open browser:
```
http://localhost:5000
```

## 📁 Project Structure

```
├── index.html          # Main HTML page with complete form
├── style.css           # Modern styling with animations
├── script.js           # Frontend prediction logic
├── app.py             # Flask backend (optional)
├── requirements.txt    # Python dependencies
├── Customer_Churn_Prediction.ipynb  # Original model notebook
└── README.md          # This file
```

## 🎨 UI/UX Features

- **Gradient Background**: Eye-catching purple gradient
- **Section Organization**: Grouped inputs (Demographics, Services, Billing)
- **Form Validation**: Required fields with proper input types
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Responsive Design**: Works on desktop and mobile
- **Color-Coded Results**: 
  - 🚨 Red for High Risk (≥70%)
  - ⚠️ Orange for Moderate Risk (40-69%)
  - ✅ Green for Low Risk (<40%)

## 🧠 Prediction Logic

The model considers multiple factors:

1. **Tenure**: Longer tenure = lower churn risk
2. **Contract Type**: Long-term contracts reduce churn
3. **Payment Method**: Electronic checks indicate higher risk
4. **Services**: More premium services = lower churn
5. **Charges**: Very high charges increase risk
6. **Demographics**: Family status affects retention

## 💡 Recommendations Engine

Based on the prediction, the system suggests:

- Retention discounts for high-risk customers
- Contract upgrades for month-to-month users
- Payment method changes
- Premium service trials
- Dedicated account management
- Pricing plan optimization

## 🔧 Customization

To integrate with your actual trained model:

1. Save your trained model:
```python
import joblib
joblib.dump(model, 'churn_model.pkl')
```

2. Update `app.py` to load and use the model:
```python
import joblib
model = joblib.load('churn_model.pkl')

# In predict function:
prediction = model.predict_proba(features_df)[0][1] * 100
```

## 📈 Model Performance

Based on the original Logistic Regression model:
- Trained on 7,043 customer records
- Features: 20 input features after encoding
- Target: Binary churn classification (Yes/No)

## 🎯 Use Cases

- **Customer Success Teams**: Identify at-risk customers
- **Sales Teams**: Prioritize retention efforts
- **Marketing**: Target campaigns to high-risk segments
- **Product Teams**: Understand service impact on retention
- **Management**: Monitor overall churn risk metrics

## 📝 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

Feel free to enhance the prediction logic, improve the UI, or add new features!

---

Made with ❤️ for better customer retention
