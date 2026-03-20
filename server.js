import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

console.log('🚀 Starting server...');
console.log('📁 Current directory:', process.cwd());
console.log('🌍 NODE_ENV:', process.env.NODE_ENV);
console.log('🔌 PORT:', port);

// Check if dist directory exists
const distPath = path.join(__dirname, 'dist');
console.log('📂 Looking for dist directory at:', distPath);

if (fs.existsSync(distPath)) {
  console.log('✅ dist directory found');
  const files = fs.readdirSync(distPath);
  console.log('📄 dist contents:', files);
} else {
  console.error('❌ dist directory not found!');
  console.error('Available files in current directory:', fs.readdirSync(__dirname));
  process.exit(1);
}

// Add health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    port: port
  });
});

// Serve static files from the dist directory
app.use(express.static(distPath));

// Handle React Router - send all requests to index.html
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('index.html not found');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log('🎉 Server is running successfully!');
  console.log(`🌐 Local: http://localhost:${port}`);
  console.log(`🏥 Health check: http://localhost:${port}/health`);
}).on('error', (err) => {
  console.error('❌ Server failed to start:', err);
  process.exit(1);
});