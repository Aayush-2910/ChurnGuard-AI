# 🚀 ChurnGuard AI - Quick Start Guide

## ⚡ Instant Setup (30 seconds)

### Option 1: Direct Browser Access
```bash
# Just open in browser
start index.html
```

### Option 2: Flask Server (Recommended)
```bash
# Install dependencies
pip install flask flask-cors pandas numpy scikit-learn

# Start server
python app.py

# Open browser
http://localhost:5000
```

## 📊 Pages Available

1. **Dashboard** (`index.html`)
   - Customer churn prediction form
   - Real-time risk analysis
   - Business metrics (CLV, Revenue Loss)
   - Strategic recommendations

2. **Analytics** (`analytics.html`)
   - Interactive charts and graphs
   - KPI dashboard
   - Model performance metrics
   - Data visualizations

3. **Quick Test** (`test.html`)
   - Auto-fill test scenarios
   - One-click testing
   - High/Medium/Low risk examples

## 🎯 Quick Test

### Method 1: Using Test Page
```bash
# Open test page
http://localhost:5000/test.html

# Click any button:
- "Fill High Risk Customer" → Auto-fills and predicts
- "Fill Low Risk Customer" → Auto-fills and predicts
- "Fill Moderate Risk Customer" → Auto-fills and predicts
```

### Method 2: Manual Testing

**High Risk Customer:**
- Tenure: 3 months
- Contract: Month-to-month
- Payment: Electronic check
- Monthly Charges: $85.50
- No premium services

**Low Risk Customer:**
- Tenure: 48 months
- Contract: Two year
- Payment: Credit card (automatic)
- Monthly Charges: $95.00
- All premium services enabled

## 🎨 Features

✅ Professional UI with Charcoal & Blush Pink theme
✅ Lucide React icons
✅ Animated charts (Chart.js)
✅ Real-time predictions
✅ Business intelligence metrics
✅ Strategic action recommendations
✅ Fully responsive design
✅ Loading animations
✅ Auto-fill test data

## 📁 Project Structure

```
├── index.html          # Main dashboard
├── analytics.html      # Analytics page
├── test.html          # Quick test page
├── style.css          # All styles
├── script.js          # Prediction logic
├── app.py             # Flask backend
├── requirements.txt   # Python dependencies
└── README.md          # Full documentation
```

## 🔧 Troubleshooting

**Port already in use?**
```bash
# Change port in app.py (last line)
app.run(debug=True, port=5001)
```

**Charts not showing?**
- Check internet connection (Chart.js CDN)
- Clear browser cache (Ctrl+Shift+Delete)

**Form not submitting?**
- Check browser console (F12)
- Ensure all fields are filled

## 💡 Tips

1. Use test.html for quick demos
2. Analytics page shows real dataset statistics
3. All predictions run client-side (no backend needed)
4. Model accuracy: 84.2%

## 🎓 Understanding Results

**Churn Probability:**
- 0-40%: Low Risk (Green) → Stable customer
- 40-70%: Moderate Risk (Pink) → Needs attention
- 70-100%: High Risk (Red) → Urgent intervention

**Business Metrics:**
- CLV: Customer Lifetime Value
- Revenue Loss: Potential loss if customer churns
- Priority: Retention urgency level

## 📞 Support

For issues or questions:
1. Check browser console (F12)
2. Review README.md
3. Test with test.html scenarios

---

Made with ❤️ for better customer retention
