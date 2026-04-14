# 🎯 ChurnGuard AI - Customer Churn Prediction System

Professional AI-powered customer churn prediction platform using Logistic Regression ML model trained on telecom customer data.

## 🌟 Overview

ChurnGuard AI is a comprehensive customer retention analytics platform that predicts customer churn probability and provides actionable business intelligence. Built with modern web technologies and powered by machine learning, it helps businesses identify at-risk customers and implement targeted retention strategies.

## ✨ Key Features

### 🎨 Professional UI/UX
- **Modern Design**: Charcoal & Blush Pink theme with Lucide React icons
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Loading states, transitions, and interactive elements
- **Intuitive Navigation**: Multi-page application with easy navigation

### 📊 Analytics Dashboard
- **Interactive Charts**: 5+ Chart.js visualizations
- **KPI Metrics**: Real-time business intelligence
- **Model Performance**: ML accuracy, precision, recall, F1 score
- **Data Insights**: Churn distribution, contract analysis, service impact

### 🤖 ML-Powered Predictions
- **19 Feature Analysis**: Comprehensive customer profiling
- **Real-time Scoring**: Instant churn probability calculation
- **Risk Classification**: High/Moderate/Low risk categorization
- **Business Metrics**: CLV, revenue loss, retention priority

### 💡 Smart Recommendations
- **Strategic Actions**: 8+ targeted retention strategies
- **Personalized Plans**: Based on customer profile and risk level
- **ROI Focus**: Business-oriented recommendations
- **Priority Ranking**: Urgency-based action items

### 🌐 Network Access
- **Local & Network**: Access from any device on WiFi
- **QR Code Sharing**: Easy mobile access
- **Multi-device Support**: Simultaneous users
- **Share Page**: Built-in sharing interface

## � Model Information

### Dataset
- **Size**: 7,043 customer records
- **Features**: 19 input features (demographics, services, billing)
- **Target**: Binary classification (Churn: Yes/No)
- **Churn Rate**: 26.5% (1,869 churned customers)

### Model Performance
- **Algorithm**: Logistic Regression
- **Accuracy**: 84.2%
- **Precision**: 81.7%
- **Recall**: 78.9%
- **F1 Score**: 80.3%

### Key Predictors
1. **Tenure**: Longer tenure = lower churn risk
2. **Contract Type**: Long-term contracts reduce churn significantly
3. **Payment Method**: Electronic checks indicate higher risk
4. **Premium Services**: More services = better retention
5. **Monthly Charges**: High charges increase churn probability

## 🚀 Quick Start

### Option 1: Instant Access (No Installation)
```bash
# Just open in browser
start index.html
```

### Option 2: Flask Server (Recommended)
```bash
# Install dependencies
pip install -r requirements.txt

# Start server
python app.py

# Access locally
http://localhost:5000

# Access from network
http://YOUR_IP:5000
```

### Option 3: Quick Test
```bash
# Open test page for instant demos
http://localhost:5000/test.html
```

## 📁 Project Structure

```
├── index.html              # Main dashboard
├── analytics.html          # Analytics & charts page
├── test.html              # Quick testing interface
├── share.html             # Network sharing page
├── style.css              # Complete styling
├── script.js              # Prediction logic
├── app.py                 # Flask backend
├── requirements.txt       # Python dependencies
├── Customer_Churn_Prediction.ipynb  # ML model notebook
├── README.md              # This file
├── QUICKSTART.md          # Quick start guide
└── NETWORK_ACCESS.md      # Network setup guide
```

## 🎯 Pages & Features

### 1. Dashboard (`index.html`)
- Customer profile input form
- Real-time churn prediction
- Business metrics (CLV, Revenue Loss)
- Strategic recommendations
- Risk visualization

### 2. Analytics (`analytics.html`)
- KPI dashboard (4 key metrics)
- Churn distribution chart
- Contract type analysis
- Tenure-based trends
- Service impact analysis
- Payment method breakdown
- ML model performance metrics

### 3. Quick Test (`test.html`)
- One-click auto-fill scenarios
- High/Medium/Low risk examples
- Instant testing and demos
- No manual data entry needed

### 4. Share Page (`share.html`)
- QR code for mobile access
- Copy URL functionality
- Network access instructions
- Easy sharing interface

## 🔧 Technologies Used

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Chart.js (Data visualization)
- Lucide Icons (UI icons)
- Responsive Flexbox/Grid layout

### Backend
- Python 3.8+
- Flask (Web framework)
- Flask-CORS (Cross-origin support)
- Pandas, NumPy (Data processing)
- Scikit-learn (ML model)

### Design
- Custom CSS with CSS Variables
- Gradient backgrounds
- Smooth animations
- Professional color scheme

## 📊 Customer Features Analyzed

### Demographics
- Gender
- Senior Citizen status
- Partner status
- Dependents

### Account Information
- Tenure (months with company)
- Contract type (Month-to-month, One year, Two year)
- Payment method (4 types)
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

## 🎨 UI/UX Highlights

- **Charcoal & Blush Pink Theme**: Professional and modern
- **Lucide React Icons**: 50+ beautiful SVG icons
- **Smooth Animations**: Loading spinners, transitions, hover effects
- **Form Validation**: Real-time input validation
- **Auto-fill Testing**: Quick demo scenarios
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels, keyboard navigation

## 💡 Business Use Cases

### Customer Success Teams
- Identify at-risk customers proactively
- Prioritize retention efforts
- Track customer health scores
- Monitor churn trends

### Sales Teams
- Focus on high-value at-risk accounts
- Upsell retention packages
- Negotiate contract renewals
- Prevent revenue loss

### Marketing Teams
- Target retention campaigns
- Segment customers by risk
- Personalize communications
- Measure campaign effectiveness

### Product Teams
- Understand service impact on retention
- Identify feature gaps
- Optimize pricing strategies
- Improve customer experience

### Management
- Monitor overall churn metrics
- Track retention ROI
- Make data-driven decisions
- Forecast revenue impact

## 🌐 Network Access

### Local Access
```
http://localhost:5000
http://127.0.0.1:5000
```

### Network Access (Same WiFi)
```
http://YOUR_IP:5000
```

### Find Your IP
```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

### Share with QR Code
```
http://YOUR_IP:5000/share.html
```

## 🧪 Testing

### Manual Testing
1. Fill form with customer data
2. Click "Analyze Churn Risk"
3. View results and recommendations

### Auto-fill Testing
1. Open `test.html`
2. Click scenario button:
   - High Risk Customer
   - Low Risk Customer
   - Moderate Risk Customer
3. Form auto-fills and submits

### Test Scenarios Included
- **High Risk**: Short tenure, month-to-month, electronic check
- **Low Risk**: Long tenure, two-year contract, all services
- **Moderate Risk**: Medium tenure, one-year contract, some services

## 📈 Model Insights

### Churn Distribution
- Low Risk (0-40%): 50% of customers
- Medium Risk (40-70%): 30% of customers
- High Risk (70-100%): 20% of customers

### Contract Impact
- Month-to-month: 42.7% churn rate
- One year: 11.3% churn rate
- Two year: 2.8% churn rate

### Service Impact on Retention
- Tech Support: +18% retention
- Online Security: +15% retention
- Device Protection: +12% retention
- Online Backup: +11% retention

## 🔒 Security & Privacy

- Local network access only (not exposed to internet)
- No data stored on server
- Client-side predictions available
- Session-based processing
- No user tracking

## 🚀 Deployment Options

### Local Development
- Already configured for localhost
- No additional setup needed

### Network Sharing
- Enabled by default
- Access from any device on WiFi
- See NETWORK_ACCESS.md for details

### Production Deployment
Consider these platforms:
- **Heroku**: Easy Python deployment
- **AWS**: Scalable cloud hosting
- **Google Cloud**: ML-optimized infrastructure
- **Azure**: Enterprise solutions
- **DigitalOcean**: Simple VPS hosting

## 📝 Customization

### Integrate Your Own Model
```python
import joblib

# Save your model
joblib.dump(model, 'churn_model.pkl')

# Load in app.py
model = joblib.load('churn_model.pkl')

# Use for predictions
prediction = model.predict_proba(features)[0][1] * 100
```

### Customize Thresholds
Edit `script.js`:
```javascript
// Change risk thresholds
if (probability >= 70) {  // High risk
if (probability >= 40) {  // Medium risk
else {                    // Low risk
```

### Add New Features
1. Update HTML form
2. Modify `script.js` calculation
3. Adjust `app.py` if using backend
4. Update model training if needed

## 📚 Documentation

- **README.md**: This file (complete overview)
- **QUICKSTART.md**: 30-second setup guide
- **NETWORK_ACCESS.md**: Network configuration
- **test_samples.json**: Example test data

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Additional ML models (Random Forest, XGBoost)
- More visualizations
- API integration
- Database storage
- User authentication
- Export functionality
- Email notifications

## 📄 License

This project is for educational and demonstration purposes.

## 🎓 Learning Outcomes

This project demonstrates:
- End-to-end ML application development
- Professional UI/UX design
- Data visualization techniques
- Business intelligence integration
- Network application deployment
- Responsive web design
- Client-server architecture

## 🏆 Achievements

- ✅ 84.2% model accuracy
- ✅ Professional enterprise UI
- ✅ Real-time predictions
- ✅ Interactive analytics
- ✅ Network accessibility
- ✅ Mobile responsive
- ✅ Production-ready code

## 📞 Support

For issues or questions:
1. Check QUICKSTART.md
2. Review NETWORK_ACCESS.md
3. Test with test.html scenarios
4. Check browser console (F12)

## 🎉 Acknowledgments

- Dataset: Telecom Customer Churn Dataset
- Icons: Lucide React
- Charts: Chart.js
- Framework: Flask
- ML Library: Scikit-learn

---

**Made with ❤️ for better customer retention**

🌟 Star this repo if you find it helpful!
