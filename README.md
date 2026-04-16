<img width="626" height="268" alt="vecino-new-banner (1)" src="https://github.com/user-attachments/assets/6f7432fa-1088-462a-b510-eda677b407e4" />

# quick-call-as-a-service
Ever needed a creative way to ask someone to hop on a quick call?  This API returns random, genuine, and sometimes painfully relatable ways to ask for a quick call Inspired by @hotheadhacker and quick call king @jamesefhawkins. Built with creativity and humor, just because.

Built for humans, calendars, and the eternal 5-minute call that takes 47 minutes.

---

## 🚀 API Usage

**Base URL**
```
https://xaviigna.com/quick-call
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request
```http
GET /quick-call
```

### ✅ Example Response
```json
{
  "phrase": "Can we jump on real quick? I need you to talk me into this or talk me out of it."
}
```

### 🔄 Batch Request
```http
GET /quick-calls?count=3
```

### ✅ Batch Response
```json
{
  "phrases": [
    "Hey, quick call? I have something I want to show you.",
    "Can we hop on? I need your gut, your experience, and about 4 minutes of your time.",
    "Do you have a second to hop on? I need your honest opinion, not your polite one."
  ]
}
```

Use it in apps, bots, landing pages, Slack integrations, calendar tools, or wherever you need to ask for a quick call without sounding like a robot.

---

## 🛠️ Self-Hosting

Want to run it yourself? It's lightweight and simple.

### 1. Clone this repository
```bash
git clone https://github.com/xaviigna/quick-call-as-a-service.git
cd quick-call-as-a-service
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The API will be live at:
```
http://localhost:3001/quick-call
```

You can also change the port using an environment variable:
```bash
PORT=5000 npm start
```

---

## 📁 Project Structure

```
quick-calls-as-a-service/
├── index.js          # Express API
├── phrases.json      # 178 ways to ask for a quick call
├── package.json
└── README.md
```

---

## 📦 package.json

```json
{
  "name": "quick-calls-as-a-service",
  "version": "1.0.0",
  "description": "An API that returns random creative ways to ask for a quick call.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Xavier Benavides",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## 👤 Author & Credits

Built with creativity and humor — just because.

Inspired by the original **[No-as-a-Service](https://github.com/hotheadhacker/no-as-a-service)** by [hotheadhacker](https://github.com/hotheadhacker), created with creative stubbornness.

And inspired by the legend of the quick call himself — **[James Hawkins](https://github.com/jamesefhawkins)** — whose humor about hopping on quick calls started all of this.

---

## 📄 License

MIT — do whatever, just don't forget to hop on the quick call.
