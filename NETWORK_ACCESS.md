# 🌐 Network Access Guide - ChurnGuard AI

## ✅ Server is Running on Network!

### 📍 Your Access URLs:

**Local Access (This Computer):**
```
http://localhost:5000
http://127.0.0.1:5000
```

**Network Access (Other Devices):**
```
http://10.108.231.151:5000
```

---

## 📱 Access from Other Devices

### Same WiFi Network:

1. **Mobile Phone:**
   - Connect to same WiFi
   - Open browser
   - Go to: `http://10.108.231.151:5000`

2. **Another Computer:**
   - Connect to same WiFi
   - Open browser
   - Go to: `http://10.108.231.151:5000`

3. **Tablet:**
   - Connect to same WiFi
   - Open browser
   - Go to: `http://10.108.231.151:5000`

---

## 🔥 Quick Access Links:

### Dashboard:
```
http://10.108.231.151:5000
```

### Analytics:
```
http://10.108.231.151:5000/analytics.html
```

### Quick Test:
```
http://10.108.231.151:5000/test.html
```

---

## 🛡️ Firewall Settings (If Not Working)

### Windows Firewall:

1. Open Windows Defender Firewall
2. Click "Allow an app through firewall"
3. Click "Change settings"
4. Find "Python" or add new rule
5. Check both "Private" and "Public"
6. Click OK

### Quick Command (Run as Administrator):
```powershell
netsh advfirewall firewall add rule name="Flask Server" dir=in action=allow protocol=TCP localport=5000
```

---

## 📊 Server Status:

- ✅ Running on: `0.0.0.0:5000`
- ✅ Local IP: `10.108.231.151`
- ✅ Port: `5000`
- ✅ Debug Mode: ON
- ✅ Network Access: ENABLED

---

## 🔍 Troubleshooting:

### Can't Access from Phone?

1. **Check WiFi:**
   - Both devices on same network?
   - Not using mobile data?

2. **Check Firewall:**
   - Windows Firewall blocking?
   - Antivirus blocking?

3. **Check Server:**
   - Is server still running?
   - Any errors in console?

4. **Try Different Browser:**
   - Chrome
   - Safari
   - Firefox

### Find Your IP Again:
```bash
ipconfig
```
Look for "IPv4 Address" under your WiFi adapter.

---

## 📲 QR Code Access (Optional)

You can create a QR code for easy mobile access:
1. Go to: https://www.qr-code-generator.com/
2. Enter: `http://10.108.231.151:5000`
3. Generate QR code
4. Scan with phone camera

---

## 🎯 Demo Instructions:

### For Presentations:

1. **Open on Projector:**
   ```
   http://10.108.231.151:5000
   ```

2. **Share with Audience:**
   - Show QR code
   - Or share IP: `10.108.231.151:5000`

3. **Live Demo:**
   - Use test.html for quick demos
   - Show analytics page
   - Real-time predictions

---

## ⚠️ Important Notes:

1. **IP May Change:**
   - If you restart router
   - If you reconnect WiFi
   - Run `ipconfig` to check new IP

2. **Security:**
   - Only accessible on local network
   - Not exposed to internet
   - Safe for demos and testing

3. **Performance:**
   - Multiple users can access
   - Each gets their own session
   - No data shared between users

---

## 🚀 Production Deployment (Optional)

For public internet access, consider:
- Heroku
- AWS
- Google Cloud
- Azure
- DigitalOcean

---

**Server Running Successfully! 🎉**

Access from any device on your network:
`http://10.108.231.151:5000`
