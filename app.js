const express = require('express');
const app = express();

app.use(express.json());

// Simulated "developer services" endpoints
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Developer Tools API' });
});

app.get('/api/environments', (req, res) => {
  // Mock data that might be relevant to developer infrastructure
  const environments = [
    { id: 'dev', name: 'Development', status: 'active' },
    { id: 'staging', name: 'Staging', status: 'active' },
    { id: 'prod', name: 'Production', status: 'active' }
  ];
  res.status(200).json(environments);
});

app.get('/api/config', (req, res) => {
    const config = {
      defaultRegion: 'us-west-2',
      logLevel: 'info',
      services: ['auth', 'storage', 'compute']
    };
    res.status(200).json(config);
  });

app.get('/api/metrics', (req, res) => {
  const metrics = {
    totalRequests: 12754,
    averageResponseTime: 45,
    errorRate: 0.02,
    activeUsers: 325
  };
  res.status(200).json(metrics);
});

// For testing exports
module.exports = app;

// Start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
