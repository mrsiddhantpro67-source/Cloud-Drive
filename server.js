const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 'public' folder se static files serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

// Root route - index.html render karega
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server start karein
app.listen(PORT, () => {
    console.log(`☁️ CloudDrive Server running at: http://localhost:${PORT}`);
});
