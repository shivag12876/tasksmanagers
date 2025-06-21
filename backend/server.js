import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ye path hai: /opt/render/project/src/frontend/dist
const staticPath = path.join(__dirname, '../frontend/dist');

console.log('Serving static files from:', staticPath);

// Static files serve karo
app.use(express.static(staticPath));

// Sab unknown routes pe index.html bhejna
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
