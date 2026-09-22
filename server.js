const express = require('express');
const path = require('path');

const app = express();
// Process.env.PORT Render ke liye zaroori hai
const PORT = process.env.PORT || 3000;

// Public folder se index.html serve karna
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
