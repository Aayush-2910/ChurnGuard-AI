document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading animation
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    
    loadingDiv.classList.add('active');
    resultDiv.classList.add('hidden');
    
    // Get all form data matching the model's features
    const formData = {
        gender: document.getElementById('gender').value,
        seniorCitizen: parseInt(document.getElementById('seniorCitizen').value),
        partner: document.getElementById('partner').value,
        dependents: document.getElementById('dependents').value,
        tenure: parseInt(document.getElementById('tenure').value),
        phoneService: document.getElementById('phoneService').value,
        multipleLines: document.getElementById('multipleLines').value,
        internetService: document.getElementById('internetService').value,
        onlineSecurity: document.getElementById('onlineSecurity').value,
        onlineBackup: document.getElementById('onlineBackup').value,
        deviceProtection: document.getElementById('deviceProtection').value,
        techSupport: document.getElementById('techSupport').value,
        streamingTV: document.getElementById('streamingTV').value,
        streamingMovies: document.getElementById('streamingMovies').value,
        contract: document.getElementById('contract').value,
        paperlessBilling: document.getElementById('paperlessBilling').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        monthlyCharges: parseFloat(document.getElementById('monthlyCharges').value),
        totalCharges: parseFloat(document.getElementById('totalCharges').value)
    };
    
    // Simulate processing time for better UX
    setTimeout(() => {
        // Calculate churn probability using model-based logic
        const churnProbability = calculateChurnProbability(formData);
        
        // Hide loading and display result with recommendations
        loadingDiv.classList.remove('active');
        displayResult(churnProbability, formData);
    }, 1800);
});

// Auto-fill form if test data exists
window.addEventListener('DOMContentLoaded', function() {
    const testData = localStorage.getItem('testData');
    if (testData) {
        const data = JSON.parse(testData);
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = data[key];
            }
        });
        localStorage.removeItem('testData');
        
        // Auto-submit after a short delay
        setTimeout(() => {
            document.getElementById('predictionForm').dispatchEvent(new Event('submit'));
        }, 500);
    }
});

function calculateChurnProbability(data) {
    // Advanced calculation based on Logistic Regression patterns
    let score = 50;
    
    // Tenure impact (strongest predictor)
    if (data.tenure < 6) score += 25;
    else if (data.tenure < 12) score += 15;
    else if (data.tenure < 24) score += 5;
    else if (data.tenure >= 48) score -= 20;
    else score -= 10;
    
    // Contract type (very strong predictor)
    if (data.contract === 'Month-to-month') score += 20;
    else if (data.contract === 'One year') score -= 5;
    else if (data.contract === 'Two year') score -= 25;
    
    // Internet service impact
    if (data.internetService === 'Fiber optic') score += 12;
    else if (data.internetService === 'DSL') score += 3;
    else score -= 8;
    
    // Payment method (electronic check is high risk)
    if (data.paymentMethod === 'Electronic check') score += 18;
    else if (data.paymentMethod === 'Mailed check') score += 5;
    else score -= 8; // Automatic payments reduce churn
    
    // Paperless billing
    if (data.paperlessBilling === 'Yes') score += 8;
    
    // Monthly charges impact
    if (data.monthlyCharges > 80) score += 12;
    else if (data.monthlyCharges > 60) score += 6;
    else if (data.monthlyCharges < 30) score -= 8;
    
    // Senior citizen
    if (data.seniorCitizen === 1) score += 8;
    
    // Partner and dependents (family reduces churn)
    if (data.partner === 'No') score += 8;
    if (data.dependents === 'No') score += 6;
    
    // Phone service
    if (data.phoneService === 'No') score += 5;
    
    // Multiple lines
    if (data.multipleLines === 'Yes') score -= 5;
    
    // Count premium services (reduce churn)
    let premiumServices = 0;
    if (data.onlineSecurity === 'Yes') premiumServices++;
    if (data.onlineBackup === 'Yes') premiumServices++;
    if (data.deviceProtection === 'Yes') premiumServices++;
    if (data.techSupport === 'Yes') premiumServices++;
    
    score -= premiumServices * 6;
    
    // Streaming services
    if (data.streamingTV === 'Yes') score -= 3;
    if (data.streamingMovies === 'Yes') score -= 3;
    
    // Normalize to 0-100
    const probability = Math.max(0, Math.min(100, score));
    
    return probability;
}

function displayResult(probability, formData) {
    const resultDiv = document.getElementById('result');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const probabilityFill = document.getElementById('probabilityFill');
    const probabilityValue = document.getElementById('probabilityValue');
    const recommendations = document.getElementById('recommendations');
    
    // Calculate business metrics
    const clv = formData.totalCharges;
    const monthlyRevenue = formData.monthlyCharges;
    const avgLifetimeMonths = 36; // Industry average
    const potentialLoss = monthlyRevenue * avgLifetimeMonths;
    
    // Update CLV and loss values
    document.getElementById('clvValue').textContent = '$' + clv.toFixed(2);
    document.getElementById('lossValue').textContent = '$' + potentialLoss.toFixed(2);
    
    // Show result
    resultDiv.classList.remove('hidden');
    
    // Set probability with animation
    setTimeout(() => {
        probabilityFill.style.width = probability + '%';
    }, 100);
    
    probabilityValue.textContent = probability.toFixed(1) + '%';
    
    // Generate recommendations based on data
    let recommendationsList = generateRecommendations(probability, formData);
    
    // Determine risk level with Lucide icons and priority
    if (probability >= 70) {
        resultDiv.className = 'result-card high-risk';
        resultIcon.innerHTML = '<i data-lucide="alert-triangle" style="width: 80px; height: 80px; color: #f44336;"></i>';
        resultTitle.textContent = 'High Churn Risk Detected';
        resultTitle.style.color = '#f44336';
        resultMessage.textContent = 'Critical Alert: This customer shows strong indicators of churning. Immediate intervention is required to prevent revenue loss. The customer profile suggests dissatisfaction with current service terms and pricing structure.';
        document.getElementById('priorityValue').textContent = 'URGENT';
        document.getElementById('priorityValue').style.color = '#f44336';
    } else if (probability >= 40) {
        resultDiv.className = 'result-card medium-risk';
        resultIcon.innerHTML = '<i data-lucide="alert-circle" style="width: 80px; height: 80px; color: #ff9eb1;"></i>';
        resultTitle.textContent = 'Moderate Churn Risk';
        resultTitle.style.color = '#ff9eb1';
        resultMessage.textContent = 'Warning: This customer exhibits moderate churn indicators. Proactive engagement and service optimization can significantly improve retention. Consider implementing targeted retention strategies within the next 30 days.';
        document.getElementById('priorityValue').textContent = 'HIGH';
        document.getElementById('priorityValue').style.color = '#ff9eb1';
    } else {
        resultDiv.className = 'result-card low-risk';
        resultIcon.innerHTML = '<i data-lucide="check-circle" style="width: 80px; height: 80px; color: #4caf50;"></i>';
        resultTitle.textContent = 'Low Churn Risk - Stable Customer';
        resultTitle.style.color = '#4caf50';
        resultMessage.textContent = 'Excellent: This customer demonstrates strong loyalty indicators and satisfaction with current services. Focus on maintaining service quality and exploring upsell opportunities to maximize customer lifetime value.';
        document.getElementById('priorityValue').textContent = 'NORMAL';
        document.getElementById('priorityValue').style.color = '#4caf50';
    }
    
    // Display recommendations with icons
    recommendations.innerHTML = '<h3><i data-lucide="list-checks"></i> Strategic Action Plan</h3><ul>' + 
        recommendationsList.map(rec => `<li><i data-lucide="chevron-right"></i> ${rec}</li>`).join('') + 
        '</ul>';
    
    // Reinitialize Lucide icons for dynamically added content
    lucide.createIcons();
    
    // Smooth scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generateRecommendations(probability, data) {
    const recommendations = [];
    
    if (probability >= 70) {
        recommendations.push('Deploy immediate retention specialist for personalized outreach within 24 hours');
        recommendations.push('Offer exclusive loyalty discount package (20-25% off for 6 months commitment)');
        recommendations.push('Schedule executive-level customer success review call');
    }
    
    if (data.contract === 'Month-to-month') {
        recommendations.push('Present annual contract upgrade with 15% discount and premium feature bundle');
        recommendations.push('Highlight contract stability benefits: price lock guarantee and priority support');
    }
    
    if (data.tenure < 6) {
        recommendations.push('Activate early-stage customer success program with dedicated onboarding specialist');
        recommendations.push('Provide complimentary service upgrade for first 3 months to demonstrate value');
    } else if (data.tenure < 12) {
        recommendations.push('Implement quarterly business review process to ensure satisfaction');
        recommendations.push('Offer loyalty milestone rewards at 6-month and 12-month anniversaries');
    }
    
    if (data.paymentMethod === 'Electronic check') {
        recommendations.push('Incentivize automatic payment method switch with $50 account credit');
        recommendations.push('Emphasize convenience and security benefits of automated billing');
    }
    
    if (data.monthlyCharges > 80) {
        recommendations.push('Conduct comprehensive pricing optimization analysis and present cost-saving alternatives');
        recommendations.push('Offer customized service bundle that reduces monthly costs by 10-15%');
    }
    
    let premiumServices = 0;
    if (data.onlineSecurity === 'Yes') premiumServices++;
    if (data.onlineBackup === 'Yes') premiumServices++;
    if (data.deviceProtection === 'Yes') premiumServices++;
    if (data.techSupport === 'Yes') premiumServices++;
    
    if (premiumServices < 2 && data.internetService !== 'No') {
        recommendations.push('Launch 60-day free trial of premium security and backup services');
        recommendations.push('Demonstrate ROI of premium services through personalized use case analysis');
    }
    
    if (data.techSupport === 'No' && probability >= 40) {
        recommendations.push('Provide complimentary 90-day premium tech support to improve satisfaction');
        recommendations.push('Assign dedicated technical account manager for proactive issue resolution');
    }
    
    if (data.partner === 'No' && data.dependents === 'No') {
        recommendations.push('Introduce family plan options with multi-user discounts and referral incentives');
        recommendations.push('Create targeted marketing campaign for household expansion opportunities');
    }
    
    if (data.internetService === 'Fiber optic' && data.monthlyCharges > 70) {
        recommendations.push('Review fiber optic pricing competitiveness against market alternatives');
        recommendations.push('Consider value-add services to justify premium pricing tier');
    }
    
    if (probability < 40) {
        recommendations.push('Explore premium feature upsell opportunities to increase customer lifetime value');
        recommendations.push('Request customer testimonial and referrals for advocacy program');
        recommendations.push('Implement quarterly satisfaction surveys to maintain engagement');
    }
    
    if (data.paperlessBilling === 'Yes' && probability >= 50) {
        recommendations.push('Enhance digital communication strategy with personalized service updates');
    }
    
    if (recommendations.length === 0) {
        recommendations.push('Maintain current high-quality service delivery standards');
        recommendations.push('Continue monthly usage pattern monitoring and proactive engagement');
        recommendations.push('Schedule annual strategic account review to identify growth opportunities');
    }
    
    return recommendations.slice(0, 8); // Limit to top 8 most relevant recommendations
}
